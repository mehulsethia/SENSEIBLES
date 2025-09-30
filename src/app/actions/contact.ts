"use server";

import "server-only";

import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email so we can reach you."),
  company: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(12, "Share a few more details about the opportunity."),
});

type ContactFields = z.infer<typeof contactSchema>;

type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: ContactFieldErrors;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  errors: undefined,
};

const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT ?? "sethiamehul14@gmail.com";

function mapErrors(errors: Record<string, string[] | undefined>): ContactFieldErrors {
  return Object.fromEntries(
    Object.entries(errors).map(([key, value]) => [key, value?.[0]])
  ) as ContactFieldErrors;
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const { fieldErrors } = parsed.error.flatten();
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors: mapErrors(fieldErrors),
    };
  }

  const { name, email, company, message } = parsed.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form misconfigured: missing SMTP environment variables.");
    return {
      status: "error",
      message: "We're updating our inbox. Please email hello@senseibles.com directly.",
      errors: undefined,
    };
  }

  const port = Number(SMTP_PORT);
  const secure = SMTP_SECURE ? SMTP_SECURE !== "false" : port === 465;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const cleanedCompany = company ? company : "—";

    await transporter.sendMail({
      from: `Senseibles Website <${SMTP_USER}>`,
      replyTo: `${name} <${email}>`,
      to: CONTACT_RECIPIENT,
      subject: `New Senseibles enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${cleanedCompany}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #0f172a;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${cleanedCompany}</p>
          <p><strong>Message</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return {
      status: "success",
      message: "Thanks! A Senseibles producer will get in touch shortly.",
      errors: undefined,
    };
  } catch (error) {
    console.error("Contact form submission failed", error);
    return {
      status: "error",
      message: "We couldn't send that message. Email hello@senseibles.com instead.",
      errors: undefined,
    };
  }
}

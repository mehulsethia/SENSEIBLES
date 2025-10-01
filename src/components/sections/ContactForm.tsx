"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "We respond within one business day.",
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const onChange = (field: keyof typeof formValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const validate = (): boolean => {
    const nextErrors: FieldErrors = {};

    if (!formValues.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formValues.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      nextErrors.email = "Enter a valid email.";
    }

    if (!formValues.message.trim() || formValues.message.trim().length < 12) {
      nextErrors.message = "Share a few more details.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setFormState({ status: "error", message: "Please fix the highlighted fields." });
      return;
    }

    setFormState({ status: "submitting", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          company: formValues.company,
          message: formValues.message,
        }),
      });

      if (!response.ok) {
        const { message } = await response.json().catch(() => ({ message: "" }));
        throw new Error(message || "Request failed");
      }

      setFormState({
        status: "success",
        message: "Thanks! A producer will reply shortly.",
      });
      setFormValues({ name: "", email: "", company: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Contact form submission error", error);
      setFormState({
        status: "error",
        message: "We couldn’t send that. Email sethiamehul14@gmail.com instead.",
      });
    }
  };

  const statusTone = useMemo(() => {
    switch (formState.status) {
      case "success":
        return "text-emerald-300";
      case "error":
        return "text-rose-300";
      default:
        return "text-slate-400";
    }
  }, [formState.status]);

  const disabled = formState.status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={onChange("name")}
            className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-sky-300 focus:bg-white/15"
            placeholder="Your name"
            disabled={disabled}
          />
          {errors.name ? <p className="text-xs text-rose-300">{errors.name}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={onChange("email")}
            className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-sky-300 focus:bg-white/15"
            placeholder="you@company.com"
            disabled={disabled}
          />
          {errors.email ? <p className="text-xs text-rose-300">{errors.email}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="contact-company">
          Company (optional)
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          value={formValues.company}
          onChange={onChange("company")}
          className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-sky-300 focus:bg-white/15"
          placeholder="Studio, collective, or brand"
          disabled={disabled}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="contact-message">
          Project Notes
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formValues.message}
          onChange={onChange("message")}
          className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-sky-300 focus:bg-white/15"
          placeholder="Launch goals, timelines, references, budget signals…"
          disabled={disabled}
        />
        {errors.message ? <p className="text-xs text-rose-300">{errors.message}</p> : null}
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-12 items-center justify-center rounded-full bg-sky-400 px-8 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formState.status === "submitting" ? "Sending…" : "Send Message"}
        </button>
        <p aria-live="polite" className={`text-xs ${statusTone}`}>
          {formState.message}
        </p>
      </div>
    </form>
  );
}

export default ContactForm;

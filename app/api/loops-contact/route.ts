import { NextResponse } from "next/server"

type ContactPayload = {
  name?: string
  company?: string
  email?: string
  phone?: {
    country?: string
    number?: string
  }
  services?: string[]
  budget?: string
  message?: string
}

const PHONE_DIAL_CODES: Record<string, string> = {
  US: "+1",
  IN: "+91",
  GB: "+44",
  AE: "+971",
  SG: "+65",
  AU: "+61",
  CA: "+1",
  DE: "+49",
  FR: "+33",
  ES: "+34",
  NL: "+31",
  SE: "+46",
  CH: "+41",
}

const LOOPS_ENDPOINT = "https://app.loops.so/api/v1/transactional"
const DEFAULT_TRANSACTIONAL_ID = "cmg6gmdqo02ogwh0i94sbidym"
const DEFAULT_NOTIFICATION_EMAIL = "sethiamehul14@gmail.com"

export async function POST(request: Request) {
  const loopsApiKey = process.env.LOOPS_API_KEY
  const transactionalId = process.env.LOOPS_TRANSACTIONAL_ID ?? DEFAULT_TRANSACTIONAL_ID
  const notificationEmail = process.env.LOOPS_NOTIFICATION_EMAIL ?? DEFAULT_NOTIFICATION_EMAIL

  const body = (await request.json()) as ContactPayload

  const phoneCountry = body.phone?.country?.toUpperCase() ?? ""
  const dialCode = PHONE_DIAL_CODES[phoneCountry] ?? ""
  const trimmedNumber = body.phone?.number?.trim() ?? ""
  const phone = [dialCode, trimmedNumber].filter(Boolean).join(" ")

  const services = body.services?.length ? body.services.join(", ") : "Not specified"
  const budget = body.budget?.trim() || "Not specified"
  const projectDetails = body.message?.trim() || "Not provided"

  const payload = {
    transactionalId,
    email: notificationEmail,
    dataVariables: {
      name: body.name ?? "",
      email: body.email ?? "",
      phone,
      company: body.company ?? "",
      services,
      budget,
      project_details: projectDetails,
    },
  }

  if (!loopsApiKey) {
    console.warn(
      "[loops-contact] Missing LOOPS_API_KEY. Skipping Loops transactional request. Payload:",
      payload,
    )
    return NextResponse.json({ success: true, skipped: true })
  }

  try {
    const response = await fetch(LOOPS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loopsApiKey}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        {
          error: "Failed to submit data to Loops.",
          details: errorText,
        },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error("Loops submission failed:", error)
    return NextResponse.json(
      { error: "Unexpected error while forwarding data to Loops." },
      { status: 500 },
    )
  }

  return NextResponse.json({ success: true })
}


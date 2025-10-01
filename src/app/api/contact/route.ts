import { NextResponse } from "next/server";

const LOOPS_ENDPOINT = "https://app.loops.so/api/v1/transactional";
const TRANSACTIONAL_ID = "cmg6gmdqo02ogwh0i94sbidym";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        message: "Please provide name, email, and message.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.LOOPS_API_KEY;

  if (!apiKey) {
    console.error("Missing LOOPS_API_KEY environment variable.");
    return NextResponse.json(
      {
        message: "Server misconfigured. Please contact the studio directly.",
      },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(LOOPS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transactionalId: TRANSACTIONAL_ID,
        email,
        dataVariables: {
          name,
          email,
          company,
          message,
        },
      }),
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => null);
      console.error("Loops API error", response.status, errorPayload);
      return NextResponse.json(
        {
          message: "We couldn't send your message. Please email the studio directly.",
        },
        { status: 502 },
      );
    }

    const result = await response.json();

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json(
      {
        message: "Unexpected error. Please email the studio directly.",
      },
      { status: 500 },
    );
  }
}

export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import {
  buildFollowUpBossEvent,
  postFollowUpBossEvent,
  validateLeadPayload,
  type LeadFormPayload,
} from "@/lib/follow-up-boss";

async function parseJsonBody(request: NextRequest): Promise<LeadFormPayload | NextResponse> {
  try {
    const body = (await request.json()) as LeadFormPayload;
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    return body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function POST(request: NextRequest) {
  const parsed = await parseJsonBody(request);
  if (parsed instanceof NextResponse) {
    return parsed;
  }

  const validationError = validateLeadPayload(parsed);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  if (!apiKey) {
    console.error(
      "FOLLOW_UP_BOSS_API_KEY is not configured for macdonaldhighlandshomes.com lead capture"
    );
    return NextResponse.json(
      { error: "Lead capture is temporarily unavailable" },
      { status: 503 }
    );
  }

  const referer = request.headers.get("referer");
  const sourceUrl =
    (typeof parsed.sourceUrl === "string" && parsed.sourceUrl.trim()) ||
    referer ||
    "https://macdonaldhighlandshomes.com/";

  const event = buildFollowUpBossEvent(parsed, sourceUrl);

  try {
    const result = await postFollowUpBossEvent(event, apiKey);
    if (!result.ok) {
      console.error(`Follow Up Boss events API returned status ${result.status}`);
      return NextResponse.json(
        { error: "Failed to submit lead to CRM" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Lead submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Follow Up Boss events API request failed:", error);
    return NextResponse.json(
      { error: "Failed to submit lead to CRM" },
      { status: 502 }
    );
  }
}

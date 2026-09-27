const FUB_EVENTS_URL = "https://api.followupboss.com/v1/events";
const SITE_SOURCE = "macdonaldhighlandshomes.com";

export type LeadFormPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  propertyInterest?: string;
  source?: string;
  sourceUrl?: string;
  formName?: string;
  listingId?: string;
};

export function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export function resolveFubEventType(payload: LeadFormPayload): string {
  if (payload.listingId) {
    return "Property Inquiry";
  }

  const interest = (payload.propertyInterest || "").toLowerCase();
  if (interest === "selling" || interest === "valuation") {
    return "Seller Inquiry";
  }

  const source = (payload.source || "").toLowerCase();
  if (
    source.includes("newsletter") ||
    source.includes("registration") ||
    source.includes("guide")
  ) {
    return "Registration";
  }

  return "General Inquiry";
}

function buildFieldSummary(payload: LeadFormPayload): string {
  const lines: string[] = [];
  if (payload.propertyInterest) {
    lines.push(`Interest: ${payload.propertyInterest}`);
  }
  if (payload.phone) {
    lines.push(`Phone: ${payload.phone}`);
  }
  if (payload.email) {
    lines.push(`Email: ${payload.email}`);
  }
  return lines.join("\n");
}

export function buildFollowUpBossEvent(
  payload: LeadFormPayload,
  sourceUrl: string
): Record<string, unknown> {
  const { firstName, lastName } = splitName(payload.name || "");
  const formLabel = payload.formName || payload.source || "Contact Form";
  const visitorMessage = (payload.message || "").trim();
  const fieldSummary = buildFieldSummary(payload);
  const messageParts = [visitorMessage, fieldSummary].filter(Boolean);
  const message = messageParts.join(messageParts.length > 1 ? "\n\n" : "");

  const tags = [SITE_SOURCE, formLabel];

  return {
    source: SITE_SOURCE,
    system: SITE_SOURCE,
    type: resolveFubEventType(payload),
    message: message || `Inquiry from ${formLabel}`,
    description: `${formLabel} — macdonaldhighlandshomes.com`,
    sourceUrl,
    person: {
      firstName,
      lastName,
      emails: payload.email ? [{ value: payload.email }] : [],
      phones: payload.phone ? [{ value: payload.phone }] : [],
      tags,
    },
  };
}

export function validateLeadPayload(payload: LeadFormPayload): string | null {
  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const phone = (payload.phone || "").trim();

  if (!name) {
    return "Name is required";
  }
  if (!email && !phone) {
    return "Email or phone is required";
  }
  return null;
}

export async function postFollowUpBossEvent(
  event: Record<string, unknown>,
  apiKey: string
): Promise<{ ok: true; status: number } | { ok: false; status: number }> {
  const authorization = `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`;

  const response = await fetch(FUB_EVENTS_URL, {
    method: "POST",
    headers: {
      Authorization: authorization,
      "Content-Type": "application/json",
      "X-System": SITE_SOURCE,
    },
    body: JSON.stringify(event),
  });

  if (response.ok || response.status === 201 || response.status === 204) {
    return { ok: true, status: response.status };
  }

  return { ok: false, status: response.status };
}

export { SITE_SOURCE, FUB_EVENTS_URL };

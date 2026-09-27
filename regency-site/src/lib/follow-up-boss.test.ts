import assert from "node:assert/strict";
import test from "node:test";
import {
  buildFollowUpBossEvent,
  resolveFubEventType,
  splitName,
  validateLeadPayload,
} from "./follow-up-boss";

test("splitName handles single and multi-part names", () => {
  assert.deepEqual(splitName("Jan"), { firstName: "Jan", lastName: "" });
  assert.deepEqual(splitName("Jan Duffy"), { firstName: "Jan", lastName: "Duffy" });
});

test("resolveFubEventType maps seller interests", () => {
  assert.equal(resolveFubEventType({ propertyInterest: "selling" }), "Seller Inquiry");
  assert.equal(resolveFubEventType({ propertyInterest: "valuation" }), "Seller Inquiry");
  assert.equal(resolveFubEventType({ propertyInterest: "buying" }), "General Inquiry");
  assert.equal(resolveFubEventType({ listingId: "123" }), "Property Inquiry");
});

test("validateLeadPayload requires name and email or phone", () => {
  assert.equal(validateLeadPayload({}), "Name is required");
  assert.equal(validateLeadPayload({ name: "Test" }), "Email or phone is required");
  assert.equal(validateLeadPayload({ name: "Test", email: "a@b.com" }), null);
});

test("buildFollowUpBossEvent shapes FUB payload", () => {
  const event = buildFollowUpBossEvent(
    {
      name: "Jane Buyer",
      email: "jane@example.com",
      phone: "7025550100",
      message: "Hello",
      propertyInterest: "buying",
      source: "contact-form",
    },
    "https://macdonaldhighlandshomes.com/contact"
  );

  assert.equal(event.source, "macdonaldhighlandshomes.com");
  assert.equal(event.type, "General Inquiry");
  assert.equal((event.person as { firstName: string }).firstName, "Jane");
  assert.equal(event.sourceUrl, "https://macdonaldhighlandshomes.com/contact");
});

test("postFollowUpBossEvent uses mocked fetch", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response(null, { status: 201 }) as Response;

  const { postFollowUpBossEvent } = await import("./follow-up-boss");
  const result = await postFollowUpBossEvent({ type: "General Inquiry" }, "test-key");
  assert.equal(result.ok, true);

  globalThis.fetch = originalFetch;
});

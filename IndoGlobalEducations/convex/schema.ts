import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  indoglobal: defineTable({
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    countryPreference: v.optional(v.string()),
    course: v.optional(v.string()),
    country: v.optional(v.string()),
    state: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.string(),
    pagePath: v.string(),
    status: v.union(
      v.literal("new"),
      v.literal("contacted"),
      v.literal("closed"),
    ),
  })
    .index("by_status", ["status"])
    .index("by_email", ["email"])
    .index("by_phone", ["phone"]),
});

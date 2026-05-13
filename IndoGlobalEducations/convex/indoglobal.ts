import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

const cleanText = (value: string) => value.trim().replace(/\s+/g, " ");
const cleanOptionalText = (value?: string) => {
  const cleaned = cleanText(value ?? "");
  return cleaned.length > 0 ? cleaned : undefined;
};

const normalizeEmail = (value: string) => cleanText(value).toLowerCase();
const normalizePhone = (value: string) => cleanText(value).replace(/[^\d+]/g, "");

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const submitContact = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const fullName = cleanText(args.fullName);
    const email = normalizeEmail(args.email);
    const phone = normalizePhone(args.phone);

    if (!fullName || fullName.length < 2) {
      throw new ConvexError("Please enter your full name.");
    }

    if (!isValidEmail(email)) {
      throw new ConvexError("Please enter a valid email address.");
    }

    if (phone.replace(/\D/g, "").length < 7) {
      throw new ConvexError("Please enter a valid phone number.");
    }

    const id = await ctx.db.insert("indoglobal", {
      fullName,
      email,
      phone,
      countryPreference: cleanOptionalText(args.countryPreference),
      course: cleanOptionalText(args.course),
      country: cleanOptionalText(args.country),
      state: cleanOptionalText(args.state),
      message: cleanOptionalText(args.message),
      source: cleanText(args.source) || "website",
      pagePath: cleanText(args.pagePath) || "/",
      status: "new",
    });

    return { ok: true, id };
  },
});

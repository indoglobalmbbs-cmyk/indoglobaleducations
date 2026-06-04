# Indo Global Education TestSprite Scenarios

## Active Suite: Public Frontend Only
This file is the source of truth for the current TestSprite run against `http://localhost:3000`. Generate and execute only visitor-facing frontend tests from this active suite.

Do not generate active login, dashboard, admin mutation, Supabase RLS, or backend integration tests unless admin credentials and a dedicated test Supabase project are explicitly supplied for a separate run.

## Scenario ID Convention
- `FE-*`: active public frontend UI and E2E scenarios.
- `BE-*`: deferred backend/Supabase data scenarios.
- `ADMIN-*`: deferred authenticated dashboard scenarios.
- `SEC-*`: deferred auth, RLS, and access-control scenarios.

## Test Environment
- App URL: `http://localhost:3000`
- Test owner: TestSprite MCP
- Runtime: Vite React app served by production preview
- Test build flag: run production preview from a build created with `VITE_TESTSPRITE_E2E=true`
- Scope for this run: public pages, public navigation, public forms, galleries, FAQ, WhatsApp link inspection, and legal pages
- Out of scope for this run: `/login`, `/dashboard`, admin CRUD, authenticated sessions, and real Supabase mutations
- Main source files:
  - `src/routes/MainRoutes.tsx`
  - `src/components/CompactEnquiryForm.tsx`
  - `src/components/EnquiryModal.tsx`
  - `src/components/WhatsAppWidget.tsx`
  - `src/pages/blog/Blog.tsx`
  - `src/pages/news/News.tsx`
  - `src/pages/contact/Contact.tsx`

## Test Data and Mocking Rules
- Use unique test emails and 10-digit phone numbers for enquiry form data.
- Do not create real leads in normal TestSprite UI tests.
- In `VITE_TESTSPRITE_E2E=true` builds, enquiry forms must complete locally without real Supabase inserts or webhook posts.
- Do not generate API tests for the contact enquiry form. This project has no `/api/contact-enquiry`, `/api/supabase`, or `/api/webhook` endpoint. Contact enquiry coverage for the active suite must be browser UI coverage against `/contact-us`.
- Intercept or mock Supabase duplicate-check and insert calls for contact-form success, duplicate, and failure scenarios.
- Intercept or mock webhook calls; webhook failure must not fail an otherwise successful enquiry submission.
- Verify third-party links and embeds by inspecting attributes, not by navigating outside the app.
- For WhatsApp, verify the link `href` equals `https://api.whatsapp.com/send?phone=91709000502`; do not send the browser to WhatsApp.
- For Google Maps, verify the map iframe renders with title `Office Location`; do not interact with the external map document.
- Do not write API keys, Supabase keys, admin credentials, webhook secrets, or TestSprite API keys into this file.

# Frontend Test Scenarios

## Active TestSprite Recovery Cases

These cases are the current priority for the TestSprite rerun. Generate them as frontend browser tests only.

### TC001: Submit a valid contact enquiry
- Navigate to `/contact-us`.
- Use `data-testid="enquiry-full-name"` and enter `TestSprite Public User`.
- Use `data-testid="enquiry-email"` and enter a valid email such as `testsprite-public@example.com`. If TestSprite supplies `{{LOGIN_USER}}`, the E2E build normalizes it locally.
- Use `data-testid="enquiry-phone"` and enter `9876543210`.
- Use `data-testid="enquiry-address"` and enter `Test Address`.
- Use `data-testid="enquiry-course"` and select `MBBS`.
- Use `data-testid="enquiry-college-name"` and enter `Test Medical College`.
- Use `data-testid="enquiry-how-heard"` and select `Website`.
- Use `data-testid="enquiry-preferences"` and enter `India MBBS, test budget`.
- Click `data-testid="enquiry-submit"`.
- Verify `data-testid="enquiry-success"` is visible.
- Verify `data-testid="enquiry-full-name"` is reset to an empty value.
- Do not call or assert any `/api/*` endpoint.

### TC004: Show required-field validation on contact enquiry
- Navigate to `/contact-us`.
- Click `data-testid="enquiry-submit"` without entering form data.
- Verify `data-testid="enquiry-error"` is visible.
- Verify `data-testid="enquiry-success"` is not visible.
- Do not expect browser-native validation bubbles; the form uses app-level validation.

### TC005: Open the India country page from the homepage
- Navigate to `/`.
- Click `data-testid="countries-menu-button"`.
- Click `data-testid="nav-india-link"`.
- Verify `data-testid="india-country-page"` or `data-testid="india-page-title"` is visible.
- Verify the URL contains `/mbbs-in-india`.

### TC009: Open contact us from the footer
- Navigate to `/`.
- Scroll `data-testid="site-footer"` into view.
- Click `data-testid="footer-contact-link"`.
- Verify `data-testid="contact-page"` or `data-testid="contact-page-title"` is visible.
- Verify the URL contains `/contact-us`.

### TC014: Use the mobile menu to reach a destination page
- Set viewport to a mobile size such as `390x844`.
- Navigate to `/`.
- Click `data-testid="mobile-menu-toggle"`.
- Click `data-testid="nav-about-link"`.
- Verify `data-testid="about-page"` or `data-testid="about-page-title"` is visible.
- Verify `data-testid="mobile-menu-toggle"` remains visible after navigation.

### TC-FIX-001: Failed generated backend enquiry test must not be used
- Do not generate Python `requests` tests against `/api/contact-enquiry`.
- Do not assume a backend proxy exists for Supabase or webhook calls.
- Replace any generated backend-style enquiry test with `TC001` browser UI coverage.

## Public Smoke Scenarios

### FE-PUBLIC-001: Home Page Loads
- Open `/`.
- Verify the main layout renders without a blank screen.
- Verify navbar, primary page content, WhatsApp widget, and footer are visible.
- Verify no uncaught client error appears.

### FE-PUBLIC-002: Home Alias Loads
- Open `/home`.
- Verify the Home page renders the same core content as `/`.
- Verify browser navigation remains stable.

### FE-PUBLIC-003: About Page Loads
- Open `/about`.
- Verify agency/about content is visible.
- Verify footer links remain available.

### FE-PUBLIC-004: Country Landing Pages Load
- Open `/mbbs-in-india`, `/mbbs-in-russia`, `/mbbs-in-armenia`, and `/mbbs-in-georgia`.
- Verify each page has visible country-specific MBBS content.
- Verify images render or valid fallbacks are shown.
- Verify primary CTAs are visible and clickable.

### FE-PUBLIC-005: Blog Page Loads With Mocked Supabase
- Open `/blog`.
- Mock Supabase blog responses for record, empty, and error states.
- Verify loading state appears before delayed data resolves.
- Verify blog cards render when records are returned.
- Verify empty and error states are user-visible when mocked.

### FE-PUBLIC-006: News Page Loads With Mocked Supabase
- Open `/news`.
- Mock Supabase news responses for record, empty, and error states.
- Verify loading state appears before delayed data resolves.
- Verify news cards render when records are returned.
- Verify empty and error states are user-visible when mocked.

### FE-PUBLIC-007: Legal Pages Load
- Open `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`, and `/disclaimer`.
- Verify each page renders legal content and has no blank sections.
- Verify footer navigation between legal pages works.

## Navigation Scenarios

### FE-NAV-001: Desktop Navbar Navigation
- Open `/`.
- Use the desktop navbar to visit major public pages.
- Verify each click changes route and renders expected page content.
- Verify dropdown or submenu items are accessible when present.

### FE-NAV-002: Footer Navigation
- Open `/`.
- Scroll to footer.
- Click footer links for About, country pages, galleries, contact, and legal pages.
- Verify each destination route loads successfully.

### FE-NAV-003: Browser Back and Forward
- Visit `/`, `/about`, `/contact-us`, and `/faqs`.
- Use browser back and forward.
- Verify content updates correctly with each history navigation.

### FE-NAV-004: Mobile Menu
- Open `/` in a mobile viewport.
- Open the mobile menu.
- Verify menu items are visible and not clipped.
- Navigate to `/about`, `/mbbs-in-russia`, and `/contact-us`.
- Verify the menu closes or remains usable after navigation.

## Contact and Enquiry Form Scenarios

### FE-CONTACT-001: Contact Page Loads
- Open `/contact-us`.
- Verify phone, email, office address, working hours, enquiry form, and map area are visible.
- Verify the Google Maps iframe has title `Office Location`.
- Verify the map area does not block page interaction.

### FE-CONTACT-002: Required Field Validation
- Open `/contact-us`.
- Submit the enquiry form with empty fields.
- Verify required field validation prevents submission.
- Verify no Supabase insert request is made.

### FE-CONTACT-003: Invalid Email Validation
- Open `/contact-us`.
- Fill all required fields except use an invalid email.
- Submit the form.
- Verify an email validation error appears.
- Verify no Supabase insert request is made.

### FE-CONTACT-004: Invalid Phone Validation
- Open `/contact-us`.
- Fill all required fields but use an invalid phone value.
- Submit the form.
- Verify phone validation prevents submission.
- Verify no Supabase insert request is made.

### FE-CONTACT-005: Course Selection
- Open `/contact-us`.
- Open the course dropdown.
- Select `MBBS`.
- Verify the selected value is retained.

### FE-CONTACT-006: How Heard Selection
- Open `/contact-us`.
- Open the "How did you hear about us?" dropdown.
- Select one available option.
- Verify the selected value is retained.

### FE-CONTACT-007: Successful Enquiry Submission With Mocked Services
- Mock Supabase duplicate check to return no existing enquiry.
- Mock Supabase insert to return success.
- Mock webhook request to complete without failing the test.
- Open `/contact-us`.
- Fill valid data:
  - Name: `Test Student`
  - Email: unique test email
  - Phone: valid 10-digit test phone
  - Address: valid test address
  - Course: `MBBS`
  - College Name: valid college name
  - How Heard: any valid option
  - Preferences: valid country/budget preference
- Submit the form.
- Verify success message appears.
- Verify fields reset after successful submission.

### FE-CONTACT-008: Duplicate Enquiry Handling
- Mock Supabase duplicate check to return an existing enquiry.
- Fill valid enquiry data.
- Submit the form.
- Verify duplicate enquiry error appears.
- Verify Supabase insert is not called.

### FE-CONTACT-009: Supabase Insert Error Handling
- Mock duplicate check to return no existing enquiry.
- Mock Supabase insert to return an error.
- Fill valid enquiry data.
- Submit the form.
- Verify a user-facing error message appears.
- Verify the submit button returns to enabled state.

### FE-CONTACT-010: Slow Network Prevents Duplicate Submissions
- Mock Supabase duplicate check or insert to respond slowly.
- Fill valid enquiry data.
- Submit the form.
- Verify the button shows `Submitting...`.
- Verify the button is disabled while submission is pending.
- Verify rapid repeated clicks do not create multiple insert calls.

### FE-CONTACT-011: Webhook Failure Does Not Break Successful Enquiry
- Mock duplicate check and Supabase insert as successful.
- Mock webhook request as failed.
- Submit a valid enquiry.
- Verify success message still appears because webhook failure is non-blocking.

### FE-CONTACT-012: Enquiry Modal Submission
- Trigger an enquiry modal from a public CTA where available.
- Verify the modal opens.
- Validate required fields, successful mocked submission, duplicate error, and close behavior.

## WhatsApp Scenarios

### FE-WHATSAPP-001: Floating WhatsApp Widget
- Open `/`.
- Verify the floating WhatsApp button is visible.
- Verify it has accessible label `Chat on WhatsApp`.
- Verify its `href` is `https://api.whatsapp.com/send?phone=91709000502`.
- Verify `target="_blank"` and safe external-link attributes are present.
- Do not navigate to WhatsApp.

### FE-WHATSAPP-002: WhatsApp Widget Persists Across Pages
- Open `/about`, `/mbbs-in-russia`, `/contact-us`, and `/privacy-policy`.
- Verify the WhatsApp widget remains visible on each public page.
- Verify the `href` stays `https://api.whatsapp.com/send?phone=91709000502`.

## FAQ Scenarios

### FE-FAQ-001: FAQ Page Loads
- Open `/faqs`.
- Verify FAQ questions are visible.

### FE-FAQ-002: FAQ Accordion Opens and Closes
- Open `/faqs`.
- Click the first FAQ question.
- Verify the answer expands.
- Click it again or open another FAQ.
- Verify accordion behavior remains stable.

## Gallery Scenarios

### FE-GALLERY-001: Photo Gallery Loads
- Open `/photo-gallery`.
- Verify gallery images are visible.
- Verify images load without broken image icons.

### FE-GALLERY-002: Photo Modal Opens and Closes
- Open `/photo-gallery`.
- Click a gallery image.
- Verify the image modal opens.
- Close the modal using the close control.
- Verify focus/page interaction returns to the gallery.

### FE-GALLERY-003: Video Gallery Loads
- Open `/video-gallery`.
- Verify video cards or thumbnails are visible.

### FE-GALLERY-004: Video Modal Opens and Closes
- Open `/video-gallery`.
- Click a video item.
- Verify the video modal opens.
- Close the modal.
- Verify page interaction returns to the gallery.

## University Page Scenarios

### FE-UNIVERSITY-001: Russia University Pages Render
- Open every Russia university route listed in the route inventory.
- Verify each page renders a visible title or university content.
- Verify no route shows a blank screen or app-level error.
- Verify page images and CTA sections do not overlap major text.

### FE-UNIVERSITY-002: Armenia University Pages Render
- Open every Armenia university route listed in the route inventory.
- Verify each page renders a visible title or university content.
- Verify no route shows a blank screen or app-level error.
- Verify page images and CTA sections do not overlap major text.

### FE-UNIVERSITY-003: Georgia University Pages Render
- Open every Georgia university route listed in the route inventory.
- Verify each page renders a visible title or university content.
- Verify no route shows a blank screen or app-level error.
- Verify page images and CTA sections do not overlap major text.

### FE-UNIVERSITY-004: University Page CTA Behavior
- Open representative university pages:
  - `/mbbs-in-russia/perm-state-medical-university`
  - `/mbbs-in-armenia/yerevan-state-medical-university`
  - `/mbbs-in-georgia/university-of-georgia`
- Click primary admission/enquiry CTAs where present.
- Verify the CTA navigates to contact/enquiry flow or opens the enquiry modal.

## Responsive Layout Scenarios

### FE-RESPONSIVE-001: Mobile Public Pages
- Test at a mobile viewport such as 390x844.
- Open `/`, `/about`, `/mbbs-in-russia`, `/contact-us`, `/photo-gallery`, and `/faqs`.
- Verify no horizontal overflow.
- Verify text is readable and controls are tappable.
- Verify navbar and WhatsApp widget do not hide important content.

### FE-RESPONSIVE-002: Tablet Public Pages
- Test at a tablet viewport such as 768x1024.
- Open major public pages.
- Verify cards, grids, images, and forms fit the viewport.

### FE-RESPONSIVE-003: Desktop Public Pages
- Test at a desktop viewport such as 1440x900.
- Open major public pages.
- Verify content is aligned, visible, and not excessively clipped.

## Accessibility Scenarios

### FE-A11Y-001: Keyboard Navigation
- Open `/`.
- Use Tab to move through navbar, links, CTAs, enquiry inputs, and footer links.
- Verify focus is visible and order is logical.

### FE-A11Y-002: Form Labels and Placeholders
- Open `/contact-us`.
- Verify enquiry fields are discoverable by placeholder, label, or accessible name.
- Verify validation errors are visible to users.

### FE-A11Y-003: Image and Media Accessibility
- Open gallery and representative country/university pages.
- Verify images and media controls do not block keyboard navigation.
- Verify modal close controls are reachable.

## Frontend Edge Scenarios

### FE-EDGE-001: Unknown Route
- Open a non-existing route such as `/not-a-real-page`.
- Verify the app does not crash.
- Record actual behavior for missing route handling.

# Deferred / Credentialed Suites
These scenarios are intentionally out of scope for the active TestSprite public frontend run. Use them only in a separate run with admin credentials, a dedicated test Supabase project, and cleanup rules.

## Deferred Backend/Supabase Scenarios
- `BE-ENQUIRY-001`: anonymous duplicate lookup can select matching email or phone.
- `BE-ENQUIRY-002`: valid anonymous enquiry insert succeeds.
- `BE-ENQUIRY-003`: duplicate email is rejected by `indoglobal_email_key`.
- `BE-ENQUIRY-004`: duplicate phone is rejected by `indoglobal_phone_key`.
- `BE-ENQUIRY-005`: invalid status outside `new`, `contacted`, or `closed` is rejected.
- `BE-ENQUIRY-006`: authenticated admin can update enquiry status.
- `BE-ENQUIRY-007`: authenticated admin can delete enquiry.
- `BE-NEWS-001`: public read returns `news_updates`.
- `BE-NEWS-002`: news is ordered by `priority desc`, then `publish_date desc`.
- `BE-NEWS-003`: authenticated admin can create news.
- `BE-NEWS-004`: authenticated admin can update news.
- `BE-NEWS-005`: authenticated admin can delete news.
- `BE-NEWS-006`: invalid tag outside `Alert`, `Regulation`, `Travel`, `Update` is rejected.
- `BE-BLOG-001`: public read returns `blog_posts`.
- `BE-BLOG-002`: blog posts are ordered by `publish_date desc`.
- `BE-BLOG-003`: authenticated admin can create blog post.
- `BE-BLOG-004`: authenticated admin can update blog post.
- `BE-BLOG-005`: authenticated admin can delete blog post.
- `BE-BLOG-006`: default author is `Admin` when omitted.

## Deferred Admin Dashboard Scenarios
- `ADMIN-001`: login page loads.
- `ADMIN-002`: password visibility toggle works.
- `ADMIN-003`: invalid login shows error.
- `ADMIN-004`: valid login navigates to dashboard.
- `ADMIN-005`: dashboard fetches enquiries, news, and blog data.
- `ADMIN-006`: dashboard handles fetch errors without crashing.
- `ADMIN-007`: admin updates enquiry.
- `ADMIN-008`: admin deletes enquiry.
- `ADMIN-009`: admin creates news update.
- `ADMIN-010`: admin updates news update.
- `ADMIN-011`: admin deletes news update.
- `ADMIN-012`: admin creates blog post.
- `ADMIN-013`: admin updates blog post.
- `ADMIN-014`: admin deletes blog post.
- `ADMIN-015`: admin signs out.

## Deferred Security/RLS Scenarios
- `SEC-001`: `/dashboard` redirects unauthenticated users to `/login`.
- `SEC-002`: valid Supabase auth session can access dashboard.
- `SEC-003`: unauthenticated users cannot mutate `news_updates`.
- `SEC-004`: unauthenticated users cannot mutate `blog_posts`.
- `SEC-005`: unauthenticated users cannot update/delete `indoglobal`.
- `SEC-006`: missing Supabase env config shows safe errors instead of crashes.
- `SEC-007`: anonymous users can insert enquiries only.
- `SEC-008`: public blog and news reads are allowed.

# Route Inventory

## Core Public Routes
- `/`
- `/home`
- `/about`
- `/mbbs-in-india`
- `/mbbs-in-russia`
- `/mbbs-in-armenia`
- `/mbbs-in-georgia`
- `/blog`
- `/news`
- `/faqs`
- `/photo-gallery`
- `/video-gallery`
- `/contact-us`
- `/privacy-policy`
- `/cookie-policy`
- `/terms-and-conditions`
- `/disclaimer`

## Russia University Routes
- `/mbbs-in-russia/mari-state-university`
- `/mbbs-in-russia/perm-state-medical-university`
- `/mbbs-in-russia/orenburg-state-medical-university`
- `/mbbs-in-russia/tver-state-medical-university`
- `/mbbs-in-russia/kazan-state-medical-university`
- `/mbbs-in-russia/kazan-federal-university`
- `/mbbs-in-russia/omsk-state-medical-university`
- `/mbbs-in-russia/altai-state-medical-university`
- `/mbbs-in-russia/bashkir-state-medical-university`
- `/mbbs-in-russia/crimea-federal-university`
- `/mbbs-in-russia/samara-state-medical-university`
- `/mbbs-in-russia/orel-state-university`
- `/mbbs-in-russia/ural-state-medical-university`
- `/mbbs-in-russia/pirogov-russian-national-research-medical-university`
- `/mbbs-in-russia/kursk-state-medical-university`
- `/mbbs-in-russia/northern-state-medical-university`
- `/mbbs-in-russia/nizhny-novgorod-state-medical-university`
- `/mbbs-in-russia/volgograd-state-medical-university`
- `/mbbs-in-russia/far-eastern-federal-university`
- `/mbbs-in-russia/kirov-state-medical-university`
- `/mbbs-in-russia/kemerovo-state-medical-university`
- `/mbbs-in-russia/kabardino-balkarian-state-university`
- `/mbbs-in-russia/komi`
- `/mbbs-in-russia/pskov-state-university`
- `/mbbs-in-russia/sevastopol-state-university`
- `/mbbs-in-russia/immanuel-kant-baltic-federal-university`
- `/mbbs-in-russia/chechen-state-medical-university`
- `/mbbs-in-russia/murmansk-arctic-university`
- `/mbbs-in-russia/synergy-university`
- `/mbbs-in-russia/yaroslavl-state-medical-university`
- `/mbbs-in-russia/ulyanovsk-state-university`
- `/mbbs-in-russia/siberian-state-medical-university`
- `/mbbs-in-russia/im-sechenov-first-moscow-state-medical-university`
- `/mbbs-in-russia/south-ural-medical-university`
- `/mbbs-in-russia/north-ossetian`
- `/mbbs-in-russia/north-caucasian`
- `/mbbs-in-russia/tula-state-university`
- `/mbbs-in-russia/chita-state-medical-academy`
- `/mbbs-in-russia/lobachevsky-state-university`
- `/mbbs-in-russia/chuvash-state-medical-university`
- `/mbbs-in-russia/ingush-state-university`
- `/mbbs-in-russia/north-western-state-university`
- `/mbbs-in-russia/astrakhan-state-university`
- `/mbbs-in-russia/kuban-state-medical-university`
- `/mbbs-in-russia/smolensk-state-medical-university`
- `/mbbs-in-russia/peoples-friendship-university-of-russia`
- `/mbbs-in-russia/ryazan-state-university`
- `/mbbs-in-russia/dagestan-state-medical-university`
- `/mbbs-in-russia/pavlov-first-saint-petersburg-state-medical-university`
- `/mbbs-in-russia/izhevsk-state-medical-academy`

## Armenia University Routes
- `/mbbs-in-armenia/progress-medical-university`
- `/mbbs-in-armenia/mkhitar-gosh-armenian-russian-international-university`
- `/mbbs-in-armenia/yerevan-state-medical-university`
- `/mbbs-in-armenia/yerevan-haybusak-university`
- `/mbbs-in-armenia/university-of-traditional-medicine`
- `/mbbs-in-armenia/armenian-medical-institute`
- `/mbbs-in-armenia/tereza-medical-university`

## Georgia University Routes
- `/mbbs-in-georgia/georgian-national-university`
- `/mbbs-in-georgia/european-medical-university`
- `/mbbs-in-georgia/david-tvildiani-medical-university`
- `/mbbs-in-georgia/east-european-university`
- `/mbbs-in-georgia/alte-university`
- `/mbbs-in-georgia/university-of-georgia`
- `/mbbs-in-georgia/caucasus-international-university`
- `/mbbs-in-georgia/tbilisi-state-medical-university`
- `/mbbs-in-georgia/batumi-shota-rustaveli-state-university`
- `/mbbs-in-georgia/bau-international-university-batumi`
- `/mbbs-in-georgia/central-university-of-europe`
- `/mbbs-in-georgia/georgian-american-university`
- `/mbbs-in-georgia/international-black-sea-university`
- `/mbbs-in-georgia/east-west-university`
- `/mbbs-in-georgia/grigol-robakidze-university`
- `/mbbs-in-georgia/ken-walker-international-university`
- `/mbbs-in-georgia/new-vision-university`
- `/mbbs-in-georgia/ilia-state-university`
- `/mbbs-in-georgia/university-geomedi-llc`
- `/mbbs-in-georgia/avicenna-batumi-medical-university`
- `/mbbs-in-georgia/david-aghmashenebeli-university-of-georgia`
- `/mbbs-in-georgia/akaki-tsereteli-state-university`

## Deferred Admin Routes
- `/login`
- `/dashboard`

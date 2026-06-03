# Indo Global Education

Indo Global Education is a premium MBBS abroad consultancy helping Indian students secure admissions in top medical universities across **Russia**, **Armenia**, and **Georgia**.

## 🚀 Features

- **Comprehensive University Listings**: Detailed information about medical universities in Russia, Armenia, and Georgia.
- **SEO Optimized**: Fully optimized meta tags, JSON-LD structured data, and dynamic SEO for all pages.
- **Responsive Design**: Modern, premium UI built with React and Tailwind CSS.
- **Interactive Tools**: Enquiry forms, WhatsApp integration, and a photo/video gallery.
- **Legal Compliance**: Privacy Policy, Cookie Policy, and Consent Management (GDPR/GDPR-like).

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS, Framer Motion (for animations)
- **Backend/Data**: Supabase (for serverless data management)
- **Routing**: React Router DOM v6
- **Icons**: React Icons (Fa6, Fa)

## 📦 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_WEBHOOK_URL=your_optional_google_apps_script_webhook_url
   ```

### Vercel Deployment

Add these Environment Variables in Vercel for Production, Preview, and Development, then redeploy:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_WEBHOOK_URL=your_optional_google_apps_script_webhook_url
```

Do not add `SUPABASE_SERVICE_ROLE_KEY` to client-side Vite variables. It is only for trusted server-side scripts.

### Database Setup

Run the following SQL in your Supabase SQL Editor:

```sql
create table indoglobal (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  fullName text not null,
  email text not null,
  phone text not null,
  countryPreference text,
  course text,
  country text,
  state text,
  message text,
  source text not null,
  pagePath text not null,
  status text not null check (status in ('new', 'contacted', 'closed')) default 'new'
);

-- Enable RLS
alter table indoglobal enable row level security;

-- Create policy to allow anonymous inserts
create policy "Allow anonymous inserts"
  on indoglobal for insert
  with check (true);
```

### Development

Run the development server:
```bash
pnpm run dev
```
Visit `http://localhost:3000` to see the app.

### Build

Build the project for production:
```bash
pnpm run build
```
The output will be in the `dist` directory.

## 📄 License

This project is proprietary and all rights are reserved by Indo Global Education.

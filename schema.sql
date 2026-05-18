create table if not exists indoglobal (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  fullName text not null,
  email text not null,
  phone text not null,
  address text,
  course text,
  collegeName text,
  howHeard text,
  preferences text,
  source text not null,
  pagePath text not null,
  status text not null check (status in ('new', 'contacted', 'closed')) default 'new'
);

create table if not exists news_updates (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  summary text not null,
  publish_date date default current_date,
  tag text check (tag in ('Alert', 'Regulation', 'Travel', 'Update')),
  image_url text,
  priority boolean default false
);

create table if not exists blog_posts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  excerpt text not null,
  content text,
  author text default 'Admin',
  category text,
  image_url text,
  publish_date date default current_date
);

alter table indoglobal enable row level security;
alter table news_updates enable row level security;
alter table blog_posts enable row level security;

do $$ 
begin 
  if not exists (select 1 from pg_policies where policyname = 'Allow anonymous inserts' and tablename = 'indoglobal') then 
    create policy "Allow anonymous inserts" on indoglobal for insert with check (true); 
  end if; 
  if not exists (select 1 from pg_policies where policyname = 'Allow public read' and tablename = 'news_updates') then 
    create policy "Allow public read" on news_updates for select using (true); 
  end if; 
  if not exists (select 1 from pg_policies where policyname = 'Allow public read' and tablename = 'blog_posts') then 
    create policy "Allow public read" on blog_posts for select using (true); 
  end if; 
end $$;

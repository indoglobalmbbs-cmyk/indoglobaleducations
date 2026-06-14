create table if not exists indoglobal (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  fullname text not null,
  email text not null,
  phone text not null,
  address text,
  course text,
  preferredcountry text,
  collegename text,
  howheard text,
  preferences text,
  source text,
  pagepath text,
  hubspot_contact_id text,
  hubspot_deal_id text,
  hubspot_sync_status text check (
    hubspot_sync_status in ('pending', 'synced', 'failed')
  ),
  hubspot_sync_error text,
  status text not null check (status in ('new', 'contacted', 'closed')) default 'new'
);

alter table indoglobal add column if not exists preferredcountry text;
alter table indoglobal add column if not exists hubspot_contact_id text;
alter table indoglobal add column if not exists hubspot_deal_id text;
alter table indoglobal add column if not exists hubspot_sync_status text;
alter table indoglobal add column if not exists hubspot_sync_error text;

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
  if not exists (
    select 1
    from pg_constraint
    where conname = 'indoglobal_hubspot_sync_status_check'
  ) then
    alter table indoglobal
      add constraint indoglobal_hubspot_sync_status_check
      check (hubspot_sync_status in ('pending', 'synced', 'failed'));
  end if;

  -- Insert policy
  if not exists (select 1 from pg_policies where policyname = 'Allow anonymous inserts' and tablename = 'indoglobal') then 
    create policy "Allow anonymous inserts" on indoglobal for insert with check (true); 
  end if; 

  -- Select policy (needed for checkDuplicateEnquiry)
  if not exists (select 1 from pg_policies where policyname = 'Allow anonymous select' and tablename = 'indoglobal') then 
    create policy "Allow anonymous select" on indoglobal for select using (true); 
  end if; 

  -- Unique constraints
  if not exists (select 1 from pg_constraint where conname = 'indoglobal_email_key') then 
    alter table indoglobal add constraint indoglobal_email_key unique (email); 
  end if; 
  if not exists (select 1 from pg_constraint where conname = 'indoglobal_phone_key') then 
    alter table indoglobal add constraint indoglobal_phone_key unique (phone); 
  end if; 

  if not exists (select 1 from pg_policies where policyname = 'Allow public read' and tablename = 'news_updates') then 
    create policy "Allow public read" on news_updates for select using (true); 
  end if; 
  if not exists (select 1 from pg_policies where policyname = 'Allow public read' and tablename = 'blog_posts') then 
    create policy "Allow public read" on blog_posts for select using (true); 
  end if; 

  -- Admin policies for news_updates
  if not exists (select 1 from pg_policies where policyname = 'Allow authenticated insert' and tablename = 'news_updates') then 
    create policy "Allow authenticated insert" on news_updates for insert with check (auth.role() = 'authenticated'); 
  end if; 
  if not exists (select 1 from pg_policies where policyname = 'Allow authenticated update' and tablename = 'news_updates') then 
    create policy "Allow authenticated update" on news_updates for update using (auth.role() = 'authenticated'); 
  end if; 
  if not exists (select 1 from pg_policies where policyname = 'Allow authenticated delete' and tablename = 'news_updates') then 
    create policy "Allow authenticated delete" on news_updates for delete using (auth.role() = 'authenticated'); 
  end if; 

  -- Admin policies for blog_posts
  if not exists (select 1 from pg_policies where policyname = 'Allow authenticated insert' and tablename = 'blog_posts') then 
    create policy "Allow authenticated insert" on blog_posts for insert with check (auth.role() = 'authenticated'); 
  end if; 
  if not exists (select 1 from pg_policies where policyname = 'Allow authenticated update' and tablename = 'blog_posts') then 
    create policy "Allow authenticated update" on blog_posts for update using (auth.role() = 'authenticated'); 
  end if; 
  if not exists (select 1 from pg_policies where policyname = 'Allow authenticated delete' and tablename = 'blog_posts') then 
    create policy "Allow authenticated delete" on blog_posts for delete using (auth.role() = 'authenticated'); 
  end if; 

  -- Admin policies for indoglobal
  if not exists (select 1 from pg_policies where policyname = 'Allow authenticated update' and tablename = 'indoglobal') then 
    create policy "Allow authenticated update" on indoglobal for update using (auth.role() = 'authenticated'); 
  end if; 
  if not exists (select 1 from pg_policies where policyname = 'Allow authenticated delete' and tablename = 'indoglobal') then 
    create policy "Allow authenticated delete" on indoglobal for delete using (auth.role() = 'authenticated'); 
  end if; 
end $$;

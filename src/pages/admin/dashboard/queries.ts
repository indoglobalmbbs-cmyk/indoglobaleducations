import { supabase } from '../../../lib/supabase';
import type {
  BlogDraft,
  BlogPost,
  Enquiry,
  EnquiryUpdate,
  NewsDraft,
  NewsUpdate,
} from './types';

export async function fetchDashboardData() {
  const [enquiries, news, blog] = await Promise.all([
    supabase.from('indoglobal').select('*').order('created_at', { ascending: false }),
    supabase
      .from('news_updates')
      .select('*')
      .order('priority', { ascending: false })
      .order('publish_date', { ascending: false }),
    supabase
      .from('blog_posts')
      .select('*')
      .order('publish_date', { ascending: false }),
  ]);

  if (enquiries.error) throw enquiries.error;
  if (news.error) throw news.error;
  if (blog.error) throw blog.error;

  return {
    enquiries: (enquiries.data || []) as Enquiry[],
    news: (news.data || []) as NewsUpdate[],
    blog: (blog.data || []) as BlogPost[],
  };
}

export async function updateEnquiry(id: string, update: EnquiryUpdate) {
  const { data, error } = await supabase
    .from('indoglobal')
    .update(update)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Enquiry;
}

export async function deleteEnquiry(id: string) {
  const { error } = await supabase.from('indoglobal').delete().eq('id', id);
  if (error) throw error;
}

export async function createNews(update: NewsDraft) {
  const { data, error } = await supabase
    .from('news_updates')
    .insert(update)
    .select()
    .single();

  if (error) throw error;
  return data as NewsUpdate;
}

export async function updateNews(id: string, update: NewsDraft) {
  const { data, error } = await supabase
    .from('news_updates')
    .update(update)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as NewsUpdate;
}

export async function deleteNews(id: string) {
  const { error } = await supabase.from('news_updates').delete().eq('id', id);
  if (error) throw error;
}

export async function createBlog(update: BlogDraft) {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert(update)
    .select()
    .single();

  if (error) throw error;
  return data as BlogPost;
}

export async function updateBlog(id: string, update: BlogDraft) {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(update)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as BlogPost;
}

export async function deleteBlog(id: string) {
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  if (error) throw error;
}

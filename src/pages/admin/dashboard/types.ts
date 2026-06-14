export type EnquiryStatus = 'new' | 'contacted' | 'closed';
export type NewsTag = 'Alert' | 'Regulation' | 'Travel' | 'Update';

export interface Enquiry {
  id: string;
  created_at: string;
  fullname: string;
  email: string;
  phone: string;
  address: string | null;
  course: string | null;
  preferredcountry: string | null;
  collegename: string | null;
  howheard: string | null;
  preferences: string | null;
  source?: string | null;
  pagepath?: string | null;
  hubspot_contact_id?: string | null;
  hubspot_deal_id?: string | null;
  hubspot_sync_status?: 'pending' | 'synced' | 'failed' | null;
  hubspot_sync_error?: string | null;
  status: EnquiryStatus;
}

export interface NewsUpdate {
  id: string;
  created_at: string;
  title: string;
  summary: string;
  publish_date: string;
  tag: NewsTag | null;
  image_url: string | null;
  priority: boolean | null;
}

export interface BlogPost {
  id: string;
  created_at: string;
  title: string;
  excerpt: string;
  content: string | null;
  author: string | null;
  category: string | null;
  image_url: string | null;
  publish_date: string;
}

export type EnquiryUpdate = Omit<
  Enquiry,
  | 'id'
  | 'created_at'
  | 'source'
  | 'pagepath'
  | 'hubspot_contact_id'
  | 'hubspot_deal_id'
  | 'hubspot_sync_status'
  | 'hubspot_sync_error'
>;
export type NewsDraft = Omit<NewsUpdate, 'id' | 'created_at'>;
export type BlogDraft = Omit<BlogPost, 'id' | 'created_at'>;

export const NEWS_TAGS: NewsTag[] = ['Alert', 'Regulation', 'Travel', 'Update'];
export const ENQUIRY_STATUSES: EnquiryStatus[] = ['new', 'contacted', 'closed'];

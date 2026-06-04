import { NEWS_TAGS, type BlogDraft, type NewsDraft } from './types';

const isValidUrl = (value: string) => {
  if (!value.trim()) return true;

  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

export const validateNewsDraft = (draft: NewsDraft) => {
  if (draft.title.trim().length < 3) return 'Please enter a news title.';
  if (draft.summary.trim().length < 10) return 'Please enter a useful summary.';
  if (!draft.publish_date) return 'Please choose a publish date.';
  if (!draft.tag || !NEWS_TAGS.includes(draft.tag)) return 'Please choose a valid tag.';
  if (draft.image_url && !isValidUrl(draft.image_url)) {
    return 'Please enter a valid image URL.';
  }
  return null;
};

export const validateBlogDraft = (draft: BlogDraft) => {
  if (draft.title.trim().length < 3) return 'Please enter a blog title.';
  if (draft.excerpt.trim().length < 10) return 'Please enter a useful excerpt.';
  if (!draft.publish_date) return 'Please choose a publish date.';
  if (draft.image_url && !isValidUrl(draft.image_url)) {
    return 'Please enter a valid image URL.';
  }
  return null;
};

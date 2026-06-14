import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Copy,
  Edit,
  FileText,
  LogOut,
  MoreHorizontal,
  Newspaper,
  Plus,
  RefreshCcw,
  Search,
  Settings,
  Trash2,
  Users,
} from 'lucide-react';
import { toast } from 'sonner';
import {
  PREFERRED_COUNTRIES,
  validateDetailedEnquiryForm,
  type EnquiryFormData,
} from '../../../lib/enquiry';
import { supabase } from '../../../lib/supabase';
import {
  defaultWebhookSample,
  generateWebhookCurl,
  googleAppsScriptWebhookHandler,
} from '../../../lib/webhook';
import {
  createBlog,
  createNews,
  deleteBlog,
  deleteEnquiry,
  deleteNews,
  fetchDashboardData,
  updateBlog,
  updateEnquiry,
  updateNews,
} from './queries';
import {
  ENQUIRY_STATUSES,
  NEWS_TAGS,
  type BlogDraft,
  type BlogPost,
  type Enquiry,
  type EnquiryStatus,
  type EnquiryUpdate,
  type NewsDraft,
  type NewsTag,
  type NewsUpdate,
} from './types';
import { validateBlogDraft, validateNewsDraft } from './validation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Checkbox } from './ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Separator } from './ui/separator';
import { Skeleton } from './ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Toaster } from './ui/sonner';

type DeleteTarget =
  | { type: 'enquiry'; id: string; label: string }
  | { type: 'news'; id: string; label: string }
  | { type: 'blog'; id: string; label: string };

const today = () => new Date().toISOString().slice(0, 10);
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || '';

const emptyNewsDraft = (): NewsDraft => ({
  title: '',
  summary: '',
  publish_date: today(),
  tag: 'Update',
  image_url: '',
  priority: false,
});

const emptyBlogDraft = (): BlogDraft => ({
  title: '',
  excerpt: '',
  content: '',
  author: 'Admin',
  category: '',
  image_url: '',
  publish_date: today(),
});

const normalize = (value: string | null | undefined) => value || '';

const enquiryToDraft = (enquiry: Enquiry | null): EnquiryUpdate | null =>
  enquiry
    ? {
        fullname: enquiry.fullname,
        email: enquiry.email,
        phone: enquiry.phone,
        address: normalize(enquiry.address),
        course: normalize(enquiry.course),
        preferredcountry: normalize(enquiry.preferredcountry),
        collegename: normalize(enquiry.collegename),
        howheard: normalize(enquiry.howheard),
        preferences: normalize(enquiry.preferences),
        status: enquiry.status,
      }
    : null;

const newsToDraft = (news: NewsUpdate | null): NewsDraft =>
  news
    ? {
        title: news.title,
        summary: news.summary,
        publish_date: news.publish_date,
        tag: news.tag || 'Update',
        image_url: normalize(news.image_url),
        priority: Boolean(news.priority),
      }
    : emptyNewsDraft();

const blogToDraft = (blog: BlogPost | null): BlogDraft =>
  blog
    ? {
        title: blog.title,
        excerpt: blog.excerpt,
        content: normalize(blog.content),
        author: normalize(blog.author) || 'Admin',
        category: normalize(blog.category),
        image_url: normalize(blog.image_url),
        publish_date: blog.publish_date,
      }
    : emptyBlogDraft();

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));

const statusBadgeVariant = (status: EnquiryStatus) => {
  if (status === 'new') return 'default';
  if (status === 'contacted') return 'warning';
  return 'success';
};

const lowerIncludes = (value: string | null | undefined, query: string) =>
  normalize(value).toLowerCase().includes(query);

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Something went wrong.';

const DashboardCms: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [news, setNews] = useState<NewsUpdate[]>([]);
  const [blog, setBlog] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [enquiryQuery, setEnquiryQuery] = useState('');
  const [newsQuery, setNewsQuery] = useState('');
  const [blogQuery, setBlogQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | EnquiryStatus>('all');
  const [tagFilter, setTagFilter] = useState<'all' | NewsTag>('all');
  const [priorityOnly, setPriorityOnly] = useState(false);
  const [editingEnquiry, setEditingEnquiry] = useState<Enquiry | null>(null);
  const [editingNews, setEditingNews] = useState<NewsUpdate | null>(null);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [creatingNews, setCreatingNews] = useState(false);
  const [creatingBlog, setCreatingBlog] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget | null>(null);
  const navigate = useNavigate();

  const loadDashboard = async () => {
    setLoading(true);
    setLoadError(null);

    try {
      const data = await fetchDashboardData();
      setEnquiries(data.enquiries);
      setNews(data.news);
      setBlog(data.blog);
    } catch (error) {
      setLoadError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const stats = useMemo(
    () => [
      {
        label: 'Total enquiries',
        value: enquiries.length,
        icon: Users,
      },
      {
        label: 'New',
        value: enquiries.filter((item) => item.status === 'new').length,
        icon: FileText,
      },
      {
        label: 'Contacted',
        value: enquiries.filter((item) => item.status === 'contacted').length,
        icon: RefreshCcw,
      },
      {
        label: 'Closed',
        value: enquiries.filter((item) => item.status === 'closed').length,
        icon: BookOpen,
      },
      {
        label: 'News posts',
        value: news.length,
        icon: Newspaper,
      },
      {
        label: 'Blog posts',
        value: blog.length,
        icon: BookOpen,
      },
    ],
    [blog.length, enquiries, news.length],
  );

  const filteredEnquiries = useMemo(() => {
    const query = enquiryQuery.trim().toLowerCase();
    return enquiries.filter((item) => {
      const matchesQuery =
        !query ||
        lowerIncludes(item.fullname, query) ||
        lowerIncludes(item.email, query) ||
        lowerIncludes(item.phone, query);
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [enquiries, enquiryQuery, statusFilter]);

  const filteredNews = useMemo(() => {
    const query = newsQuery.trim().toLowerCase();
    return news.filter((item) => {
      const matchesQuery =
        !query ||
        lowerIncludes(item.title, query) ||
        lowerIncludes(item.summary, query);
      const matchesTag = tagFilter === 'all' || item.tag === tagFilter;
      const matchesPriority = !priorityOnly || Boolean(item.priority);
      return matchesQuery && matchesTag && matchesPriority;
    });
  }, [news, newsQuery, priorityOnly, tagFilter]);

  const filteredBlog = useMemo(() => {
    const query = blogQuery.trim().toLowerCase();
    return blog.filter(
      (item) =>
        !query ||
        lowerIncludes(item.title, query) ||
        lowerIncludes(item.excerpt, query) ||
        lowerIncludes(item.category, query) ||
        lowerIncludes(item.author, query),
    );
  }, [blog, blogQuery]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const saveEnquiry = async (draft: EnquiryUpdate) => {
    if (!editingEnquiry) return;

    const validationError = validateDetailedEnquiryForm({
      fullName: draft.fullname,
      email: draft.email,
      phone: draft.phone,
      address: normalize(draft.address),
      course: normalize(draft.course),
      preferredCountry: normalize(draft.preferredcountry),
      collegeName: normalize(draft.collegename),
      howHeard: normalize(draft.howheard),
      preferences: normalize(draft.preferences),
    });

    if (validationError) {
      setFormError(validationError);
      return;
    }

    setSaving(true);
    try {
      const cleanDraft: EnquiryUpdate = {
        fullname: draft.fullname.trim(),
        email: draft.email.trim().toLowerCase(),
        phone: draft.phone.trim(),
        address: normalize(draft.address).trim(),
        course: normalize(draft.course),
        preferredcountry: normalize(draft.preferredcountry),
        collegename: normalize(draft.collegename).trim(),
        howheard: normalize(draft.howheard),
        preferences: normalize(draft.preferences).trim(),
        status: draft.status,
      };
      const updated = await updateEnquiry(editingEnquiry.id, cleanDraft);
      setEnquiries((items) =>
        items.map((item) => (item.id === updated.id ? updated : item)),
      );
      setEditingEnquiry(null);
      setFormError(null);
      toast.success('Enquiry updated');
    } catch (error) {
      setFormError(getErrorMessage(error));
    } finally {
      setSaving(false);
    }
  };

  const saveNews = async (draft: NewsDraft) => {
    const validationError = validateNewsDraft(draft);
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setSaving(true);
    try {
      const cleanDraft: NewsDraft = {
        title: draft.title.trim(),
        summary: draft.summary.trim(),
        publish_date: draft.publish_date,
        tag: draft.tag,
        image_url: normalize(draft.image_url).trim() || null,
        priority: Boolean(draft.priority),
      };
      if (editingNews) {
        const updated = await updateNews(editingNews.id, cleanDraft);
        setNews((items) =>
          items.map((item) => (item.id === updated.id ? updated : item)),
        );
        setEditingNews(null);
        toast.success('News update saved');
      } else {
        const created = await createNews(cleanDraft);
        setNews((items) => [created, ...items]);
        setCreatingNews(false);
        toast.success('News update created');
      }
      setFormError(null);
    } catch (error) {
      setFormError(getErrorMessage(error));
    } finally {
      setSaving(false);
    }
  };

  const saveBlog = async (draft: BlogDraft) => {
    const validationError = validateBlogDraft(draft);
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setSaving(true);
    try {
      const cleanDraft: BlogDraft = {
        title: draft.title.trim(),
        excerpt: draft.excerpt.trim(),
        content: normalize(draft.content).trim() || null,
        author: normalize(draft.author).trim() || 'Admin',
        category: normalize(draft.category).trim() || null,
        image_url: normalize(draft.image_url).trim() || null,
        publish_date: draft.publish_date,
      };
      if (editingBlog) {
        const updated = await updateBlog(editingBlog.id, cleanDraft);
        setBlog((items) =>
          items.map((item) => (item.id === updated.id ? updated : item)),
        );
        setEditingBlog(null);
        toast.success('Blog post saved');
      } else {
        const created = await createBlog(cleanDraft);
        setBlog((items) => [created, ...items]);
        setCreatingBlog(false);
        toast.success('Blog post created');
      }
      setFormError(null);
    } catch (error) {
      setFormError(getErrorMessage(error));
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    setSaving(true);
    try {
      if (deleteTarget.type === 'enquiry') {
        await deleteEnquiry(deleteTarget.id);
        setEnquiries((items) => items.filter((item) => item.id !== deleteTarget.id));
      }
      if (deleteTarget.type === 'news') {
        await deleteNews(deleteTarget.id);
        setNews((items) => items.filter((item) => item.id !== deleteTarget.id));
      }
      if (deleteTarget.type === 'blog') {
        await deleteBlog(deleteTarget.id);
        setBlog((items) => items.filter((item) => item.id !== deleteTarget.id));
      }
      toast.success('Record deleted');
      setDeleteTarget(null);
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" richColors />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Indo Global Education
            </p>
            <h1 className="text-3xl font-semibold tracking-normal">
              Admin dashboard
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={loadDashboard} disabled={loading}>
              <RefreshCcw />
              Refresh
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut />
              Log out
            </Button>
          </div>
        </header>

        <Separator />

        {loadError && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {loadError}
          </div>
        )}

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-28" />
              ))
            : stats.map((stat) => (
                <Card key={stat.label}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
                    <CardDescription>{stat.label}</CardDescription>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardTitle>{stat.value}</CardTitle>
                  </CardContent>
                </Card>
              ))}
        </section>

        <Tabs defaultValue="enquiries" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-[560px]">
            <TabsTrigger value="enquiries">Enquiries</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="enquiries" className="mt-4">
            <Card>
              <CardHeader className="gap-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <CardTitle>Enquiries</CardTitle>
                    <CardDescription>
                      Review student leads and update their counselling status.
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <SearchInput
                      value={enquiryQuery}
                      onChange={setEnquiryQuery}
                      placeholder="Search name, email, phone"
                    />
                    <Select
                      value={statusFilter}
                      onValueChange={(value) =>
                        setStatusFilter(value as 'all' | EnquiryStatus)
                      }
                    >
                      <SelectTrigger className="sm:w-[160px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All statuses</SelectItem>
                        {ENQUIRY_STATUSES.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <EnquiriesTable
                  enquiries={filteredEnquiries}
                  loading={loading}
                  onEdit={(item) => {
                    setFormError(null);
                    setEditingEnquiry(item);
                  }}
                  onDelete={(item) =>
                    setDeleteTarget({
                      type: 'enquiry',
                      id: item.id,
                      label: item.fullname,
                    })
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news" className="mt-4">
            <Card>
              <CardHeader className="gap-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <CardTitle>News updates</CardTitle>
                    <CardDescription>
                      Create and manage public news cards shown on the News page.
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <SearchInput
                      value={newsQuery}
                      onChange={setNewsQuery}
                      placeholder="Search news"
                    />
                    <Select
                      value={tagFilter}
                      onValueChange={(value) => setTagFilter(value as 'all' | NewsTag)}
                    >
                      <SelectTrigger className="sm:w-[150px]">
                        <SelectValue placeholder="Tag" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All tags</SelectItem>
                        {NEWS_TAGS.map((tag) => (
                          <SelectItem key={tag} value={tag}>
                            {tag}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <label className="flex h-10 items-center gap-2 rounded-md border border-input px-3 text-sm">
                      <Checkbox
                        checked={priorityOnly}
                        onCheckedChange={(checked) =>
                          setPriorityOnly(checked === true)
                        }
                      />
                      Priority
                    </label>
                    <Button
                      onClick={() => {
                        setFormError(null);
                        setCreatingNews(true);
                      }}
                    >
                      <Plus />
                      New
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <NewsTable
                  news={filteredNews}
                  loading={loading}
                  onEdit={(item) => {
                    setFormError(null);
                    setEditingNews(item);
                  }}
                  onDelete={(item) =>
                    setDeleteTarget({ type: 'news', id: item.id, label: item.title })
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog" className="mt-4">
            <Card>
              <CardHeader className="gap-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <CardTitle>Blog posts</CardTitle>
                    <CardDescription>
                      Create and manage public blog posts shown on the Blog page.
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <SearchInput
                      value={blogQuery}
                      onChange={setBlogQuery}
                      placeholder="Search blog"
                    />
                    <Button
                      onClick={() => {
                        setFormError(null);
                        setCreatingBlog(true);
                      }}
                    >
                      <Plus />
                      New
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <BlogTable
                  blog={filteredBlog}
                  loading={loading}
                  onEdit={(item) => {
                    setFormError(null);
                    setEditingBlog(item);
                  }}
                  onDelete={(item) =>
                    setDeleteTarget({ type: 'blog', id: item.id, label: item.title })
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-4">
            <SettingsPanel webhookUrl={WEBHOOK_URL} />
          </TabsContent>
        </Tabs>
      </div>

      <EnquiryDialog
        key={editingEnquiry?.id || 'enquiry-closed'}
        enquiry={editingEnquiry}
        error={formError}
        saving={saving}
        onOpenChange={(open) => {
          if (!open) setEditingEnquiry(null);
          setFormError(null);
        }}
        onSave={saveEnquiry}
      />
      <NewsDialog
        key={editingNews?.id || (creatingNews ? 'news-create' : 'news-closed')}
        draftSource={editingNews}
        creating={creatingNews}
        error={formError}
        saving={saving}
        onOpenChange={(open) => {
          if (!open) {
            setEditingNews(null);
            setCreatingNews(false);
          }
          setFormError(null);
        }}
        onSave={saveNews}
      />
      <BlogDialog
        key={editingBlog?.id || (creatingBlog ? 'blog-create' : 'blog-closed')}
        draftSource={editingBlog}
        creating={creatingBlog}
        error={formError}
        saving={saving}
        onOpenChange={(open) => {
          if (!open) {
            setEditingBlog(null);
            setCreatingBlog(false);
          }
          setFormError(null);
        }}
        onSave={saveBlog}
      />
      <DeleteDialog
        target={deleteTarget}
        saving={saving}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

const SearchInput = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) => (
  <div className="relative">
    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    <Input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="pl-9 sm:w-[260px]"
    />
  </div>
);

const SettingsPanel = ({ webhookUrl }: { webhookUrl: string }) => {
  const [sample, setSample] = useState<EnquiryFormData>(defaultWebhookSample);
  const isConfigured = webhookUrl.trim().length > 0;
  const curlCommand = useMemo(
    () => (isConfigured ? generateWebhookCurl(webhookUrl, sample) : ''),
    [isConfigured, sample, webhookUrl],
  );

  const updateSample =
    (field: keyof EnquiryFormData) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setSample((current) => ({ ...current, [field]: event.target.value }));
    };

  const copyCurl = async () => {
    if (!curlCommand) return;

    try {
      await navigator.clipboard.writeText(curlCommand);
      toast.success('Webhook cURL copied');
    } catch {
      toast.error('Unable to copy cURL command');
    }
  };

  const copyAppsScript = async () => {
    try {
      await navigator.clipboard.writeText(googleAppsScriptWebhookHandler);
      toast.success('Apps Script handler copied');
    } catch {
      toast.error('Unable to copy Apps Script handler');
    }
  };

  return (
    <Card>
      <CardHeader className="gap-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-muted-foreground" />
              Webhook
            </CardTitle>
            <CardDescription>
              Generate a test cURL command for the enquiry webhook payload.
            </CardDescription>
          </div>
          <Badge variant={isConfigured ? 'success' : 'destructive'}>
            {isConfigured ? 'Configured' : 'Missing config'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Field label="Webhook URL">
          <Input
            value={webhookUrl || 'VITE_WEBHOOK_URL is not configured'}
            readOnly
            className={!isConfigured ? 'text-destructive' : ''}
          />
        </Field>

        {!isConfigured && (
          <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            Add VITE_WEBHOOK_URL to the environment and redeploy to enable cURL
            generation.
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full name">
            <Input value={sample.fullName} onChange={updateSample('fullName')} />
          </Field>
          <Field label="Email">
            <Input
              type="email"
              value={sample.email}
              onChange={updateSample('email')}
            />
          </Field>
          <Field label="Phone">
            <Input
              value={sample.phone}
              inputMode="numeric"
              onChange={updateSample('phone')}
            />
          </Field>
          <Field label="Course">
            <Select
              value={sample.course}
              onValueChange={(value) =>
                setSample((current) => ({ ...current, course: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {['MBBS', 'MS', 'BDS', 'MDS', 'MD-MS'].map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Preferred country">
            <Select
              value={sample.preferredCountry}
              onValueChange={(value) =>
                setSample((current) => ({
                  ...current,
                  preferredCountry: value,
                }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {PREFERRED_COUNTRIES.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="College name">
            <Input
              value={sample.collegeName}
              onChange={updateSample('collegeName')}
            />
          </Field>
          <Field label="How heard">
            <Select
              value={sample.howHeard}
              onValueChange={(value) =>
                setSample((current) => ({ ...current, howHeard: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                {['Facebook', 'Instagram', 'Youtube', 'Friends & Family', 'Other'].map(
                  (source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>
          </Field>
          <div className="md:col-span-2">
            <Field label="Address">
              <Textarea
                value={sample.address}
                onChange={updateSample('address')}
              />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Preferences">
              <Textarea
                value={sample.preferences}
                onChange={updateSample('preferences')}
              />
            </Field>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between gap-3">
            <Label>Generated cURL</Label>
            <Button
              type="button"
              variant="outline"
              onClick={copyCurl}
              disabled={!isConfigured}
            >
              <Copy />
              Copy
            </Button>
          </div>
          <Textarea
            value={
              isConfigured
                ? curlCommand
                : 'Configure VITE_WEBHOOK_URL to generate a cURL command.'
            }
            readOnly
            rows={9}
            className="font-mono text-xs"
          />
        </div>

        <div className="grid gap-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Label>Google Apps Script handler</Label>
              <p className="mt-1 text-sm text-muted-foreground">
                Add doGet to avoid the browser error, and doPost to receive enquiry
                submissions.
              </p>
            </div>
            <Button type="button" variant="outline" onClick={copyAppsScript}>
              <Copy />
              Copy script
            </Button>
          </div>
          <Textarea
            value={googleAppsScriptWebhookHandler}
            readOnly
            rows={14}
            className="font-mono text-xs"
          />
        </div>
      </CardContent>
    </Card>
  );
};

const RowActions = ({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" aria-label="Open row actions">
        <MoreHorizontal />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={onEdit}>
        <Edit />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem className="text-destructive" onClick={onDelete}>
        <Trash2 />
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const EmptyRow = ({ colSpan, message }: { colSpan: number; message: string }) => (
  <TableRow>
    <TableCell colSpan={colSpan} className="h-28 text-center text-muted-foreground">
      {message}
    </TableCell>
  </TableRow>
);

const LoadingRows = ({ colSpan }: { colSpan: number }) => (
  <>
    {Array.from({ length: 4 }).map((_, index) => (
      <TableRow key={index}>
        <TableCell colSpan={colSpan}>
          <Skeleton className="h-8 w-full" />
        </TableCell>
      </TableRow>
    ))}
  </>
);

const EnquiriesTable = ({
  enquiries,
  loading,
  onEdit,
  onDelete,
}: {
  enquiries: Enquiry[];
  loading: boolean;
  onEdit: (enquiry: Enquiry) => void;
  onDelete: (enquiry: Enquiry) => void;
}) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Date</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Phone</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="w-[80px] text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {loading && <LoadingRows colSpan={6} />}
      {!loading &&
        enquiries.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="whitespace-nowrap text-muted-foreground">
              {formatDate(item.created_at)}
            </TableCell>
            <TableCell className="font-medium">{item.fullname}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>
              <Badge variant={statusBadgeVariant(item.status)}>{item.status}</Badge>
            </TableCell>
            <TableCell className="text-right">
              <RowActions onEdit={() => onEdit(item)} onDelete={() => onDelete(item)} />
            </TableCell>
          </TableRow>
        ))}
      {!loading && enquiries.length === 0 && (
        <EmptyRow colSpan={6} message="No enquiries found." />
      )}
    </TableBody>
  </Table>
);

const NewsTable = ({
  news,
  loading,
  onEdit,
  onDelete,
}: {
  news: NewsUpdate[];
  loading: boolean;
  onEdit: (news: NewsUpdate) => void;
  onDelete: (news: NewsUpdate) => void;
}) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Publish date</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Tag</TableHead>
        <TableHead>Priority</TableHead>
        <TableHead className="w-[80px] text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {loading && <LoadingRows colSpan={5} />}
      {!loading &&
        news.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="whitespace-nowrap text-muted-foreground">
              {formatDate(item.publish_date)}
            </TableCell>
            <TableCell>
              <div className="font-medium">{item.title}</div>
              <div className="line-clamp-1 max-w-xl text-sm text-muted-foreground">
                {item.summary}
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={item.tag === 'Alert' ? 'destructive' : 'secondary'}>
                {item.tag || 'Update'}
              </Badge>
            </TableCell>
            <TableCell>{item.priority ? 'Yes' : 'No'}</TableCell>
            <TableCell className="text-right">
              <RowActions onEdit={() => onEdit(item)} onDelete={() => onDelete(item)} />
            </TableCell>
          </TableRow>
        ))}
      {!loading && news.length === 0 && (
        <EmptyRow colSpan={5} message="No news updates found." />
      )}
    </TableBody>
  </Table>
);

const BlogTable = ({
  blog,
  loading,
  onEdit,
  onDelete,
}: {
  blog: BlogPost[];
  loading: boolean;
  onEdit: (blog: BlogPost) => void;
  onDelete: (blog: BlogPost) => void;
}) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Publish date</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Category</TableHead>
        <TableHead>Author</TableHead>
        <TableHead className="w-[80px] text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {loading && <LoadingRows colSpan={5} />}
      {!loading &&
        blog.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="whitespace-nowrap text-muted-foreground">
              {formatDate(item.publish_date)}
            </TableCell>
            <TableCell>
              <div className="font-medium">{item.title}</div>
              <div className="line-clamp-1 max-w-xl text-sm text-muted-foreground">
                {item.excerpt}
              </div>
            </TableCell>
            <TableCell>{item.category || 'Uncategorized'}</TableCell>
            <TableCell>{item.author || 'Admin'}</TableCell>
            <TableCell className="text-right">
              <RowActions onEdit={() => onEdit(item)} onDelete={() => onDelete(item)} />
            </TableCell>
          </TableRow>
        ))}
      {!loading && blog.length === 0 && (
        <EmptyRow colSpan={5} message="No blog posts found." />
      )}
    </TableBody>
  </Table>
);

const ErrorBlock = ({ error }: { error: string | null }) =>
  error ? (
    <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
      {error}
    </div>
  ) : null;

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="grid gap-2">
    <Label>{label}</Label>
    {children}
  </div>
);

const EnquiryDialog = ({
  enquiry,
  error,
  saving,
  onOpenChange,
  onSave,
}: {
  enquiry: Enquiry | null;
  error: string | null;
  saving: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (draft: EnquiryUpdate) => void;
}) => {
  const [draft, setDraft] = useState<EnquiryUpdate | null>(() =>
    enquiryToDraft(enquiry),
  );

  return (
    <Dialog open={Boolean(enquiry)} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit enquiry</DialogTitle>
          <DialogDescription>Update student lead details and status.</DialogDescription>
        </DialogHeader>
        {draft && (
          <div className="grid gap-4 md:grid-cols-2">
            <ErrorBlock error={error} />
            <div className="md:col-span-2">
              <Field label="Full name">
                <Input
                  value={draft.fullname}
                  onChange={(event) =>
                    setDraft({ ...draft, fullname: event.target.value })
                  }
                />
              </Field>
            </div>
            <Field label="Email">
              <Input
                type="email"
                value={draft.email}
                onChange={(event) =>
                  setDraft({ ...draft, email: event.target.value })
                }
              />
            </Field>
            <Field label="Phone">
              <Input
                value={draft.phone}
                inputMode="numeric"
                onChange={(event) =>
                  setDraft({ ...draft, phone: event.target.value })
                }
              />
            </Field>
            <Field label="Status">
              <Select
                value={draft.status}
                onValueChange={(value) =>
                  setDraft({ ...draft, status: value as EnquiryStatus })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ENQUIRY_STATUSES.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Course">
              <Select
                value={normalize(draft.course)}
                onValueChange={(value) => setDraft({ ...draft, course: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {['MBBS', 'MS', 'BDS', 'MDS', 'MD-MS'].map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Preferred country">
              <Select
                value={normalize(draft.preferredcountry)}
                onValueChange={(value) =>
                  setDraft({ ...draft, preferredcountry: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {PREFERRED_COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="College name">
              <Input
                value={normalize(draft.collegename)}
                onChange={(event) =>
                  setDraft({ ...draft, collegename: event.target.value })
                }
              />
            </Field>
            <Field label="How heard">
              <Select
                value={normalize(draft.howheard)}
                onValueChange={(value) => setDraft({ ...draft, howheard: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  {['Facebook', 'Instagram', 'Youtube', 'Friends & Family', 'Other'].map(
                    (source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Address">
                <Textarea
                  value={normalize(draft.address)}
                  onChange={(event) =>
                    setDraft({ ...draft, address: event.target.value })
                  }
                />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field label="Preferences">
                <Textarea
                  value={normalize(draft.preferences)}
                  onChange={(event) =>
                    setDraft({ ...draft, preferences: event.target.value })
                  }
                />
              </Field>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button disabled={!draft || saving} onClick={() => draft && onSave(draft)}>
            Save enquiry
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const NewsDialog = ({
  draftSource,
  creating,
  error,
  saving,
  onOpenChange,
  onSave,
}: {
  draftSource: NewsUpdate | null;
  creating: boolean;
  error: string | null;
  saving: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (draft: NewsDraft) => void;
}) => {
  const [draft, setDraft] = useState<NewsDraft>(() =>
    newsToDraft(draftSource),
  );
  const open = creating || Boolean(draftSource);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{draftSource ? 'Edit news update' : 'Create news update'}</DialogTitle>
          <DialogDescription>
            This content appears on the public News page.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <ErrorBlock error={error} />
          <Field label="Title">
            <Input
              value={draft.title}
              onChange={(event) => setDraft({ ...draft, title: event.target.value })}
            />
          </Field>
          <Field label="Summary">
            <Textarea
              value={draft.summary}
              onChange={(event) =>
                setDraft({ ...draft, summary: event.target.value })
              }
            />
          </Field>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Publish date">
              <Input
                type="date"
                value={draft.publish_date}
                onChange={(event) =>
                  setDraft({ ...draft, publish_date: event.target.value })
                }
              />
            </Field>
            <Field label="Tag">
              <Select
                value={draft.tag || 'Update'}
                onValueChange={(value) => setDraft({ ...draft, tag: value as NewsTag })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {NEWS_TAGS.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field label="Image URL">
            <Input
              value={normalize(draft.image_url)}
              onChange={(event) =>
                setDraft({ ...draft, image_url: event.target.value })
              }
              placeholder="https://..."
            />
          </Field>
          {draft.image_url && (
            <img
              src={draft.image_url}
              alt=""
              className="h-36 w-full rounded-md border border-border object-cover"
            />
          )}
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={Boolean(draft.priority)}
              onCheckedChange={(checked) =>
                setDraft({ ...draft, priority: checked === true })
              }
            />
            Mark as priority
          </label>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button disabled={saving} onClick={() => onSave(draft)}>
            Save news
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const BlogDialog = ({
  draftSource,
  creating,
  error,
  saving,
  onOpenChange,
  onSave,
}: {
  draftSource: BlogPost | null;
  creating: boolean;
  error: string | null;
  saving: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (draft: BlogDraft) => void;
}) => {
  const [draft, setDraft] = useState<BlogDraft>(() =>
    blogToDraft(draftSource),
  );
  const open = creating || Boolean(draftSource);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{draftSource ? 'Edit blog post' : 'Create blog post'}</DialogTitle>
          <DialogDescription>
            This content appears on the public Blog page.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <ErrorBlock error={error} />
          <Field label="Title">
            <Input
              value={draft.title}
              onChange={(event) => setDraft({ ...draft, title: event.target.value })}
            />
          </Field>
          <Field label="Excerpt">
            <Textarea
              value={draft.excerpt}
              onChange={(event) =>
                setDraft({ ...draft, excerpt: event.target.value })
              }
            />
          </Field>
          <Field label="Content">
            <Textarea
              rows={5}
              value={normalize(draft.content)}
              onChange={(event) =>
                setDraft({ ...draft, content: event.target.value })
              }
            />
          </Field>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Author">
              <Input
                value={normalize(draft.author)}
                onChange={(event) =>
                  setDraft({ ...draft, author: event.target.value })
                }
              />
            </Field>
            <Field label="Category">
              <Input
                value={normalize(draft.category)}
                onChange={(event) =>
                  setDraft({ ...draft, category: event.target.value })
                }
              />
            </Field>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Publish date">
              <Input
                type="date"
                value={draft.publish_date}
                onChange={(event) =>
                  setDraft({ ...draft, publish_date: event.target.value })
                }
              />
            </Field>
            <Field label="Image URL">
              <Input
                value={normalize(draft.image_url)}
                onChange={(event) =>
                  setDraft({ ...draft, image_url: event.target.value })
                }
                placeholder="https://..."
              />
            </Field>
          </div>
          {draft.image_url && (
            <img
              src={draft.image_url}
              alt=""
              className="h-36 w-full rounded-md border border-border object-cover"
            />
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button disabled={saving} onClick={() => onSave(draft)}>
            Save blog
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DeleteDialog = ({
  target,
  saving,
  onOpenChange,
  onConfirm,
}: {
  target: DeleteTarget | null;
  saving: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}) => (
  <AlertDialog open={Boolean(target)} onOpenChange={onOpenChange}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete this record?</AlertDialogTitle>
        <AlertDialogDescription>
          {target
            ? `"${target.label}" will be permanently deleted.`
            : 'This record will be permanently deleted.'}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          disabled={saving}
          onClick={(event) => {
            event.preventDefault();
            onConfirm();
          }}
        >
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default DashboardCms;

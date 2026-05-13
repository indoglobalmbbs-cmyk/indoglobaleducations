import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { armeniaUniversities } from '../data/armeniaUniversities';
import { faqData } from './FaqData';
import { georgiaUniversities } from '../data/georgiaUniversities';
import { russiaUniversities } from '../data/russiaUniversities';

const SITE_URL = 'https://indoglobalmbbsabroad.com';
const SITE_NAME = 'Indo Global Education';
const DEFAULT_IMAGE = `${SITE_URL}/IndoGlobal.png`;

interface PageMeta {
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  ogTitle: string;
  ogDescription: string;
  noindex?: boolean;
}

const buildMeta = ({
  title,
  description,
  primaryKeyword,
  secondaryKeywords,
  ogTitle,
  ogDescription,
  noindex,
}: PageMeta): PageMeta => ({
  title,
  description,
  primaryKeyword,
  secondaryKeywords,
  ogTitle,
  ogDescription,
  noindex,
});

const DEFAULT_META = buildMeta({
  title:
    'MBBS Abroad for Indian Students 2026 | Fees, Eligibility & Admission Guidance',
  description:
    'Explore MBBS abroad for Indian students with guidance on fees, eligibility, admission support, and medical universities in Russia, Armenia, Georgia, and India.',
  primaryKeyword: 'mbbs abroad for indian students',
  secondaryKeywords: [
    'mbbs abroad 2026',
    'mbbs abroad fees',
    'mbbs abroad eligibility',
    'mbbs abroad admission guidance',
    'medical universities for indian students',
  ],
  ogTitle:
    'MBBS Abroad for Indian Students 2026 | Fees, Eligibility & Admission Guidance',
  ogDescription:
    'Get MBBS abroad admission guidance for Indian students. Compare fees, eligibility, and medical university options across leading destinations.',
});

const staticPages: Record<string, PageMeta> = {
  '/': DEFAULT_META,
  '/about': buildMeta({
    title: 'MBBS Abroad Consultants for Indian Students | About Indo Global Education',
    description:
      'Learn how Indo Global Education supports Indian students with MBBS abroad counselling, admissions guidance, documentation, and university shortlisting.',
    primaryKeyword: 'mbbs abroad consultants for indian students',
    secondaryKeywords: [
      'mbbs abroad counselling',
      'study mbbs abroad guidance',
      'medical admission consultants',
      'mbbs abroad admission support',
    ],
    ogTitle:
      'MBBS Abroad Consultants for Indian Students | About Indo Global Education',
    ogDescription:
      'Know Indo Global Education, an MBBS abroad counselling team helping Indian students with admissions, documents, visas, and university guidance.',
  }),
  '/mbbs-in-india': buildMeta({
    title: 'MBBS in India 2026 for Students | Eligibility, Fees & Admission Guidance',
    description:
      'Review MBBS in India eligibility, fee considerations, admission guidance, and counselling support for students comparing domestic and abroad options.',
    primaryKeyword: 'mbbs in india admission guidance',
    secondaryKeywords: [
      'mbbs in india 2026',
      'mbbs in india eligibility',
      'mbbs in india fees',
      'medical admission counselling',
    ],
    ogTitle:
      'MBBS in India 2026 for Students | Eligibility, Fees & Admission Guidance',
    ogDescription:
      'Compare MBBS in India eligibility, admission support, and fee planning while evaluating your medical education options.',
  }),
  '/mbbs-in-russia': buildMeta({
    title: 'MBBS in Russia 2026 for Indian Students | Fees, Eligibility & Admission',
    description:
      'Compare MBBS in Russia for Indian students with fee guidance, eligibility, admissions support, and medical university options aligned with current NMC rules.',
    primaryKeyword: 'mbbs in russia for indian students',
    secondaryKeywords: [
      'mbbs in russia 2026',
      'mbbs in russia fees',
      'mbbs in russia eligibility',
      'medical universities in russia',
    ],
    ogTitle:
      'MBBS in Russia 2026 for Indian Students | Fees, Eligibility & Admission',
    ogDescription:
      'Study MBBS in Russia with structured guidance on fees, eligibility, admissions, and medical university options for Indian students.',
  }),
  '/mbbs-in-armenia': buildMeta({
    title:
      'MBBS in Armenia 2026 for Indian Students | Fees, Eligibility & Admission',
    description:
      'Explore MBBS in Armenia for Indian students with admissions support, fee guidance, eligibility details, and medical university options.',
    primaryKeyword: 'mbbs in armenia for indian students',
    secondaryKeywords: [
      'mbbs in armenia 2026',
      'mbbs in armenia fees',
      'mbbs in armenia eligibility',
      'medical universities in armenia',
    ],
    ogTitle:
      'MBBS in Armenia 2026 for Indian Students | Fees, Eligibility & Admission',
    ogDescription:
      'Compare MBBS in Armenia universities, fees, eligibility, and admission support for Indian students planning medical education abroad.',
  }),
  '/mbbs-in-georgia': buildMeta({
    title:
      'MBBS in Georgia 2026 for Indian Students | Fees, Eligibility & Admission',
    description:
      'Review MBBS in Georgia for Indian students with fee guidance, eligibility, admissions support, and medical university comparisons.',
    primaryKeyword: 'mbbs in georgia for indian students',
    secondaryKeywords: [
      'mbbs in georgia 2026',
      'mbbs in georgia fees',
      'mbbs in georgia eligibility',
      'medical universities in georgia',
    ],
    ogTitle:
      'MBBS in Georgia 2026 for Indian Students | Fees, Eligibility & Admission',
    ogDescription:
      'Study MBBS in Georgia with clearer fee planning, eligibility guidance, and university comparisons for Indian students.',
  }),
  '/blog': buildMeta({
    title: 'MBBS Abroad Blog for Indian Students | Fees, Eligibility & Admission Updates',
    description:
      'Read MBBS abroad articles covering eligibility, fees, admissions, NMC guidance, and medical university comparisons for Indian students.',
    primaryKeyword: 'mbbs abroad blog for indian students',
    secondaryKeywords: [
      'mbbs abroad articles',
      'mbbs abroad fees updates',
      'mbbs abroad eligibility guide',
      'mbbs abroad news',
    ],
    ogTitle:
      'MBBS Abroad Blog for Indian Students | Fees, Eligibility & Admission Updates',
    ogDescription:
      'Explore MBBS abroad blogs on admissions, fees, eligibility, and university selection for Indian students.',
  }),
  '/news': buildMeta({
    title: 'MBBS Abroad News for Indian Students | Admission & Eligibility Updates',
    description:
      'Stay updated with MBBS abroad news, admission changes, eligibility updates, and medical education developments relevant to Indian students.',
    primaryKeyword: 'mbbs abroad news for indian students',
    secondaryKeywords: [
      'mbbs abroad admission updates',
      'mbbs abroad eligibility news',
      'medical education news',
      'nmc guidance updates',
    ],
    ogTitle:
      'MBBS Abroad News for Indian Students | Admission & Eligibility Updates',
    ogDescription:
      'Track MBBS abroad admission updates, eligibility changes, and medical education news relevant to Indian students.',
  }),
  '/faqs': buildMeta({
    title: 'MBBS Abroad FAQs for Indian Students | Fees, Eligibility & Admission Help',
    description:
      'Find answers on MBBS abroad fees, eligibility, admissions, documents, visas, and university selection for Indian students.',
    primaryKeyword: 'mbbs abroad faqs for indian students',
    secondaryKeywords: [
      'mbbs abroad questions',
      'mbbs abroad eligibility faqs',
      'mbbs abroad visa questions',
      'mbbs abroad admission help',
    ],
    ogTitle:
      'MBBS Abroad FAQs for Indian Students | Fees, Eligibility & Admission Help',
    ogDescription:
      'Get practical answers on MBBS abroad eligibility, admissions, fees, documents, and student support.',
  }),
  '/photo-gallery': buildMeta({
    title: 'MBBS Abroad Campus Photos | Indo Global Education Gallery',
    description:
      'Browse MBBS abroad campus, hostel, classroom, and student life photos from medical university destinations supported by Indo Global Education.',
    primaryKeyword: 'mbbs abroad campus photos',
    secondaryKeywords: [
      'medical university gallery',
      'mbbs abroad student life photos',
      'mbbs abroad campus images',
    ],
    ogTitle: 'MBBS Abroad Campus Photos | Indo Global Education Gallery',
    ogDescription:
      'See campus, hostel, and student life images from MBBS abroad destinations and partner universities.',
  }),
  '/video-gallery': buildMeta({
    title: 'MBBS Abroad Videos for Indian Students | Indo Global Education',
    description:
      'Watch MBBS abroad videos on campus life, university facilities, student experiences, and admission guidance for Indian students.',
    primaryKeyword: 'mbbs abroad videos for indian students',
    secondaryKeywords: [
      'mbbs abroad campus videos',
      'medical university videos',
      'mbbs abroad student experience',
    ],
    ogTitle: 'MBBS Abroad Videos for Indian Students | Indo Global Education',
    ogDescription:
      'Watch MBBS abroad videos covering university life, academic facilities, and student guidance.',
  }),
  '/contact-us': buildMeta({
    title: 'MBBS Abroad Counselling Contact | Fees, Eligibility & Admission Support',
    description:
      'Contact Indo Global Education for MBBS abroad counselling, fee guidance, eligibility checks, admission support, and student assistance.',
    primaryKeyword: 'mbbs abroad counselling contact',
    secondaryKeywords: [
      'mbbs abroad contact',
      'mbbs abroad admission support',
      'mbbs abroad enquiry',
      'medical counselling contact',
    ],
    ogTitle:
      'MBBS Abroad Counselling Contact | Fees, Eligibility & Admission Support',
    ogDescription:
      'Reach Indo Global Education for MBBS abroad admissions support, counselling, and university guidance.',
  }),
  '/privacy-policy': buildMeta({
    title: 'Privacy Policy | Indo Global Education',
    description:
      'Review how Indo Global Education handles enquiry data, cookies, analytics, advertising disclosures, and WhatsApp communications.',
    primaryKeyword: 'indo global education privacy policy',
    secondaryKeywords: [
      'cookie disclosures',
      'meta ads privacy disclosure',
      'google ads privacy disclosure',
      'whatsapp privacy notice',
    ],
    ogTitle: 'Privacy Policy | Indo Global Education',
    ogDescription:
      'See how enquiry data, cookies, advertising disclosures, and WhatsApp communications are handled on this site.',
  }),
  '/cookie-policy': buildMeta({
    title: 'Cookie Policy | Indo Global Education',
    description:
      'Understand how Indo Global Education uses necessary, analytics, and advertising cookies and how to manage your cookie preferences.',
    primaryKeyword: 'indo global education cookie policy',
    secondaryKeywords: [
      'cookie preferences',
      'analytics cookies',
      'advertising cookies',
      'meta ads cookies',
    ],
    ogTitle: 'Cookie Policy | Indo Global Education',
    ogDescription:
      'Review cookie categories, advertising storage controls, and preference management for this website.',
  }),
  '/terms-and-conditions': buildMeta({
    title: 'Terms & Conditions | Indo Global Education',
    description:
      'Read the website terms for Indo Global Education covering content use, enquiries, third-party links, and service limitations.',
    primaryKeyword: 'indo global education terms and conditions',
    secondaryKeywords: [
      'website terms',
      'education counselling terms',
      'mbbs abroad website terms',
    ],
    ogTitle: 'Terms & Conditions | Indo Global Education',
    ogDescription:
      'Read the website terms covering usage, enquiries, third-party services, and limitations.',
  }),
  '/disclaimer': buildMeta({
    title: 'Disclaimer | Indo Global Education',
    description:
      'Read the Indo Global Education disclaimer about admissions guidance, regulatory references, external information, and independent verification.',
    primaryKeyword: 'indo global education disclaimer',
    secondaryKeywords: [
      'mbbs abroad disclaimer',
      'education guidance disclaimer',
      'regulatory disclaimer',
    ],
    ogTitle: 'Disclaimer | Indo Global Education',
    ogDescription:
      'Understand the scope and limits of the information published on this MBBS abroad counselling website.',
  }),
};

const universityPages = [
  ...russiaUniversities.map((university) => ({
    ...university,
    country: 'Russia',
    countryKeyword: 'mbbs in russia',
  })),
  ...armeniaUniversities.map((university) => ({
    ...university,
    country: 'Armenia',
    countryKeyword: 'mbbs in armenia',
  })),
  ...georgiaUniversities.map((university) => ({
    ...university,
    country: 'Georgia',
    countryKeyword: 'mbbs in georgia',
  })),
];

const universityMeta = new Map(
  universityPages.map((university) => {
    const primaryKeyword = `${university.label.toLowerCase()} mbbs`;
    const secondaryKeywords = [
      university.countryKeyword,
      `${university.label.toLowerCase()} fees`,
      `${university.label.toLowerCase()} admission`,
      `${university.label.toLowerCase()} eligibility`,
    ];

    return [
      university.path,
      buildMeta({
        title: `${university.label} | MBBS in ${university.country} for Indian Students`,
        description: `Explore ${university.label} for Indian students with admission guidance, fee planning, eligibility support, and MBBS in ${university.country.toLowerCase()} information.`,
        primaryKeyword,
        secondaryKeywords,
        ogTitle: `${university.label} | MBBS in ${university.country} for Indian Students`,
        ogDescription: `Compare ${university.label} admission details, eligibility support, and MBBS in ${university.country.toLowerCase()} guidance for Indian students.`,
      }),
    ];
  }),
);

const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (existing) return existing;

  const element = create();
  document.head.appendChild(element);
  return element;
};

const setNameMeta = (name: string, content: string) => {
  const element = ensureMeta(`meta[name="${name}"]`, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    return meta;
  });

  element.setAttribute('content', content);
};

const setPropertyMeta = (property: string, content: string) => {
  const element = ensureMeta(`meta[property="${property}"]`, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', property);
    return meta;
  });

  element.setAttribute('content', content);
};

const setCanonical = (url: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
};

const setJsonLd = (id: string, data: unknown) => {
  let element = document.getElementById(id) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

const removeJsonLd = (id: string) => {
  document.getElementById(id)?.remove();
};

const labelFromSegment = (segment: string) =>
  segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const buildBreadcrumbs = (pathname: string, pageTitle: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ];

  segments.forEach((segment, index) => {
    const url = `${SITE_URL}/${segments.slice(0, index + 1).join('/')}`;
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name:
        index === segments.length - 1
          ? pageTitle.split('|')[0].trim()
          : labelFromSegment(segment),
      item: url,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'EducationalOrganization', 'LocalBusiness'],
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  image: DEFAULT_IMAGE,
  email: 'Indoglobaledu.official@gmail.com',
  telephone: '+917090000502',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, Hotel Biggboss International, NH4',
    addressLocality: 'Chitradurga',
    addressRegion: 'Karnataka',
    postalCode: '577501',
    addressCountry: 'IN',
  },
  areaServed: ['India', 'Russia', 'Armenia', 'Georgia'],
  description: DEFAULT_META.description,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const robotsContent = (noindex?: boolean) =>
  noindex
    ? 'noindex, follow, max-image-preview:large'
    : 'index, follow, max-image-preview:large';

const SEO = () => {
  const location = useLocation();
  const pathname = location.pathname === '/home' ? '/' : location.pathname;

  const pageMeta = useMemo(() => {
    const meta = staticPages[pathname] ?? universityMeta.get(pathname);
    return meta ?? DEFAULT_META;
  }, [pathname]);

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
    const keywords = [pageMeta.primaryKeyword, ...pageMeta.secondaryKeywords];

    document.title = pageMeta.title;
    setCanonical(canonicalUrl);

    setNameMeta('description', pageMeta.description);
    setNameMeta('keywords', keywords.join(', '));
    setNameMeta('robots', robotsContent(pageMeta.noindex));
    setNameMeta('author', SITE_NAME);
    setNameMeta('twitter:card', 'summary_large_image');
    setNameMeta('twitter:title', pageMeta.ogTitle);
    setNameMeta('twitter:description', pageMeta.ogDescription);
    setNameMeta('twitter:image', DEFAULT_IMAGE);

    setPropertyMeta('og:title', pageMeta.ogTitle);
    setPropertyMeta('og:description', pageMeta.ogDescription);
    setPropertyMeta('og:type', 'website');
    setPropertyMeta('og:url', canonicalUrl);
    setPropertyMeta('og:site_name', SITE_NAME);
    setPropertyMeta('og:image', DEFAULT_IMAGE);

    setJsonLd('organization-json-ld', organizationJsonLd);
    setJsonLd('website-json-ld', websiteJsonLd);
    setJsonLd('breadcrumb-json-ld', buildBreadcrumbs(pathname, pageMeta.title));

    if (pathname === '/faqs') {
      setJsonLd('faq-json-ld', faqJsonLd);
    } else {
      removeJsonLd('faq-json-ld');
    }
  }, [pageMeta, pathname]);

  return null;
};

export default SEO;

import type { IconType } from 'react-icons';
import {
  HiOutlineGlobeAlt,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineClipboardCheck,
  HiOutlineBookOpen,
} from 'react-icons/hi';

export interface FAQItem {
  question: string;
  answer: string;
  icon: IconType;
}

export const faqData: FAQItem[] = [
  {
    question: 'Why should I study MBBS Abroad?',
    answer:
      'Studying MBBS abroad offers global exposure, world-class infrastructure, and high-quality education at a fraction of the cost of Indian private medical colleges. Universities in countries like Russia and Georgia are NMC-approved and WHO-listed, ensuring your degree is globally recognized.',
    icon: HiOutlineGlobeAlt,
  },
  {
    question: 'Is NEET required to study MBBS Abroad in 2026?',
    answer:
      'Yes, qualifying NEET-UG is mandatory for Indian students planning to study MBBS abroad. As per NMC guidelines, without a qualifying NEET score, you will not be eligible to appear for the FMGE/NExT licensing exams to practice in India after graduation.',
    icon: HiOutlineClipboardCheck,
  },
  {
    question: 'What is the duration and medium of instruction?',
    answer:
      'The duration is typically 6 years (54 months of academic study + 12 months of mandatory clinical internship). All programs we facilitate are 100% English-medium, which is a strict requirement by the NMC for your degree to be valid in India.',
    icon: HiOutlineBookOpen,
  },
  {
    question: 'What is the procedure for admission?',
    answer:
      'Our streamlined process includes: 1. University Selection & Counseling, 2. Application Submission, 3. Admission Letter Issuance, 4. Document Apostille & Passport Submission, 5. Visa Invitation & Stamping, 6. Travel Arrangements & Pre-departure Briefing.',
    icon: HiOutlineAcademicCap,
  },
  {
    question: 'How do you help with FMGE/NExT preparation?',
    answer:
      'We provide specialized coaching support starting from the early years of your degree. This includes access to Indian faculty lectures, online test series, and NExT-specific curriculum integration within the university to ensure you clear the licensing exam on your first attempt.',
    icon: HiOutlineUserGroup,
  },
];

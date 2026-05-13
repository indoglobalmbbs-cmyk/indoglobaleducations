import { banner4, russia, banner5 } from '../assets/images';

export interface NewsUpdate {
  id: number;
  title: string;
  summary: string;
  date: string;
  tag: 'Alert' | 'Regulation' | 'Travel' | 'Update';
  image: string;
  priority?: boolean;
}

export const newsUpdates: NewsUpdate[] = [
  {
    id: 1,
    title: 'NMC Issues New Advisory for Uzbekistan Admissions (April 2026)',
    summary:
      "The National Medical Commission has flagged specific compliance risks regarding the 'Uzbekistan route'. Ensure your university meets FMGL 2021 standards.",
    date: 'April 21, 2026',
    tag: 'Alert',
    image: banner4,
    priority: true,
  },
  {
    id: 2,
    title: 'Mandatory Physical Training for Online Classes Explained',
    summary:
      'New public notice regarding mandatory onsite compensation for students who completed portions of their degree online during travel restrictions.',
    date: 'April 15, 2026',
    tag: 'Regulation',
    image: russia,
  },
  {
    id: 3,
    title: 'Flight Subsidies Announced for Georgia-Bound Medical Students',
    summary:
      'International airlines partner with educational consultancies to provide discounted airfare for Indian medical aspirants starting their Autumn 2026 intake.',
    date: 'April 10, 2026',
    tag: 'Travel',
    image: banner5,
  },
];

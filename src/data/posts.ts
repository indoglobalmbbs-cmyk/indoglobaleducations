import { banner3, georgia, armenia } from '../assets/images';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'NMC Rules for MBBS Abroad in 2026: A Complete Breakdown',
    excerpt:
      'The university in which you pursue your MBBS can either make or break your career. Hence, there are several new guidelines you must follow...',
    date: 'April 11, 2026',
    author: 'Admin',
    category: 'NMC Update',
    image: banner3,
  },
  {
    id: 2,
    title: 'Why Georgia is Becoming the Top Choice for Indian Students',
    excerpt:
      'With world-class infrastructure and affordable living, Georgia offers a unique European medical education experience...',
    date: 'April 08, 2026',
    author: 'Education Expert',
    category: 'Georgia',
    image: georgia,
  },
  {
    id: 3,
    title: 'Life as an Indian Medical Student in Armenia',
    excerpt:
      'From Indian food availability to clinical rotations, here is everything you need to know about studying in Armenia...',
    date: 'April 05, 2026',
    author: 'Student Council',
    category: 'Armenia',
    image: armenia,
  },
];

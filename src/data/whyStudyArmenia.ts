import type { IconType } from 'react-icons';
import {
  FaMoneyBillWave,
  FaUniversity,
  FaCheckCircle,
  FaGlobeAmericas,
  FaGraduationCap,
  FaAward,
  FaHospital,
} from 'react-icons/fa';

interface WhyStudyArmenia {
  icon: IconType;
  title: string;
  desc: string;
}

export const whyStudyArmenia: WhyStudyArmenia[] = [
  {
    icon: FaMoneyBillWave,
    title: 'Affordable Tuition Fees',
    desc: 'Tuition fees are nearly five times lower than in India, making it a highly cost-effective option for medical aspirants.',
  },
  {
    icon: FaUniversity,
    title: 'WHO & NMC Accredited',
    desc: 'Over 70 medical universities accredited by WHO and NMC, providing advanced technology and global recognition.',
  },
  {
    icon: FaCheckCircle,
    title: 'NMC Screening Training',
    desc: 'Students receive specialized training for screening exams, allowing them to practice medicine globally, including India.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'English Medium Courses',
    desc: 'Courses are available in English, with additional opportunities to learn Armenian for clinical practice with locals.',
  },
  {
    icon: FaGraduationCap,
    title: 'Direct Admission',
    desc: 'No donation fees or stressful entrance exams are required. Admission is simple and based on merit.',
  },
  {
    icon: FaAward,
    title: 'Global Faculty & Research',
    desc: 'Learn from highly experienced faculty and engage in cutting-edge research and medical innovation programs.',
  },
  {
    icon: FaHospital,
    title: 'Modern Infrastructure',
    desc: 'Access to state-of-the-art laboratories, advanced medical equipment, and top-tier clinical training facilities.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Exchange Programs',
    desc: 'Benefit from various exchange programs with prestigious European universities and global institutions.',
  },
  {
    icon: FaHospital,
    title: 'Cultural Experience',
    desc: 'Experience a rich culture, scenic landscapes, and a welcoming environment with friendly relations with India.',
  },
];

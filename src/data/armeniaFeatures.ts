import type { IconType } from 'react-icons';
import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaHospital,
  FaGraduationCap,
} from 'react-icons/fa';

interface ArmeniaFeature {
  icon: IconType;
  title: string;
  desc: string;
}

export const armeniaFeatures: ArmeniaFeature[] = [
  {
    icon: FaMoneyBillWave,
    title: 'Affordable Fees',
    desc: 'Low tuition fees and living costs compared to Western countries.',
  },
  {
    icon: FaCheckCircle,
    title: 'Global Recognition',
    desc: 'Degrees recognized by WHO, NMC (MCI), and ECFMG (USA).',
  },
  {
    icon: FaHospital,
    title: 'Modern Infrastructure',
    desc: 'State-of-the-art labs and hospitals for clinical practice.',
  },
  {
    icon: FaGraduationCap,
    title: 'No Entrance Exam',
    desc: 'Direct admission based on NEET score. No donation fees.',
  },
];

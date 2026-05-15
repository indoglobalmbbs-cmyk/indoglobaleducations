import type { IconType } from 'react-icons';
import {
  FaUniversity,
  FaGraduationCap,
  FaGlobeAmericas,
  FaAward,
} from 'react-icons/fa';

interface ArmeniaStat {
  icon: IconType;
  label: string;
  color: string;
}

export const armeniaStats: ArmeniaStat[] = [
  {
    icon: FaUniversity,
    label: '30+ Universities',
    color: 'text-blue-600',
  },
  {
    icon: FaGraduationCap,
    label: 'MCI/WHO Approved',
    color: 'text-red-600',
  },
  {
    icon: FaGlobeAmericas,
    label: 'English Medium',
    color: 'text-green-600',
  },
  {
    icon: FaAward,
    label: 'Top-Tier Faculty',
    color: 'text-yellow-600',
  },
];

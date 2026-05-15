export interface ArmeniaSyllabus {
  year: string;
  sem: string;
  subjects: string[];
  color: string;
}

export const armeniaSyllabus: ArmeniaSyllabus[] = [
  {
    year: '1st Year',
    sem: '1st - 2nd Sem',
    subjects: [
      'Biology',
      'Physics',
      'Chemistry',
      'Nursing (Surgery & Therapy)',
      'Anatomy',
      'Histology',
      'Latin',
      'Public Health',
      'History',
    ],
    color: 'border-blue-500',
  },
  {
    year: '2nd Year',
    sem: '3rd - 4th Sem',
    subjects: [
      'Economics',
      'Philosophy',
      'Culturology',
      'Basics of Research',
      'Mathematics',
      'Physiology',
      'Biochemistry',
      'Immunology',
      'Hygiene',
      'Psychology',
      'Medical Law',
      'Bioethics',
      'Armenian Language',
    ],
    color: 'border-purple-500',
  },
];

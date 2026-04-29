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
      'Studying MBBS abroad offers the students several advantages and benefits at an extremely pocket-friendly cost, making it a sought after choice for thousands of Indian students every year.',
    icon: HiOutlineGlobeAlt,
  },
  {
    question:
      'Which are the best countries to study MBBS abroad for Indian students?',
    answer:
      'Among the many choices for MBBS abroad, Russia is gaining rapid popularity among Indian students due to the quality education and affordability it provides. Apart from it, countries like Ukraine, Kyrgyzstan, etc can be a good choice when it comes to affordability.',
    icon: HiOutlineClipboardCheck,
  },
  {
    question: 'Does studying MBBS abroad require any entrance exam/interview?',
    answer:
      'It depends on the country of your choice. To study MBBS in Russia, the student is not required to qualify for any entrance exam, linguistic tests, or interviews.',
    icon: HiOutlineBookOpen,
  },
  {
    question: 'What is the duration of MBBS Abroad?',
    answer:
      'Depending upon the choice of the country and university, the overall duration of MBBS abroad may vary from 5 years to 7 years including clinical internship.',
    icon: HiOutlineAcademicCap,
  },
  {
    question: 'What is the procedure to study MBBS admission in abroad?',
    answer:
      'To study MBBS abroad, the student must be of at least 17years of age in the year of enrollment, have passed class 12 with a minimum of 50% in Physics, Chemistry, Biology and qualify NEET UG exam. ',
    icon: HiOutlineUserGroup,
  },
  {
    question: 'Is NEET required to study MBBS in Abroad?',
    answer:
      'Yes, as per the current regulation, any students wishing and willing to study MBBS in India or abroad have to qualify NEET exam, conducted once a year.',
    icon: HiOutlineUserGroup,
  },
  {
    question: 'Can I practice in India after studying medicine abroad?',
    answer:
      'Yes, provided you study in an MCI (NMC) recognized university/college and clear the medical screening exam (FMGE/NExT), you can practice in India after you complete your MBBS course abroad.',
    icon: HiOutlineUserGroup,
  },
  {
    question:
      'How does Indo Global Education help in preparing for the FMGE/NExT?',
    answer:
      'Indo Global Education facilitates coaching classes for all its students in India as well as in their university to help them prepare and ace the FMGE/NExT exam.',
    icon: HiOutlineUserGroup,
  },
  {
    question:
      'How does Indo Global Education help the students staying abroad?',
    answer:
      'For the students studying abroad, Indo Global Education arranges hostels, Indian canteens, paperwork arrangements, etc for their comfort. Our international offices ensure that all the needs of the students staying abroad are fulfilled.',
    icon: HiOutlineUserGroup,
  },
  {
    question: 'What documents are required for admission and Visa purposes?',
    answer:
      'Following are the major documents required: Passport, HIV Report, Passport Size Photograph, 10th and 12th (Mark sheet & Certificate), NEET Score Card, Cast Certificate (if required).',
    icon: HiOutlineUserGroup,
  },
  {
    question: 'What are the services the processing fees include?',
    answer:
      'There is a processing fee that includes the cost of all pre-admission formalities including documentation, visa process, travel arrangements, and others. For Discount, please follow the discount policy given by the management.',
    icon: HiOutlineUserGroup,
  },
  {
    question:
      'How does Indo Global Education help in getting an education loan?',
    answer:
      'Indo Global Education assist you with the necessary documents required for Education Loan from private and nationalized banks. We also provide you with the reference of the students who have got the loan approved for detailed information on the process involved in the sanctioning of the same.',
    icon: HiOutlineUserGroup,
  },
  {
    question:
      'What is the safety protocol by Indo Global Education for the students studying in Russia?',
    answer:
      'Yes, the team of Indo Global Education is always in contact with the students, continuously addressing their concerns and requirements at best, therefore ensuring not only their safety but also satisfaction.',
    icon: HiOutlineUserGroup,
  },
  {
    question:
      'What is to be done if the student faces any difficulty in the foreign land?',
    answer:
      'Indo Global Education has its representative readily available to help the students at any point of time during their period of stay abroad. The students and parents also get in contact with their counselor for further assistance as well as monitoring.',
    icon: HiOutlineUserGroup,
  },
  {
    question: 'Can a student earn while learning?',
    answer:
      'Though the students are permitted to get a part-time job for managing their expenses, it is always advised against it as the course itself is heavily packed up. A job while studying may cause excessive stress affecting the performance of the students.',
    icon: HiOutlineUserGroup,
  },
  {
    question: 'What do you mean by ‘signing a contract with the university’?',
    answer:
      'As per the regulations of Universities, all International students sign a contract at the time of admission. This contract specifies educational responsibility on the part of the university and the responsibilities of the students. This contract is general in nature and a statutory requirement in these countries.',
    icon: HiOutlineUserGroup,
  },
  {
    question:
      'Can a student come back to India during the holidays? What is the holiday period?',
    answer:
      'The semester break is generally between July & August. During this period, the students are required to complete their hospital training. Depending upon their university, they can travel back to India and complete the training here only or return to their home after the completion of the period. Students can also return in case of emergency with prior approval from the university.',
    icon: HiOutlineUserGroup,
  },
  {
    question: 'After completing the course can I do my internship in India?',
    answer:
      'Yes, on completing the course students need to appear for the Medical screening examination of India (FMGE/NExT), after which qualifying students can do an internship in India.',
    icon: HiOutlineUserGroup,
  },
];

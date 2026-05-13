export interface AdmissionStep {
  step: string;
  title: string;
  desc: string;
}

export const admissionProcess: AdmissionStep[] = [
  {
    step: '01',
    title: 'Online Application',
    desc: 'Submit your 10th, 11th, and 12th transcripts, school leaving certificate, and passport copy via email.',
  },
  {
    step: '02',
    title: 'Invitation Letter',
    desc: 'Applications are processed in 1-2 working days. Successful candidates receive a formal admission & invitation letter.',
  },
  {
    step: '03',
    title: 'Enrollment Fees',
    desc: 'Secure your seat by paying the initial enrollment fees through net banking or other available secure methods.',
  },
  {
    step: '04',
    title: 'Visa Application',
    desc: 'Apply for your student visa using the invitation letter, 2-year valid passport, and attested certificates.',
  },
  {
    step: '05',
    title: 'Arrival in Armenia',
    desc: 'Pay first-year fees before departure. Provide flight details for airport reception and immigration clearance.',
  },
  {
    step: '06',
    title: 'Commencement',
    desc: 'Register at the university with original documents within 3 days of arrival and start your medical classes.',
  },
];

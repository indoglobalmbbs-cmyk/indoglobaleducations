import { useState } from 'react';
import { russiaUniversities } from '../../../data/russiaUniversities';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaUniversity,
  FaGlobeAmericas,
  FaAward,
  FaCheckCircle,
  FaHospital,
  FaMoneyBillWave,
  FaClock,
} from 'react-icons/fa';
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  servicesBanner,
} from '../../../assets/images';
import { russiaFaq } from '../../../data/russiaFaq';
import FaqItem from '../../../components/FaqItem';

const Russia = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleUniversities = showAll
    ? russiaUniversities
    : russiaUniversities.slice(0, 6);

  const galleryImages = [
    { src: banner1, title: 'MBBS University Campus in Russia' },
    { src: banner2, title: 'Modern Medical Classrooms Russia' },
    { src: banner3, title: 'Indian Student Life in Russia' },
    { src: banner4, title: 'Clinical Training for MBBS Students' },
    { src: banner5, title: 'Student Hostel Facilities Russia' },
    { src: banner6, title: 'MBBS Graduation Ceremony Russia' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={servicesBanner}
          alt="Study MBBS in Russia - Indo Global Education"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="text-5xl font-bold mb-4 animate-fade-in">
            MBBS IN RUSSIA
          </div>
          <p className="text-xl max-w-2xl text-gray-200">
            Indo Global Education - MBBS in Russia
          </p>
        </div>
      </section>
      <section className="py-10 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <FaUniversity />,
                label: '30+ Universities',
                color: 'text-blue-600',
              },
              {
                icon: <FaGraduationCap />,
                label: 'MCI/WHO Approved',
                color: 'text-red-600',
              },
              {
                icon: <FaGlobeAmericas />,
                label: 'English Medium',
                color: 'text-green-600',
              },
              {
                icon: <FaAward />,
                label: 'Top-Tier Faculty',
                color: 'text-yellow-600',
              },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`${stat.color} text-3xl mb-2`}>{stat.icon}</div>
                <p className="font-bold text-primary text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-2/3">
            <div className="mb-10 text-left">
              <div className="text-3xl font-bold text-primary mb-4">
                Why Choose MBBS in Russia?
              </div>
              <div className="h-1.5 w-20 bg-accent rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaMoneyBillWave />,
                  title: 'Affordable Fees',
                  desc: 'Low tuition fees and living costs compared to Western countries.',
                },
                {
                  icon: <FaCheckCircle />,
                  title: 'Global Recognition',
                  desc: 'Degrees recognized by WHO, NMC (MCI), and ECFMG (USA).',
                },
                {
                  icon: <FaHospital />,
                  title: 'Modern Infrastructure',
                  desc: 'State-of-the-art labs and hospitals for clinical practice.',
                },
                {
                  icon: <FaGraduationCap />,
                  title: 'No Entrance Exam',
                  desc: 'Direct admission based on NEET score. No donation fees.',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="text-accent text-2xl mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 w-full sticky top-24">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-primary p-6 text-white text-center">
                <div className="text-xl font-bold">Enquire Now</div>
                <p className="text-blue-100 text-sm">
                  Get a free counseling session today
                </p>
              </div>
              <form className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email Id"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-bold py-2 rounded-md shadow-lg shadow-accent/30 transition-transform active:scale-[0.98]"
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="text-3xl font-bold text-primary mb-6">
              MBBS in Russia Fee for Indian Students (Updated 2026-27)
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-accent h-2 w-2 rounded-full mt-2 shrink-0"></span>
                <span>
                  <strong>Affordable Fees:</strong> High-quality education at a
                  fraction of the cost of Western countries.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent h-2 w-2 rounded-full mt-2 shrink-0"></span>
                <span>
                  <strong>No Entrance Exams:</strong> Direct admission into top
                  medical and engineering programs without IELTS/TOEFL.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent h-2 w-2 rounded-full mt-2 shrink-0"></span>
                <span>
                  <strong>Global Recognition:</strong> Degrees recognized by NMC
                  (India), WHO, UNESCO, and European Medical Councils.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-accent">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Course Duration:</span>
                <span>6 Years (MBBS)</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Avg. Tuition Fee:</span>
                <span>$3,500 - $6,000 / Year</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Intake Period:</span>
                <span>September / February</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-2">
              Top Universities in Russia
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleUniversities.map((uni) => (
              <div
                key={uni.path}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">
                    {uni.label || 'University Name'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {'Russia, Eastern Europe'}
                  </p>
                  <Link
                    to={uni.path}
                    className="inline-block bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-accent transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {russiaUniversities.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-accent hover:bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {showAll ? 'Show Less' : 'View All Universities'}
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <div className="text-3xl font-bold text-primary mb-4">
              Study MBBS in Russia for Indian Students 2024-25
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mb-8"></div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  MBBS in Russia is a popular option for medical students from
                  India and abroad due to its
                  <span className="font-semibold text-primary">
                    {' '}
                    simple admission process
                  </span>
                  , high academic standards, and affordable fees. With 30 of the
                  world’s top 100 medical universities, Russia offers excellent
                  educational opportunities.
                </p>
                <p>
                  The cost of studying is significantly lower compared to other
                  countries, with 12 universities offering courses entirely in{' '}
                  <span className="font-semibold text-primary">
                    English Medium
                  </span>
                  . To qualify, students need at least 50% in PCB (Physics,
                  Chemistry, Biology) and must pass the NEET exam.
                </p>
                <div className="bg-primary-light p-6 rounded-xl border-l-4 border-accent">
                  <p className="italic text-primary font-medium">
                    "No additional entrance exams are required, making the
                    process straightforward for Indian aspirants."
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-4">Key Highlight</th>
                      <th className="p-4">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-primary">
                        Academic Year
                      </td>
                      <td className="p-4 text-gray-600">2024 - 2025</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-bold text-primary">
                        Eligibility
                      </td>
                      <td className="p-4 text-gray-600">
                        50% in PCB & NEET Qualified
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-primary">
                        Student-Teacher Ratio
                      </td>
                      <td className="p-4 text-gray-600">
                        7:1 (Personalized Attention)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-bold text-primary">
                        Medium of Instruction
                      </td>
                      <td className="p-4 text-gray-600">English & Russian</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-primary">
                        Top Ranked Unis
                      </td>
                      <td className="p-4 text-gray-600">
                        30 in World's Top 100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-3xl font-bold text-primary mb-4">
              Why Study MBBS in Russia?
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Many students from India and other countries choose Russia for
              their MBBS studies due to its high academic standards and unique
              advantages.
            </p>
            <div className="h-1.5 w-24 bg-accent rounded-full mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMoneyBillWave />,
                title: 'Affordable Tuition Fees',
                desc: 'Tuition fees are nearly five times lower than in India, making it a highly cost-effective option for medical aspirants.',
              },
              {
                icon: <FaUniversity />,
                title: 'WHO & NMC Accredited',
                desc: 'Over 70 medical universities accredited by WHO and NMC, providing advanced technology and global recognition.',
              },
              {
                icon: <FaCheckCircle />,
                title: 'NMC Screening Training',
                desc: 'Students receive specialized training for screening exams, allowing them to practice medicine globally, including India.',
              },
              {
                icon: <FaGlobeAmericas />,
                title: 'English Medium Courses',
                desc: 'Courses are available in English, with additional opportunities to learn Russian for clinical practice with locals.',
              },
              {
                icon: <FaGraduationCap />,
                title: 'Direct Admission',
                desc: 'No donation fees or stressful entrance exams are required. Admission is simple and based on merit.',
              },
              {
                icon: <FaAward />,
                title: 'Global Faculty & Research',
                desc: 'Learn from highly experienced faculty and engage in cutting-edge research and medical innovation programs.',
              },
              {
                icon: <FaHospital />,
                title: 'Modern Infrastructure',
                desc: 'Access to state-of-the-art laboratories, advanced medical equipment, and top-tier clinical training facilities.',
              },
              {
                icon: <FaGlobeAmericas />,
                title: 'Exchange Programs',
                desc: 'Benefit from various exchange programs with prestigious European universities and global institutions.',
              },
              {
                icon: <FaHospital />,
                title: 'Cultural Experience',
                desc: 'Experience a rich culture, scenic landscapes, and a welcoming environment with friendly relations with India.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-accent text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 bg-primary-light rounded-2xl border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-primary text-2xl" />
                <div className="text-xl font-bold text-primary">
                  Course Duration
                </div>
              </div>
              <p className="text-text-muted mb-4">
                The MBBS program in Russia lasts for <strong>6 years</strong>.
              </p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>5 Years:
                  Theoretical and pre-clinical study.
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>1 Year:
                  Clinical internship at affiliated hospitals.
                </li>
              </ul>
            </div>
            <div className="p-8 bg-primary-light rounded-2xl border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <FaGlobeAmericas className="text-primary text-2xl" />
                <h3 className="text-xl font-bold text-primary">
                  Language Medium
                </h3>
              </div>
              <p className="text-text-muted mb-4">
                Courses are offered in <strong>English Medium</strong> for
                international students.
              </p>
              <p className="text-sm text-text-muted italic">
                Support for learning Russian is provided to help students
                interact with patients during clinical training.
              </p>
            </div>
            <div className="p-8 bg-primary-light rounded-2xl border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <FaAward className="text-primary text-2xl" />
                <h3 className="text-xl font-bold text-primary">
                  Global Recognition
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['WHO', 'NMC', 'ECFMG', 'FAIMER', 'WFME'].map((org) => (
                  <span
                    key={org}
                    className="px-3 py-1 bg-white border border-primary/10 rounded-full text-xs font-bold text-primary"
                  >
                    {org}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-text-muted">
                Degrees are globally accepted, allowing practice in India, USA,
                and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="text-3xl font-bold text-primary mb-6">
                Admission Criteria 2024-25
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Age', value: '17 - 25 years as of Dec 31st' },
                  { label: 'Academics', value: '12th Science (PCB + English)' },
                  {
                    label: 'Minimum %',
                    value: '50% for General, 45% for SC/ST/OBC',
                  },
                  {
                    label: 'Entrance',
                    value: 'Qualifying NEET Exam score is mandatory',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <span className="font-bold text-primary">{item.label}</span>
                    <span className="text-text-muted">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="text-3xl font-bold text-primary mb-6">
                Documents Required
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Valid Passport (18 Months)',
                  '10th & 12th Marksheets',
                  'Birth Certificate',
                  '10 Recent Photos',
                  'University Invitation Letter',
                  'HIV Test Report',
                  'MEA Legalization',
                  'Health & Travel Insurance',
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <FaCheckCircle className="text-success shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-2">
              Step-by-Step Admission Process
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                step: '01',
                title: 'Counseling',
                desc: 'Consult our experts about fees and colleges.',
              },
              {
                step: '02',
                title: 'Apply',
                desc: 'Submit your documents and application form.',
              },
              {
                step: '03',
                title: 'Letter',
                desc: 'Get your official Admission Letter.',
              },
              {
                step: '04',
                title: 'Fees',
                desc: 'Deposit tuition fees to secure seat.',
              },
              {
                step: '05',
                title: 'Visa',
                desc: 'Visa processing and embassy interviews.',
              },
              {
                step: '06',
                title: 'Departure',
                desc: 'Fly to Russia and begin your journey.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-gray-50 rounded-xl text-center hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <div className="text-3xl font-black text-gray-200 group-hover:text-white/20 absolute top-2 right-2 transition-colors">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2 pt-4">{item.title}</h4>
                <p className="text-xs leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits for Indian Students
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHospital />,
                title: 'Govt. Universities',
                desc: 'Directly governed by the Russian government, ensuring stability and standards.',
              },
              {
                icon: <FaMoneyBillWave />,
                title: 'Loan & Scholarship',
                desc: 'Comprehensive guidance for education loans and merit-based scholarship programs.',
              },
              {
                icon: <FaCheckCircle />,
                title: 'Safety First',
                desc: 'A student-friendly environment with strict anti-ragging laws and 24/7 security.',
              },
              {
                icon: <FaGraduationCap />,
                title: 'Indian Food',
                desc: 'Dedicated Indian messes and canteens serving authentic food in university hostels.',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 
                     hover:bg-white/10 hover:border-accent/50 transition-all duration-300 
                     hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center 
                          text-accent text-3xl mb-6 group-hover:scale-110 group-hover:bg-accent 
                          group-hover:text-white transition-all duration-300 shadow-inner"
                >
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-xl text-white mb-3 tracking-tight">
                  {benefit.title}
                </h4>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-4">
              Top Medical Universities in Russia
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Altai State Medical University',
              'Crimea Federal University',
              'Kazan State Medical University',
              'Izhevsk State MBBS University',
              'Volgograd State MBBS University',
              'Syktyvkar State MBBS University',
              'Kursk State MBBS University',
              'Irkutsk State MBBS University',
              'Dagestan State MBBS University',
              'Bashkir State MBBS University',
              'Orel State University',
              'Mari State MBBS University',
              'Nizhny Novgorod MBBS University',
              'Kazan Federal University',
              'First Moscow State MBBS University',
              'Omsk State MBBS University',
              'Novosibirsk State MBBS University',
              'Northern State MBBS University',
              'Ryazan State MBBS University',
              'Perm State MBBS University',
              'Orenburg State MBBS University',
              'Tambov State University',
              'Smolensk State MBBS University',
              'Saint Petersburg MBBS University',
              "People's Friendship University",
              'Tver State MBBS University',
              'Belgorod University',
            ].map((uni, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent hover:shadow-md transition-shadow"
              >
                <FaUniversity className="text-primary shrink-0" />
                <span className="text-sm font-semibold text-gray-700">
                  {uni}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-4">
              MBBS in Russia Fees Structure 2024-25
            </div>
            <p className="text-gray-600">
              Detailed breakdown of tuition and accommodation costs for
              top-ranked universities.
            </p>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mt-4"></div>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-2xl border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-5 font-semibold uppercase text-sm tracking-wider">
                    University Name
                  </th>
                  <th className="p-5 font-semibold uppercase text-sm tracking-wider">
                    Tuition Fee (Approx. INR)
                  </th>
                  <th className="p-5 font-semibold uppercase text-sm tracking-wider text-center">
                    Hostel Fee (USD)
                  </th>
                  <th className="p-5 font-semibold uppercase text-sm tracking-wider text-right">
                    Total Tuition (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  {
                    name: 'Kazan Medical University',
                    inr: '3,21,750',
                    hostel: '600',
                    usd: '4,500',
                  },
                  {
                    name: 'St. Petersburg I.I. Mechnikov State Academy',
                    inr: '3,21,750',
                    hostel: '600',
                    usd: '4,500',
                  },
                  {
                    name: 'Stavropol Medical University',
                    inr: '3,50,350',
                    hostel: '750',
                    usd: '4,900',
                  },
                  {
                    name: 'Tver Medical University',
                    inr: '4,29,000',
                    hostel: '3,000',
                    usd: '6,000',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-200"
                  >
                    <td className="p-5 font-bold text-primary">{row.name}</td>
                    <td className="p-5">₹ {row.inr}</td>
                    <td className="p-5 text-center text-gray-500">
                      $ {row.hostel}
                    </td>
                    <td className="p-5 text-right font-semibold text-accent">
                      $ {row.usd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">
            * Note: Fees are subject to change based on university regulations
            and currency exchange rates. 1 USD = 83-85 INR approximately.
          </p>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-4">
              General Guidelines for International Students
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Russian medical universities offer a blend of high academic
              standards and practical clinical exposure, making it a top
              destination for Indian students.
            </p>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'No Donations',
                desc: 'Admission is strictly based on eligibility. No hidden or unfair donation fees.',
              },
              {
                title: 'Budget Friendly',
                desc: 'Low tuition fees and affordable living costs compared to other European nations.',
              },
              {
                title: 'NMC Approved',
                desc: 'Degrees are recognized by the National Medical Commission and globally by WHO.',
              },
              {
                title: 'Advanced Labs',
                desc: 'Access to state-of-the-art laboratories and modern medical teaching equipment.',
              },
              {
                title: 'Global Recognition',
                desc: 'References and opportunities to work in leading hospitals worldwide after graduation.',
              },
              {
                title: 'Safety & Insurance',
                desc: 'Safe environment for Indian students with mandatory travel and health insurance.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaCheckCircle className="text-accent text-xl shrink-0" />
                  <h3 className="font-bold text-primary text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="text-3xl font-bold text-primary mb-6">
                Intake for MBBS in Russia
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <FaClock className="text-accent" /> Semester System
                  </h4>
                  <p className="text-gray-600 text-sm">
                    The academic year is divided into two comprehensive
                    semesters:
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <span className="block font-bold text-primary">
                        1st Semester
                      </span>
                      <span className="text-xs text-gray-500">Sept – Jan</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <span className="block font-bold text-primary">
                        2nd Semester
                      </span>
                      <span className="text-xs text-gray-500">Feb – June</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'Bilingual medium of instruction (English & Russian)',
                    'Focus on practical skill development and clinical research',
                    'Participation in international medical seminars and events',
                    'Adherence to the globally recognized Tertiary Education System',
                  ].map((list, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700 text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 bg-accent rounded-full shrink-0"></span>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative p-8 bg-primary rounded-3xl overflow-hidden text-white shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FaGraduationCap size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  Research & Methodology
                </h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed relative z-10">
                  Russian medical universities are renowned for their
                  exceptional educational infrastructure. Experienced faculties
                  assist students in medical research endeavors, ensuring that
                  proper research methodologies are emphasized from the very
                  first year.
                </p>
                <div className="flex flex-wrap gap-3 relative z-10">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-semibold">
                    Practical Skills
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-semibold">
                    Global Exposure
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-semibold">
                    Clinical Trials
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-3xl font-bold text-primary mb-4">
              MBBS Syllabus in Russia (6 Years)
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive curriculum designed to meet global medical
              standards, moving from foundational sciences to advanced clinical
              specialties.
            </p>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
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
                  'Russian Language',
                ],
                color: 'border-purple-500',
              },
              {
                year: '3rd Year',
                sem: '5th - 6th Sem',
                subjects: [
                  'Microbiology',
                  'Pathology',
                  'Pharmacology',
                  'Internal Medicine',
                  'Topographical Anatomy',
                  'Operative Surgery',
                  'Radiology',
                ],
                color: 'border-green-500',
              },
              {
                year: '4th Year',
                sem: '7th - 8th Sem',
                subjects: [
                  'Surgery',
                  'Dermatology & Venereology',
                  'Obstetrics & Gynaecology',
                  'Neurology',
                  'Therapy',
                  'Medical Rehabilitation',
                  'Urology',
                  'Public Health',
                  'Pediatrics',
                  'Phthisiology',
                  'Endocrinology',
                ],
                color: 'border-yellow-500',
              },
              {
                year: '5th Year',
                sem: '9th - 10th Sem',
                subjects: [
                  'E.N.T.',
                  'Ophthalmology',
                  'Surgical Gynaecology',
                  'Psychiatry',
                  'Traumatology',
                  'Orthopedics',
                  'Physiotherapy',
                  'Outpatient Therapy',
                  'Gene Therapy',
                  'Infectious Diseases',
                ],
                color: 'border-orange-500',
              },
              {
                year: '6th Year',
                sem: '11th - 12th Sem',
                subjects: [
                  'Oncology & Radiation Therapy',
                  'Occupational Diseases',
                  'Anesthesiology',
                  'Intensive Care Training',
                  'Dentistry',
                  'Clinical Immunology',
                  'General Medical Practice',
                  'Neurosurgery',
                  'Forensic Medicine',
                ],
                color: 'border-red-500',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-8 bg-gray-50 rounded-2xl border-l-8 ${item.color} shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {item.year}
                  </h3>
                  <span className="px-4 py-1 bg-white text-primary text-xs font-bold rounded-full border border-gray-200 uppercase tracking-widest">
                    {item.sem}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.subjects.map((subject, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-white px-3 py-1.5 rounded-lg text-sm text-gray-700 border border-gray-100 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-4">
              Comparison: MBBS in Russia vs. MBBS in India
            </div>
            <p className="text-gray-600">
              Key differences to help you make an informed career choice.
            </p>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mt-4"></div>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-100 bg-white p-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-5 rounded-tl-xl font-bold uppercase text-sm tracking-wider">
                    Features
                  </th>
                  <th className="p-5 font-bold uppercase text-sm tracking-wider text-center bg-primary-light/10">
                    MBBS in Russia
                  </th>
                  <th className="p-5 rounded-tr-xl font-bold uppercase text-sm tracking-wider text-center">
                    MBBS in India
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-50">
                  <td className="p-5 font-bold text-primary bg-gray-50/50">
                    Batch Size
                  </td>
                  <td className="p-5 text-center italic">
                    25 to 30 students per batch (Personalized attention)
                  </td>
                  <td className="p-5 text-center">
                    100 to 120+ students per batch
                  </td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="p-5 font-bold text-primary bg-gray-50/50">
                    Course Duration
                  </td>
                  <td className="p-5 text-center">
                    6 Years (Includes Internship)
                  </td>
                  <td className="p-5 text-center">
                    5.5 Years (Includes Internship)
                  </td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="p-5 font-bold text-primary bg-gray-50/50">
                    Cost & Subsidies
                  </td>
                  <td className="p-5 text-center text-success font-medium">
                    Highly subsidized by the Russian Government.
                  </td>
                  <td className="p-5 text-center">
                    Generally expensive in private sectors; competitive in govt.
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-primary bg-gray-50/50">
                    Fee Structure (Annual)
                  </td>
                  <td className="p-5 text-center">
                    <span className="block text-accent font-bold">
                      ₹2 Lakhs - ₹4 Lakhs
                    </span>
                    <span className="text-xs text-gray-400">
                      (Consistent across most unis)
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <span className="block text-primary font-bold">
                      Govt: ₹40k - ₹2 Lakhs
                    </span>
                    <span className="block text-red-500 font-bold mt-1">
                      Private: ₹10 Lakhs - ₹20 Lakhs
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-4">
              Challenges & Adaptation
            </div>
            <p className="text-gray-600">
              What to expect and how to prepare for your journey.
            </p>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Extreme Weather',
                desc: 'Expect bitterly cold winters. Students are advised to carry heavy thermal wear.',
                icon: '❄️',
              },
              {
                title: 'Language Barrier',
                desc: 'While the course is English, learning basic Russian is essential for clinical practice.',
                icon: '🗣️',
              },
              {
                title: 'Cultural Shift',
                desc: 'Adapting to a new lifestyle and homesickness is common in the first semester.',
                icon: '🌍',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-3xl font-bold mb-10 text-center">
            Scholarships & Financial Aid
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-accent mb-4">
                Government Scholarships
              </h3>
              <p className="text-sm text-blue-100 mb-4">
                The Russian Federation offers full-funded seats covering
                tuition, accommodation, and living stipends for top-tier
                students.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-accent mb-4">
                University Grants
              </h3>
              <p className="text-sm text-blue-100 mb-4">
                Select medical universities provide direct merit-based grants to
                international aspirants to reduce annual tuition burden.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-accent mb-4">
                Loan Assistance
              </h3>
              <p className="text-sm text-blue-100 mb-4">
                We provide complete documentation support for securing education
                loans from nationalized and private banks in India.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Career Paths After MBBS
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: 'Return to India',
                    text: 'Qualify the NEXT/NMC exam to practice as a licensed doctor in India.',
                  },
                  {
                    step: 'Global Practice',
                    text: 'Clear USMLE (USA) or PLAB (UK) to practice in English-speaking nations.',
                  },
                  {
                    step: 'Stay in Russia',
                    text: 'Eligible to practice medicine or pursue specialized PG within the Russian Federation.',
                  },
                  {
                    step: 'PG Abroad',
                    text: 'Degrees are recognized worldwide, allowing for PG opportunities in Europe and beyond.',
                  },
                ].map((path, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm"
                  >
                    <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center font-bold text-primary shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{path.step}</h4>
                      <p className="text-xs text-gray-500">{path.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <FaGlobeAmericas className="text-accent" /> Global Recognition
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'NMC',
                    'WHO',
                    'WFME',
                    'ECFMG',
                    'FAIMER',
                    'Ministry of Education',
                  ].map((org) => (
                    <div
                      key={org}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-xs font-bold text-gray-700"
                    >
                      <FaCheckCircle className="text-success" /> {org}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <p className="text-xs text-red-700 font-medium italic">
                    Note: Russian PG degrees are currently not recognized in
                    India. Students are advised to return for NEXT or pursue PG
                    in the US/UK/Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-primary-light p-10 rounded-3xl border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-8 text-center">
              Important Considerations Before Applying
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Average FMGE Passing Rates',
                'Govt vs Private Status',
                'Availability of Indian Food',
                'Total Student Enrollment',
                'Hostel & Living Costs',
                'USMLE/PLAB Prep Support',
                'Visa Approval Guarantee',
                'Clinical Rotation Quality',
              ].map((info, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                >
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  {info}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </div>
            <p className="text-gray-600">
              Common queries from Indian medical aspirants.
            </p>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mt-4"></div>
          </div>
          <div className="space-y-4">
            {russiaFaq.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Life at Russian Medical Universities
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into the world-class infrastructure and vibrant campus
              environment awaiting international students.
            </p>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mt-6"></div>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </p>
                  <div className="w-10 h-1 bg-accent mt-2 rounded-full"></div>
                </div>
                <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/10 transition-all duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Russia;

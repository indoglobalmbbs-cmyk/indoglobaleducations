import { russia } from '../../../assets/images';
import { russiaUniversities } from '../../../data/russiaUniversities';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaUniversity,
  FaGlobeAmericas,
  FaAward,
} from 'react-icons/fa';
import { FaCheckCircle, FaHospital, FaMoneyBillWave } from 'react-icons/fa';

const Russia = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={russia}
          alt="Russia Education"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Study in Russia
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-200">
            Experience world-class education with affordable tuition fees and
            globally recognized degrees.
          </p>
        </div>
      </section>
      <section className="py-12 bg-white shadow-sm">
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

      {/* --- Why Russia? --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose MBBS in Russia?
          </h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMoneyBillWave />,
              title: 'Affordable Fees',
              desc: 'Low tuition fees and affordable living costs compared to India and Western countries.',
            },
            {
              icon: <FaCheckCircle />,
              title: 'Global Recognition',
              desc: 'Degrees recognized by WHO, NMC (MCI), UNESCO, and ECFMG (USA).',
            },
            {
              icon: <FaHospital />,
              title: 'Modern Infrastructure',
              desc: 'State-of-the-art laboratories and world-class hospitals for clinical practice.',
            },
            {
              icon: <FaGraduationCap />,
              title: 'No Entrance Exam',
              desc: 'Direct admission based on NEET score. No donation or capitation fees required.',
            },
            {
              icon: <FaGlobeAmericas />,
              title: 'Multicultural Environment',
              desc: 'Global exposure with students from over 50+ different countries.',
            },
            {
              icon: <FaCheckCircle />,
              title: 'Simple Visa Process',
              desc: 'Highly streamlined and 100% visa success rate for Indian students via Indo Global.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-accent text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Why Russia Section --- */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Choose Russia for Higher Education?
            </h2>
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
          <div className="md:w-1/2 bg-primary p-8 rounded-2xl text-white">
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-2">
              Top Universities in Russia
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {russiaUniversities.map((uni) => (
              <div
                key={uni.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={russia}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">
                    {uni.name || 'University Name'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {uni.location || 'Russia, Eastern Europe'}
                  </p>
                  <Link
                    to={`/university/${uni.id}`}
                    className="inline-block bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-accent transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Russia;

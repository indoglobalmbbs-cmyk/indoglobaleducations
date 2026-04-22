import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import {
  FaGraduationCap,
  FaHospital,
  FaGlobeAmericas,
  FaUserMd,
  FaCheckCircle,
  FaAward,
  FaChevronCircleLeft,
} from 'react-icons/fa';
import { FaCircleChevronRight } from 'react-icons/fa6';
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  russia,
} from '../../../assets/images';

const Card = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="rounded-xl bg-surface p-8 shadow-md transition-shadow hover:shadow-xl">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
    <p className="text-text-muted">{desc}</p>
  </div>
);

const EuropeanMedicalUniversity = () => {
  const universityStats = [
    { icon: <FaGraduationCap />, label: 'Years of Excellence', value: '80+' },
    { icon: <FaUserMd />, label: 'Global Students', value: '5000+' },
    { icon: <FaHospital />, label: 'Affiliated Hospitals', value: '12+' },
    { icon: <FaGlobeAmericas />, label: 'World Ranking', value: 'Top 500' },
  ];

  const highlights = [
    'MCI/NMC & WHO Recognized',
    'English Medium Curriculum',
    'Modern Research Laboratories',
    'Low Cost of Living & Tuition',
    'High USMLE/FMGE Success Rate',
    'Global Exposure & Internships',
  ];

  const galleryImages = [
    { src: banner1, title: 'University Campus' },
    { src: banner2, title: 'Modern Classrooms' },
    { src: banner3, title: 'Student Life' },
    { src: banner4, title: 'Clinical Training' },
    { src: banner5, title: 'Hostel Facilities' },
    { src: banner6, title: 'Graduation Ceremony' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={200}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: false }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={true}
          className="h-full w-full"
        >
          {[banner1, banner2, banner3, banner4, banner5, banner6].map(
            (img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <div className="mb-4 text-4xl font-bold md:text-6xl">
                      European Medical University
                    </div>
                    <p className="mb-8 max-w-2xl text-lg md:text-xl">
                      Empowering the next generation of global medical
                      professionals with world-class education and clinical
                      training.
                    </p>
                    <button className="rounded-full bg-accent px-8 py-3 font-bold transition-transform hover:scale-105">
                      Apply Now for 2026
                    </button>
                  </div>
                </div>
                <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white/70 hover:text-white transition-colors">
                  <FaChevronCircleLeft size={32} />
                </div>
                <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white/70 hover:text-white transition-colors">
                  <FaCircleChevronRight size={32} />
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </section>
      <section className="relative z-10 -mt-16 px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {universityStats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl bg-surface p-6 shadow-xl border-b-4 border-primary"
            >
              <span className="mb-2 text-3xl text-primary">{stat.icon}</span>
              <span className="text-2xl font-bold text-text">{stat.value}</span>
              <span className="text-sm text-text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10 px-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row items-center">
          <div className="md:w-1/2">
            <div className="mb-10 text-left">
              <div className="text-3xl font-bold text-primary mb-4">
                Study MBBS in Russia at <br />
                <span className="text-accent">
                  European Medical University
                </span>
              </div>
              <div className="h-1.5 w-20 bg-accent rounded-full"></div>
            </div>
            <p className="mb-6 text-text-muted leading-relaxed">
              European Medical University stands as a beacon of medical
              excellence in Russia. Known for its rigorous academic standards
              and state-of-the-art clinical facilities, the university offers an
              MD program (equivalent to MBBS in India) that is fully taught in
              English for international students.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={russia}
              alt="University Campus"
              className="rounded-2xl shadow-2xl transition-hover duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 w-full space-y-12">
            <div>
              <div className="mb-10 text-left">
                <div className="text-3xl font-bold text-primary mb-4">
                  About European Medical University
                </div>
                <div className="h-1.5 w-20 bg-accent rounded-full"></div>
              </div>
              <p className="text-text-muted leading-relaxed mb-4">
                European Medical University is a leading institution for
                medical education in Russia, offering a globally recognized MD
                program. With a focus on practical clinical training and modern
                research, we prepare students for successful careers in
                healthcare worldwide.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card
                icon={<FaAward className="text-3xl text-accent" />}
                title="Global Recognition"
                desc="Approved by NMC (India) and WHO."
              />
              <Card
                icon={<FaHospital className="text-3xl text-accent" />}
                title="Clinical Practice"
                desc="Training in top-tier government hospitals."
              />
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
      <section className="py-10 px-4 bg-primary-light">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:text-left">
            <div className="text-3xl font-bold text-primary mb-4">
              European Medical University
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto md:mx-0 mb-8"></div>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <p className="text-text-muted leading-relaxed">
                  European Medical University has played a pivotal role in
                  the advancement of medical sciences and the education of
                  medical professionals. Consistently ranked among the{' '}
                  <strong>top 10 medical institutes in Russia</strong>, it
                  stands out in the yearly official ratings among the 48 Russian
                  Institutes of Medical Education.
                </p>
                <p className="text-text-muted leading-relaxed">
                  As of 2018, European Medical University is recognized as
                  one of the largest centers for medical research, education,
                  and science. The Academy is renowned for its highly qualified
                  teaching staff, extensive laboratory facilities, and robust
                  clinical base.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent italic text-primary">
                "Its campus includes a complex of buildings specifically
                designed for laboratory studies, lectures, practical classes,
                and research activities."
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-accent" />
              Academic Faculties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'School of General Medicine',
                'School of Stomatology (Dentistry)',
                'School of International Medical Education',
                'School of Pediatrics',
                'School of Postgraduate Studies',
                'School of Pharmacy',
              ].map((faculty, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 bg-surface border border-gray-100 rounded-lg shadow-sm hover:border-accent transition-colors"
                >
                  <FaCheckCircle className="text-success mr-3 shrink-0" />
                  <span className="font-semibold text-text">{faculty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:text-left">
            <div className="text-3xl font-bold text-primary mb-4">
              Required Documents for European Medical University
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto md:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Academic Records',
                detail: '10th and 12th grade marksheets',
              },
              {
                title: 'Transfer Certificate',
                detail: 'Original TC from last school',
              },
              { title: 'Photographs', detail: '6 passport-size photographs' },
              {
                title: 'Migration Certificate',
                detail: 'Issued by the respective board',
              },
              { title: 'Identity Proof', detail: 'Valid Passport (Original)' },
              {
                title: 'Medical Reports',
                detail:
                  'Medical insurance and HIV reports from a recognized hospital',
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="group flex items-start p-6 bg-gray-50 rounded-xl border border-transparent hover:border-accent hover:bg-surface transition-all duration-300 shadow-sm"
              >
                <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-accent/10 transition-colors">
                  <FaCheckCircle className="text-primary group-hover:text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">{doc.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {doc.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-blue-50 rounded-2xl border-l-4 border-primary flex items-center gap-4">
            <div className="hidden sm:block text-primary text-2xl">
              <FaAward />
            </div>
            <p className="text-sm text-primary font-medium">
              <strong>Note:</strong> All documents must be original at the time
              of admission. Translations may be required for specific documents
              as per university regulations.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-primary-light">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="text-3xl font-bold text-primary mb-4">
              Admission Process for European Medical University
            </div>
            <p className="text-text-muted max-w-2xl mx-auto">
              A straightforward 6-step journey to securing your medical future
              in Russia.
            </p>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
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
                title: 'Arrival in Russia',
                desc: 'Pay first-year fees before departure. Provide flight details for airport reception and immigration clearance.',
              },
              {
                step: '06',
                title: 'Commencement',
                desc: 'Register at the university with original documents within 3 days of arrival and start your medical classes.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-8 bg-surface rounded-2xl shadow-sm border-t-4 border-accent hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-5 left-8 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 mt-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="text-left">
                <div className="text-3xl font-bold text-primary mb-4">
                  Research & Library Excellence
                </div>
                <div className="h-1.5 w-20 bg-accent rounded-full"></div>
              </div>
              <p className="text-text-muted leading-relaxed">
                Established in 1936, the European Medical University library
                is a cornerstone of academic life. It houses a massive
                collection of over{' '}
                <strong className="text-primary">440,000 copies</strong>
                of books from both Russian and international authors.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-primary">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <FaGlobeAmericas className="text-accent" />
                  Indian Student Resources
                </h4>
                <p className="text-sm text-text-muted">
                  The Academy maintains a dedicated library with approximately
                  2,000 English-language books by foreign and Indian authors.
                  These resources are specifically curated to meet Indian
                  educational standards, ensuring a familiar learning
                  environment for MBBS students.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-surface rounded-2xl shadow-md border-b-4 border-accent text-center">
                  <FaAward className="text-4xl text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">Gold</div>
                  <p className="text-sm text-text-muted uppercase tracking-wider">
                    Outstanding Research
                  </p>
                </div>
                <div className="p-6 bg-surface rounded-2xl shadow-md border-b-4 border-gray-300 text-center">
                  <div className="text-3xl font-bold text-primary">
                    4 Silver
                  </div>
                  <p className="text-sm text-text-muted uppercase tracking-wider">
                    National Medals
                  </p>
                </div>
                <div className="p-6 bg-surface rounded-2xl shadow-md border-b-4 border-orange-400 text-center">
                  <div className="text-3xl font-bold text-primary">
                    2 Bronze
                  </div>
                  <p className="text-sm text-text-muted uppercase tracking-wider">
                    Scientific Medals
                  </p>
                </div>
                <div className="p-6 bg-primary text-white rounded-2xl shadow-md text-center flex flex-col justify-center">
                  <div className="text-2xl font-bold">6 Exhibitions</div>
                  <p className="text-xs text-blue-100 uppercase tracking-wider">
                    National Achievements
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-center text-text-muted italic">
                Scientific research programs are conducted across all
                departments, driving significant global medical advancements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-primary-light">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="text-left mb-6">
                <div className="text-3xl font-bold text-primary mb-4">
                  Hostel & Accommodation
                </div>
                <div className="h-1.5 w-20 bg-accent rounded-full"></div>
              </div>
              <p className="text-text-muted leading-relaxed mb-6">
                European Medical University provides a comfortable and
                secure living environment across{' '}
                <strong>4 dedicated hostels</strong>, accommodating over 1,840
                international students.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border-l-4 border-success">
                  <FaCheckCircle className="text-success mt-1" />
                  <p className="text-sm text-text">
                    Flat-type rooms with attached kitchens and bathrooms
                    available.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border-l-4 border-primary">
                  <FaCheckCircle className="text-primary mt-1" />
                  <p className="text-sm text-text">
                    Centrally air-conditioned and fully furnished living spaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Indian Cuisine',
                  desc: 'The hostel mess serves authentic Indian food with Hindi and Tamil TV channels available.',
                  icon: '🍲',
                },
                {
                  title: 'Safety & Security',
                  desc: '24/7 CCTV surveillance and police guards. Strict night-out permissions for student safety.',
                  icon: '🛡️',
                },
                {
                  title: 'Connectivity',
                  desc: 'High-speed broadband and Wi-Fi internet access throughout all hostel buildings.',
                  icon: '🌐',
                },
                {
                  title: 'Hygiene & Care',
                  desc: 'Daily professional cleaning services and weekly changes of fresh bed linens.',
                  icon: '✨',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-surface rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col p-8 bg-surface rounded-2xl border border-gray-200 shadow-sm">
              <div className="mb-6">
                <div className="text-2xl font-bold text-primary mb-2 flex items-center gap-3">
                  Rent an Apartment
                </div>
                <div className="h-1 w-16 bg-gray-300 rounded-full"></div>
              </div>
              <p className="text-text-muted leading-relaxed mb-6">
                Renting in Tver offers independence and privacy. Apartments
                generally come
                <span className="font-semibold text-text">
                  {' '}
                  fully furnished
                </span>{' '}
                and equipped with essential appliances like refrigerators,
                microwaves, TVs, and washing machines.
              </p>
              <div className="mt-auto p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-primary italic">
                  <strong>Pro Tip:</strong> We recommend students share
                  apartments with peers to split costs and make off-campus
                  living more affordable.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-8 bg-primary text-white rounded-2xl shadow-xl transform lg:scale-105">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                  Why Hostels are Safer
                </h2>
                <div className="h-1 w-16 bg-accent rounded-full"></div>
              </div>
              <p className="mb-6 text-blue-50">
                For first-time international students, university hostels are
                the most advisable choice. They provide a vital safety net while
                you familiarize yourself with the local culture and language.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" />
                  <div>
                    <span className="font-bold block">Safety Assured</span>
                    <span className="text-sm text-blue-100">
                      24/7 CCTV monitoring and police security for total peace
                      of mind.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" />
                  <div>
                    <span className="font-bold block">
                      Strategic Convenience
                    </span>
                    <span className="text-sm text-blue-100">
                      Located on-campus, within walking distance to academic
                      buildings and amenities.
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-accent font-bold uppercase tracking-widest text-xs">
                  Recommended for First Year Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-primary-light">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-4">
              Student Life at European Medical University
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto"></div>
            <p className="mt-6 text-text-muted max-w-3xl mx-auto leading-relaxed">
              Beyond the rigors of medical training, TSMA offers invaluable life
              experiences. We believe in a holistic approach, providing students
              with the platform to showcase their talents and celebrate their
              diverse heritages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Dedicated Cultural Hubs
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center gap-2 font-medium">
                  • Cultural Centre for Indian Students
                </li>
                <li className="flex items-center gap-2 font-medium">
                  • Cultural Centre for Sri Lankan Students
                </li>
                <li className="flex items-center gap-2 font-medium">
                  • TSMA Youth Centre
                </li>
                <li className="flex items-center gap-2 font-medium">
                  • Office for Pedagogical Work
                </li>
              </ul>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-accent">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Sports & Recreation
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Active clubs for both physical fitness and competitive team
                spirit:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Cricket',
                  'Soccer',
                  'Volleyball',
                  'Table Tennis',
                  'Lawn Tennis',
                  'Triathlon',
                  'Badminton',
                ].map((sport) => (
                  <span
                    key={sport}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-primary"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-primary p-8 rounded-2xl shadow-lg text-white">
              <div className="text-3xl mb-4">🪔</div>
              <h3 className="text-xl font-bold mb-4">Home Away From Home</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-4">
                The Association of Indian Students ensures that festivals like{' '}
                <strong>Holi, Baisakhi, and Diwali</strong> are celebrated with
                grand fervor.
              </p>
              <div className="bg-white/10 p-3 rounded-lg border border-white/20">
                <p className="text-xs italic">
                  "Students are granted official holidays for major festivals to
                  celebrate with their community."
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full">
                <FaAward className="text-3xl text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">
                  Annual International Tournaments
                </h4>
                <p className="text-text-muted">
                  Global participation in Basketball, Football, and more.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-accent hover:text-primary transition-all">
              View Gallery
            </button>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                🕒 Program Duration
              </div>
              <p className="text-text-muted leading-relaxed mb-4">
                The undergraduate MBBS program at Tver spans a total of{' '}
                <strong className="text-primary">6 years</strong>. This duration
                is standardized across Russian medical universities to ensure
                comprehensive training.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-accent">5 Years</div>
                  <div className="text-xs text-text-muted uppercase">
                    Classroom Learning
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-accent">1 Year</div>
                  <div className="text-xs text-text-muted uppercase">
                    Apprenticeship
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-primary text-white rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-accent">
                📅 Admission Intake
              </h3>
              <p className="text-blue-50 mb-6">
                TSMA attracts a diverse global student body from India, Nepal,
                UAE, Africa, and Pakistan. Seats are limited and highly
                competitive.
              </p>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="text-3xl">🚀</div>
                <div>
                  <div className="font-bold">September Intake</div>
                  <p className="text-sm text-blue-100">
                    Apply now to secure your 2026 seat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-primary-light">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-4">
              Affordability & Global Recognition
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cost of Living */}
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-primary text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold text-primary mb-2">
                Cost of Living
              </h4>
              <p className="text-text-muted text-sm mb-4">
                Tver is an affordable city for international students compared
                to other Russian hubs.
              </p>
              <div className="text-2xl font-bold text-success mb-1">
                ~$150 / Month
              </div>
              <p className="text-xs text-text-muted italic">
                *Varies based on individual lifestyle and choices.
              </p>
            </div>
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <FaAward className="text-accent" /> Globally Accepted Degrees
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <p className="text-sm text-text-muted leading-relaxed">
                  Degrees earned at TSMA are recognized by the{' '}
                  <strong>WHO, NMC</strong>, and medical councils worldwide. The
                  curriculum is research-oriented, ensuring students are
                  prepared for global licensing exams.
                </p>
                <div className="space-y-3">
                  {[
                    'NMC (India) Approved',
                    'WHO Recognized',
                    'Top 10 Ranked in Russia',
                    'Research Oriented',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      <FaCheckCircle className="text-success" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-primary rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">
              Academic Excellence at Affordable Costs
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join over 30 Russian medical schools featured in international
              rankings. Start your journey in one of the world's most
              prestigious educational environments.
            </p>
            <button className="bg-accent text-primary px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Get Full 2024-25 Fee Structure
            </button>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="text-3xl font-bold text-primary mb-4">
              Top Medical Universities in Russia
            </div>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto mb-6"></div>
            <p className="text-text-muted max-w-2xl mx-auto">
              Explore other premier medical institutions in Russia recognized
              for their academic excellence and global clinical standards.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <table className="w-full text-left border-collapse bg-surface">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 border-b border-white/10 font-bold uppercase text-sm">
                    University Name
                  </th>
                  <th className="p-4 border-b border-white/10 font-bold uppercase text-sm">
                    University Name
                  </th>
                  <th className="p-4 border-b border-white/10 font-bold uppercase text-sm">
                    University Name
                  </th>
                </tr>
              </thead>
              <tbody className="text-text">
                {[
                  [
                    'Kazan State Medical University',
                    'Crimea Federal University',
                    'Altai State Medical University',
                  ],
                  [
                    'Syktyvkar State Medical University',
                    'Volgograd State Medical University',
                    'Izhevsk State Medical University',
                  ],
                  [
                    'Dagestan State Medical University',
                    'Irkutsk State Medical University',
                    'Kursk State Medical University',
                  ],
                  [
                    'Mari State Medical University',
                    'Orel State University',
                    'Bashkir State Medical University',
                  ],
                  [
                    'First Moscow State Medical University',
                    'Kazan Federal University',
                    'Nizhny Novgorod Medical University',
                  ],
                  [
                    'Northern State Medical University',
                    'Novosibirsk State Medical University',
                    'Omsk State Medical University',
                  ],
                  [
                    'Orenburg State Medical University',
                    'Perm State Medical University',
                    'Ryazan State Medical University',
                  ],
                  [
                    'Saint Petersburg Medical University',
                    'Smolensk State Medical University',
                    'Tambov State University',
                  ],
                  [
                    'Belgorod University',
                    'European Medical University',
                    "People's Friendship University",
                  ],
                ].map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-blue-50/50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    {row.map((univ, colIndex) => (
                      <td
                        key={colIndex}
                        className="p-4 text-sm md:text-base border-r border-gray-100 last:border-0"
                      >
                        <div className="flex items-center gap-2">
                          <FaCheckCircle className="text-success text-xs shrink-0" />
                          <span>{univ}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-sm text-text-muted">
              <strong>Note:</strong> All listed universities are recognized by
              the <strong>WHO</strong> and <strong>NMC</strong>, offering
              English-medium programs for international students.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-primary text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose{' '}
                <span className="text-accent">
                  European Medical University
                </span>{' '}
                for MBBS in Russia?
              </div>
              <div className="h-1.5 w-20 bg-accent rounded-full mb-8"></div>
              <p className="text-blue-100 leading-relaxed mb-6">
                As one of India's top education consultants, we provide
                well-researched assistance and comprehensive counseling to help
                you build a successful career in medicine. With multiple centers
                across the subcontinent, we ensure a high standard of service
                for every student.
              </p>
              <div className="space-y-4">
                {[
                  'Expert Counseling & Research-Backed Guidance',
                  "Supportive 'Family-Like' Assistance at Every Step",
                  'Proven Track Record with Hundreds of Successful Admissions',
                  'End-to-End Support from Selection to Departure',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="font-bold text-accent mb-2">Expert Team</h4>
                <p className="text-sm text-blue-50">
                  Dedicated consultants with years of experience in European
                  medical admissions.
                </p>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl mb-3">📍</div>
                <h4 className="font-bold text-accent mb-2">
                  Pan-India Presence
                </h4>
                <p className="text-sm text-blue-50">
                  Multiple centers across the subcontinent for easy local
                  accessibility.
                </p>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-accent mb-2">
                  Personalized Care
                </h4>
                <p className="text-sm text-blue-100">
                  Working closely with applicants to provide resources for a
                  global career.
                </p>
              </div>

              <div className="p-6 bg-accent text-primary rounded-2xl shadow-xl flex flex-col justify-center text-center">
                <div className="text-3xl font-bold">100s</div>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Students Assisted Yearly
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 bg-white rounded-2xl text-center shadow-2xl">
            <p className="text-primary font-medium italic">
              "Our team works closely with applicants, offering support at every
              step, much like a family."
            </p>
            <button className="mt-6 bg-accent text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/30">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-4">
                The{' '}
                <span className="text-accent">
                  European Medical University
                </span>{' '}
                Advantage
              </div>
              <div className="h-1.5 w-20 bg-accent rounded-full mb-6"></div>
              <p className="text-text-muted leading-relaxed">
                As India’s{' '}
                <span className="font-bold text-primary">
                  #1 Ranked Overseas Education Consultancy
                </span>
                , we specialize in precise guidance for young medical aspirants,
                directing you toward the right global path with transparency and
                expertise.
              </p>
            </div>
            <div className="bg-primary text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="text-4xl font-bold text-accent">#1</div>
              <div className="text-sm font-semibold uppercase tracking-wider leading-tight">
                Ranked Overseas <br /> Consultancy
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'One-Stop Solution',
                desc: 'Comprehensive international course consultation from selection to departure.',
                icon: '🎯',
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock assistance for all your queries and urgent needs.',
                icon: '🕒',
              },
              {
                title: 'Transparency',
                desc: 'Clear, honest, and ethical practices throughout the entire admission process.',
                icon: '💎',
              },
              {
                title: 'Competitive Fees',
                desc: 'Affordable services with convenient EMI options available for processing.',
                icon: '💳',
              },
              {
                title: 'Official Partnerships',
                desc: 'Direct collaborations with renowned NMC-accredited universities abroad.',
                icon: '🤝',
              },
              {
                title: 'Global Destinations',
                desc: 'Expertise in Russia, Georgia, Kazakhstan, Kyrgyzstan, and more.',
                icon: '🌍',
              },
              {
                title: 'English Medium',
                desc: 'Securing admissions in programs taught entirely in English.',
                icon: '📖',
              },
              {
                title: 'Proven Success',
                desc: 'Trusted by thousands of students who have achieved their medical dreams.',
                icon: '🚀',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-accent hover:bg-surface transition-all duration-300"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary-light">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Life at European Medical University
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

export default EuropeanMedicalUniversity;

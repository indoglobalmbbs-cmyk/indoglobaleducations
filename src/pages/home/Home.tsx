import { useNavigate, useOutletContext } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaCircleChevronRight } from 'react-icons/fa6';
import {
  FaChevronCircleLeft,
  FaGraduationCap,
  FaUserCheck,
  FaMoneyBillWave,
  FaUniversity,
  FaCheckCircle,
  FaClipboardCheck,
  FaHandHoldingHeart,
  FaLanguage,
  FaBookMedical,
  FaRoute,
  FaWallet,
  FaUserEdit,
  FaPassport,
  FaHotel,
  FaUsers,
  FaUserGraduate,
  FaStar,
  FaAward,
} from 'react-icons/fa';
import { slides } from '../../data/slideData';
import { banner1 } from '../../assets/images';
import ContactReason from '../../components/home/ContactReason';
import StatCard from '../../components/home/StatCard';
import TestimonialCard from '../../components/home/TestimonialCard';
import BlogCard from '../../components/home/BlogCard';
import ServiceFeature from '../../components/home/ServiceFeature';
import MythCard from '../../components/home/MythCard';
import FAQItem from '../../components/home/FAQItem';

const Home = () => {
  const navigate = useNavigate();
  const { openEnquiry } = useOutletContext();
  
  return (
    <div className="w-full">
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
        className="h-[500px] md:h-[650px] lg:h-[700px] group"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/65" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 max-w-2xl font-light opacity-90">
                {slide.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={openEnquiry}
                  className="bg-primary border-2 border-primary hover:bg-accent hover:border-accent text-white px-9 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-xl"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white/10 hover:bg-white text-white hover:text-primary px-9 py-3.5 rounded-full font-semibold border border-white/30 transition-all duration-300 backdrop-blur-md"
                >
                  View Programs
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
        ))}
      </Swiper>
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={banner1}
                  alt="Students Studying"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm uppercase tracking-wider">
                  Years of Excellence
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary-light text-primary rounded-full text-sm font-bold tracking-wide uppercase">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
                We're <span className="text-primary">#1 MBBS</span> Educational
                Consultants
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Indo Global Education Overseas is dedicated to bridging the gap
                between your dreams and world-class education. We specialize in
                securing admissions to top-tier universities globally, ensuring
                a smooth transition for your medical and professional journey.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-light rounded-lg text-primary">
                    <FaGraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text">Global Partners</h4>
                    <p className="text-sm text-text-muted text-pretty">
                      Affiliated with top medical institutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-light rounded-lg text-primary">
                    <FaUserCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text">Expert Guidance</h4>
                    <p className="text-sm text-text-muted text-pretty">
                      Personalized path for every student.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => navigate('/about')}
                  className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:-translate-y-1"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary-light/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-3xl font-bold text-primary mb-4">
              Why Study MBBS Abroad?
            </div>
            <p className="text-text-muted text-lg">
              Indo Global Education Overseas provides comprehensive support and
              compelling reasons to start your medical career at prestigious
              international institutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-success/10 text-success rounded-xl flex items-center justify-center mb-6">
                <FaMoneyBillWave size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                Low Tuition Fees
              </h3>
              <p className="text-text-muted leading-relaxed">
                Forget heavy financial burdens. Experience affordable fee
                structures and minimal living costs without compromising on
                quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-info/10 text-info rounded-xl flex items-center justify-center mb-6">
                <FaUniversity size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                Top Medical Universities
              </h3>
              <p className="text-text-muted leading-relaxed">
                Gain access to high-ranked international universities. Our
                mentors ensure you secure a seat in institutions with global
                prestige.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <FaCheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                NMC/WHO Approved
              </h3>
              <p className="text-text-muted leading-relaxed">
                We only partner with universities authorized by the WHO and NMC,
                ensuring your degree is recognized worldwide and in India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-warning/10 text-warning rounded-xl flex items-center justify-center mb-6">
                <FaClipboardCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                No Entrance Exam
              </h3>
              <p className="text-text-muted leading-relaxed">
                Skip the stress of competitive entrance exams. Focus on meeting
                the basic eligibility criteria and start your journey directly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <FaHandHoldingHeart size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                Zero Donations
              </h3>
              <p className="text-text-muted leading-relaxed">
                Transparent processing with no hidden charges or capitation
                fees. You pay only what the university requires.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                <FaLanguage size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                English Medium
              </h3>
              <p className="text-text-muted leading-relaxed">
                Overcome language barriers. Courses are taught entirely in
                English, making it easier for international students to excel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-surface overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-24">
              <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold tracking-wide uppercase mb-4">
                Expert Guidance
              </div>
              <div className="text-4xl md:text-5xl font-bold text-text mb-6">
                Why should you <span className="text-primary">contact us?</span>
              </div>
              <p className="text-text-muted text-lg mb-8">
                Navigating international admissions can be overwhelming. Our
                counselors clear the fog, providing a structured roadmap to your
                medical degree.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="hidden lg:block bg-primary text-white px-8 py-4 rounded-full font-bold shadow-blue-900/20 shadow-lg hover:bg-secondary transition-all"
              >
                Book Free Consultation
              </button>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <ContactReason
                step="01"
                icon={FaBookMedical}
                title="University Selection"
                desc="We handpick NMC-approved universities with proven track records and experienced faculty to ensure you get the best medical education."
              />
              <ContactReason
                step="02"
                icon={FaRoute}
                title="Career Planning"
                desc="Our support doesn't end at admission. We guide you through post-graduation options and licensing exams to secure your global medical career."
              />
              <ContactReason
                step="03"
                icon={FaWallet}
                title="Financial Planning"
                desc="From managing tuition fees to airfare and daily living costs, we help families budget effectively so financial stress doesn't hinder dreams."
              />
              <ContactReason
                step="04"
                icon={FaUserEdit}
                title="Customised Solutions"
                desc="Every student is unique. We analyze your academic history and goals to provide tailored documentation and university matching."
              />
              <ContactReason
                step="05"
                icon={FaPassport}
                title="Visa & Admission"
                desc="We simplify the complex paperwork. Our team assists with every step of the visa application and university documentation process."
              />
              <ContactReason
                step="06"
                icon={FaHotel}
                title="Travel & Stay"
                desc="We take care of the logistics—from booking flight tickets to finding safe, comfortable accommodations near your university campus."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="bg-primary py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard
                icon={FaAward}
                value="11+"
                label="Counsellors"
                subtext="Expert Career Mentors"
              />
              <StatCard
                icon={FaStar}
                value="12+"
                label="Years"
                subtext="Of Excellence"
              />
              <StatCard
                icon={FaUserGraduate}
                value="270+"
                label="Enrolments"
                subtext="Successful Admissions"
              />
              <StatCard
                icon={FaUsers}
                value="1200+"
                label="Testimonials"
                subtext="Happy Students & Parents"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase mb-4">
              What They Say
            </div>
            <div className="text-3xl font-bold text-text mb-4">
              Listen to our{' '}
              <span className="text-primary">Successfully Placed</span> Students
            </div>
            <p className="text-text-muted text-lg">
              Real stories from students who achieved their dreams of studying
              medicine abroad with Indo Global Education Overseas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Nishant Kharb"
              location="Haryana"
              text="I am grateful to Indo Global Education to help me get admission in Irkutsk State Medical University, Russia. I strongly recommend them as the efficient faculty booked my seat for the course and helped me find accommodation."
            />
            <TestimonialCard
              name="Sanskar Singh"
              location="Uttar Pradesh"
              text="My dreams came true! I wanted to study MBBS in Georgia, but I was unable to complete my application due to proper guidance. The team of Indo Global Education guided me well and helped me study MBBS in Ivane Javakhishvili Tbilisi State University."
            />
            <TestimonialCard
              name="Harsh Gautam"
              location="Haryana"
              text="Are you clueless about how to join MBBS courses in Georgia? Then contact Ekalavya in the first place. The best educational consultants helped me finish my MBBS in Georgia from Akaki Tsereteli State University."
            />
          </div>
        </div>
      </section>
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-bold tracking-wide uppercase mb-4">
                Our Latest Blog
              </div>
              <div className="text-3xl md:text-5xl font-bold text-text">
                Check out our <span className="text-primary">Latest posts</span>{' '}
                on Studying Abroad
              </div>
            </div>
            <button
              onClick={() => navigate('/blog')}
              className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition-all shrink-0"
            >
              View All Posts
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BlogCard
              title="PG in China"
              date="January 07, 2026"
              desc="Are you planning to pursue a Master’s Degree from abroad? Indo Global Education Overseas will shed a light on this dream of yours."
            />
            <BlogCard
              title="Eligibility For MBBS in China"
              date="January 07, 2026"
              desc="Here you will find all the eligibility criteria for MBBS in China for the upcoming session. Start your medical journey now."
            />
            <BlogCard
              title="Options after MBBS in Abroad"
              date="January 07, 2026"
              desc="Have you completed your MBBS in Abroad? Are you looking for the best career paths and licensing exam options?"
            />
            <BlogCard
              title="Big Relief for KROK Failed Students"
              date="January 07, 2026"
              desc="KROK Examination in Ukraine holds immense status. Discover the new updates and pathways for students looking to clear this hurdle."
            />
          </div>
        </div>
      </section>
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-light/30 -skew-x-12 translate-x-1/2 -z-0 hidden lg:block" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-accent text-white rounded-md text-xs font-bold tracking-widest uppercase mb-6">
                Expert Advice
              </div>
              <div className="text-3xl md:text-5xl font-bold text-text mb-6 leading-tight">
                How to choose the <br />
                <span className="text-primary font-extrabold underline decoration-accent/30">
                  Best Medical University
                </span>{' '}
                Abroad?
              </div>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                As one of India's most reputed and prestigious MBBS consultants,
                we pave the way for your successful future. We don't just find a
                college; we find the <strong>right</strong> college for your
                career.
              </p>
              <div className="space-y-6 mb-10">
                <ServiceFeature
                  title="Global Recognition"
                  desc="We help you get through NMC (National Medical Commission) and WHO approved universities to ensure your degree is valid in India and worldwide."
                />
                <ServiceFeature
                  title="End-to-End Paperwork"
                  desc="From complex visa applications to university documentation, you can rely on our expert team to handle the heavy lifting."
                />
                <ServiceFeature
                  title="Campus & Accommodation"
                  desc="We successfully alleviate your worries about living arrangements by securing safe, comfortable, and student-friendly accommodation."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-primary hover:bg-secondary text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
                >
                  Contact Consultant <FaCircleChevronRight />
                </button>
                <div className="flex items-center gap-3 px-4 py-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-text-muted">
                    <span className="text-primary font-bold">5000+</span>{' '}
                    Students Assisted
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary p-8 rounded-3xl text-white transform hover:-translate-y-2 transition-transform shadow-2xl">
                    <FaUniversity size={40} className="mb-4 text-accent" />
                    <h4 className="text-xl font-bold mb-2">Prestige</h4>
                    <p className="text-white/70 text-sm">
                      Access to Ivy-league equivalent medical schools.
                    </p>
                  </div>
                  <div className="bg-surface p-8 rounded-3xl border border-primary/10 shadow-xl transform hover:-translate-y-2 transition-transform">
                    <FaPassport size={40} className="mb-4 text-primary" />
                    <h4 className="text-xl font-bold mb-2 text-text">
                      Easy Visa
                    </h4>
                    <p className="text-text-muted text-sm">
                      99.9% Visa success rate for our students.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-surface p-8 rounded-3xl border border-primary/10 shadow-xl transform hover:-translate-y-2 transition-transform">
                    <FaHandHoldingHeart
                      size={40}
                      className="mb-4 text-primary"
                    />
                    <h4 className="text-xl font-bold mb-2 text-text">
                      Support
                    </h4>
                    <p className="text-text-muted text-sm">
                      24/7 on-ground support in foreign countries.
                    </p>
                  </div>
                  <div className="bg-accent p-8 rounded-3xl text-white transform hover:-translate-y-2 transition-transform shadow-2xl">
                    <FaBookMedical size={40} className="mb-4 text-white" />
                    <h4 className="text-xl font-bold mb-2">Quality</h4>
                    <p className="text-white/90 text-sm">
                      World-class labs and clinical exposure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-error/10 text-error rounded-full text-sm font-bold tracking-wide uppercase mb-4">
              Debunking Doubts
            </div>
            <div className="text-3xl md:text-5xl font-bold text-text mb-4">
              Top 5 <span className="text-primary">Myths</span> about studying
              MBBS abroad
            </div>
            <p className="text-text-muted text-lg">
              Don't let misinformation hold you back. We're here to clear the
              air about international medical education.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <MythCard
              icon={FaWallet}
              myth="It is extremely expensive"
              reality="Contrary to popular belief, studying MBBS abroad is often more economical than private colleges in India. We connect you to renowned universities with minimal tuition fees."
            />
            <MythCard
              icon={FaHotel}
              myth="Expensive living & food"
              reality="Living and food costs abroad are surprisingly affordable. We help you find inexpensive, high-quality lodging facilities at the best student locations."
            />
            <MythCard
              icon={FaUserCheck}
              myth="Safety is a major concern"
              reality="International campuses are highly secure. We only facilitate admissions in the safest countries with established track records for international student welfare."
            />
            <MythCard
              icon={FaClipboardCheck}
              myth="High risk of fraud cases"
              reality="With Indo Global Education, your investment is safe. We maintain transparent, authentic partnerships with universities to ensure a 100% fraud-free admission process."
            />
            <div className="lg:col-span-2">
              <MythCard
                icon={FaHandHoldingHeart}
                myth="Homesickness will ruin the experience"
                reality="While initial adjustment takes time, you'll join a vibrant community of Indian students. Between college life and new friends, you'll build a 'home away from home' quickly."
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-text-muted italic text-sm">
              Still have questions? Our counselors are ready to give you the
              facts.
              <button
                onClick={() => navigate('/contact')}
                className="ml-2 text-primary font-bold underline hover:text-accent transition-colors"
              >
                Speak to an Expert
              </button>
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="inline-block px-4 py-1.5 bg-primary-light text-primary rounded-full text-sm font-bold tracking-wide uppercase mb-4">
                  Common Inquiries
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
                  Frequently Asked{' '}
                  <span className="text-primary">Questions</span>
                </h2>
                <p className="text-text-muted text-lg mb-8">
                  Get clear, concise answers to the most common queries about
                  pursuing your medical degree in international waters.
                </p>
                <div className="p-6 bg-primary rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Still have questions?</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Our dedicated counselors are just a phone call away to help
                    you with personalized guidance.
                  </p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full bg-accent hover:bg-white hover:text-primary text-white py-3 rounded-xl font-bold transition-all shadow-lg"
                  >
                    Request a Call Back
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-white rounded-3xl p-4 md:p-8 shadow-xl shadow-primary/5 border border-primary/5">
              <FAQItem
                question="Why do Indian students opt for MBBS abroad?"
                answer="There are a limited number of seats available for medical students in India. Additionally, the fees in Indian private medical colleges are often significantly higher than those of prestigious international institutes."
              />
              <FAQItem
                question="What are the basic eligibility criteria for MBBS abroad?"
                answer="Candidates generally need a minimum of 50% in Class 12 (Physics, Chemistry, and Biology). For SC/ST/OBC candidates, the requirement is 45%. A valid NEET score is also mandatory."
              />
              <FAQItem
                question="Is NEET a necessity for studying MBBS abroad?"
                answer="Yes, clearing the National Eligibility cum Entrance Test (NEET) is a mandatory requirement set by the NMC for Indian students to practice medicine in India after their foreign degree."
              />
              <FAQItem
                question="What is the duration of MBBS courses abroad?"
                answer="Most international medical programs last for 5 years of academic study, followed by a 1-year mandatory internship program, totaling 6 years."
              />
              <FAQItem
                question="What is the standard fee structure for MBBS courses abroad?"
                answer="Tuition fees typically range between $20,000 and $50,000 for the entire course. Note that living, food, and hostel expenses are separate and vary by country."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

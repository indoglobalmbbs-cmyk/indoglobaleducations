import { useNavigate } from 'react-router-dom';
import {
  FaBullseye,
  FaEye,
  FaHistory,
  FaHandshake,
  FaUserTie,
  FaGlobeAmericas,
  FaAward,
  FaChevronRight,
} from 'react-icons/fa';
import { about, about1 } from '../../assets/images';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-surface">
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={about}
            alt="Medical Education Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-accent mb-6 font-semibold tracking-wide uppercase text-sm">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <FaChevronRight size={10} className="text-white/50" />
              <span className="text-white/70">About Us</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Empowering <br />
              <span className="text-accent underline decoration-white/20 underline-offset-8">
                Global Doctors
              </span>
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl max-w-lg border-l-4 border-accent pl-6">
              Bridging the gap between Indian aspirations and international
              medical excellence with 12+ years of trust.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={about1}
                  alt="Education Consultancy"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[250px]">
                <div className="flex items-center gap-4 mb-2 text-primary">
                  <FaHistory size={30} />
                  <span className="text-3xl font-bold">12+</span>
                </div>
                <p className="text-text-muted font-semibold leading-tight">
                  Years of expertise in overseas medical admissions.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary-light text-primary rounded-full text-sm font-bold uppercase">
                Established Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Your Trusted Partner in <br />
                <span className="text-primary">Global Medical Education</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Indo Global Education Overseas was founded with a singular
                vision: to democratize access to high-quality medical education.
                We understand that for many Indian students, securing a seat in
                a domestic medical college is a steep uphill battle due to high
                competition and exorbitant costs.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Since our inception, we have successfully guided thousands of
                students to NMC-approved universities in Russia, Georgia,
                Kazakhstan, and beyond. We don't just facilitate admissions; we
                build careers.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xl border border-primary/10 bg-primary-light/20">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <FaHandshake /> Integrity
                  </h4>
                  <p className="text-sm text-text-muted">
                    100% transparent fee structure and direct university
                    dealings.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-primary/10 bg-primary-light/20">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <FaAward /> Excellence
                  </h4>
                  <p className="text-sm text-text-muted">
                    A track record of placing students in top-tier global
                    medical schools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <FaBullseye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">Our Mission</h3>
              <p className="text-text-muted leading-relaxed">
                To simplify the complex journey of studying abroad by providing
                expert counseling, transparent documentation, and lifelong
                support, ensuring every aspiring doctor reaches their full
                potential without financial or administrative hurdles.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-accent hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                <FaEye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">Our Vision</h3>
              <p className="text-text-muted leading-relaxed">
                To be India's most reliable bridge to global medical education,
                creating a world where geographical borders and financial
                constraints never stop a dedicated student from serving humanity
                as a physician.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary-light text-primary rounded-full text-sm font-bold uppercase mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
              How Do We Help?
            </h2>
            <p className="text-text-muted text-lg">
              An MBBS degree abroad promises unmatched scope and opportunities.
              At Indo Global, we aim to make the best out of your stay and
              learning with our exclusive services. Because we are there not
              only for your admission but also for your graduation!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 rounded-3xl bg-white border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <FaHandshake size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-text">
                100% Admission Support
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                From university selection to all the paperwork, we offer you
                complete support for your admission process.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-white border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <FaGlobeAmericas size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-text">
                Visa & Travel Arrangements
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Hassle-free Visa procurement and best-fared air travels,
                ensuring you get maximum benefits throughout the course.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-white border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <FaAward size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-text">
                FMGE/NExT Coaching
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Attend FMGE/NExT Coaching during your study within the
                university and get the best career guidance from experts.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-white border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <FaUserTie size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-text">
                Hostels, Canteens & More
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Get comfy hostels, Indian canteens, and many other benefits
                during your stay. We ensure you feel at home.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-accent rounded-full text-sm font-bold uppercase">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                What Do Our <br />
                <span className="text-accent">Students Say About Us?</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                At Indo Global, we are dedicated to bringing you one step closer
                to your dream of becoming a successful doctor. Hear what our
                students have to say about their journey and experience with us!
              </p>
              <div className="flex gap-12 pt-4">
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-accent mb-1">
                    25+
                  </div>
                  <div className="text-white/70 font-medium uppercase tracking-wider text-sm">
                    Universities
                  </div>
                </div>
                <div className="w-px h-16 bg-white/20"></div>
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-accent mb-1">
                    5000+
                  </div>
                  <div className="text-white/70 font-medium uppercase tracking-wider text-sm">
                    Current Students
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-3xl -rotate-3"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
                <div className="flex text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaAward key={i} size={20} className="fill-current" />
                  ))}
                </div>
                <p className="text-text text-xl italic leading-relaxed mb-8">
                  "Indo Global made the entire process so smooth. From choosing
                  the right university in Russia to helping me with my visa,
                  they were with me at every step. I'm now happily pursuing my
                  MBBS!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    S
                  </div>
                  <div>
                    <h5 className="font-bold text-text">Sneha Kapoor</h5>
                    <p className="text-text-muted text-sm font-medium">
                      MBBS Student, Russia
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-primary text-white rounded-full text-sm font-bold uppercase mb-4">
                Stay Up-To-Date!
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
                What’s New Today?
              </h2>
              <p className="text-text-muted text-lg">
                Know what's happening around the world in the field of medicine
                and medical education by updating yourself with the latest
                blogs.
              </p>
            </div>
            <button
              onClick={() => navigate('/news')}
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Posts
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-lg text-xs font-bold">
                  Russia
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-primary font-semibold text-sm mb-3 flex items-center gap-2">
                  <FaHistory size={14} /> April 15, 2026
                </span>
                <h3 className="text-xl font-bold text-text mb-3 hover:text-primary cursor-pointer transition-colors">
                  Common Admission Mistakes to Avoid for MBBS in Russia
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                  Becoming a doctor demands not just academic discipline and
                  hard work, but also proper research before you apply...
                </p>
                <div className="mt-auto">
                  <a
                    href="/news"
                    className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-lg text-xs font-bold">
                  Regulations
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-primary font-semibold text-sm mb-3 flex items-center gap-2">
                  <FaHistory size={14} /> April 13, 2026
                </span>
                <h3 className="text-xl font-bold text-text mb-3 hover:text-primary cursor-pointer transition-colors">
                  FMGL Regulations 2021 Explained for Indian MBBS Abroad
                  Students
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                  Acquiring an MBBS degree abroad has now become a viable and
                  smart option for many Indian students who...
                </p>
                <div className="mt-auto">
                  <a
                    href="/news"
                    className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-lg text-xs font-bold">
                  NMC Update
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-primary font-semibold text-sm mb-3 flex items-center gap-2">
                  <FaHistory size={14} /> April 11, 2026
                </span>
                <h3 className="text-xl font-bold text-text mb-3 hover:text-primary cursor-pointer transition-colors">
                  NMC Rules for MBBS Abroad in 2026: A Complete Breakdown
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                  The university in which you pursue your MBBS can either make
                  or break your career. Hence, there are...
                </p>
                <div className="mt-auto">
                  <a
                    href="/news"
                    className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

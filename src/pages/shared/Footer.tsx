import { Link } from 'react-router-dom';
import { logo } from '../../assets/images';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-10 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white p-1">
                <img
                  src={logo}
                  alt="IndoGlobal Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Indo Global Education
              </span>
            </Link>
            <p className="text-primary-light text-md leading-relaxed">
              Empowering students to achieve their dreams of international
              medical education. Specializing in MBBS admissions across Russia,
              Armenia, and Georgia.
            </p>
            <div className="flex gap-3">
              {[
                FaFacebookF,
                FaXTwitter,
                FaLinkedinIn,
                FaYoutube,
                FaInstagram,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit text-white">
              Quick Links
            </h4>
            <ul className="space-y-4 text-md text-primary-light">
              {[
                { name: 'About Our Agency', path: '/about' },
                { name: 'MBBS in Russia', path: '/russia' },
                { name: 'MBBS in Armenia', path: '/armenia' },
                { name: 'MBBS in Georgia', path: '/georgia' },
                { name: 'Student Gallery', path: '/photosGallery' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 hover:text-accent transition-colors duration-300"
                  >
                    <FaAngleRight
                      className="text-accent transition-transform duration-300 group-hover:rotate-90"
                      size={14}
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit text-white">
              Resources
            </h4>
            <ul className="space-y-4 text-md text-primary-light">
              {[
                { name: 'Latest Education Blogs', path: '/blog' },
                { name: 'Admission News', path: '/news' },
                { name: 'Frequently Asked Questions', path: '/faqs' },
                {
                  name: 'Download Brochure 2026',
                  path: '/brochure-2026.pdf',
                  isDownload: true,
                },
                { name: 'Work with Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  {link.isDownload ? (
                    <a
                      href={link.path}
                      className="group flex items-center gap-2 hover:text-accent transition-colors duration-300"
                    >
                      <FaAngleRight
                        className="text-accent transition-transform duration-300 group-hover:rotate-90"
                        size={14}
                      />
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 hover:text-accent transition-colors duration-300"
                    >
                      <FaAngleRight
                        className="text-accent transition-transform duration-300 group-hover:rotate-90"
                        size={14}
                      />
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit">
              Contact Us
            </h4>
            <ul className="space-y-4 text-md text-primary-light">
              <li className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-accent" />
                <span>
                  123 Education Hub, Metro Pillar 45,
                  <br />
                  New Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent" />
                <a href="tel:+919060722799" className="hover:text-accent">
                  +91 9060722799
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <a
                  href="mailto:aditya822003@gmail.com"
                  className="hover:text-accent"
                >
                  aditya822003@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-md text-primary-light">
          <p>© {currentYear} Indo Global Education. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

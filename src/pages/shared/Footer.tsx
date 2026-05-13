import { Link } from 'react-router-dom';
import { logo } from '../../assets/images';
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { openConsentPreferences } from '../../lib/consent';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      label: 'Facebook',
      Icon: FaFacebookF,
      href: 'https://www.facebook.com/p/Indo-Global-Education-Service-PvtLtd-100068973894679/',
    },
    {
      label: 'Instagram',
      Icon: FaInstagram,
      href: 'https://www.instagram.com/indoglobaleducationservice/',
    },
  ];

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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <social.Icon size={16} />
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
                { name: 'MBBS in India', path: '/mbbs-in-india' },
                { name: 'MBBS in Russia', path: '/mbbs-in-russia' },
                { name: 'MBBS in Armenia', path: '/mbbs-in-armenia' },
                { name: 'MBBS in Georgia', path: '/mbbs-in-georgia' },
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
              Privacy & Ads
            </h4>
            <ul className="space-y-4 text-md text-primary-light">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Cookie Policy', path: '/cookie-policy' },
                { name: 'Terms & Conditions', path: '/terms-and-conditions' },
                { name: 'Disclaimer', path: '/disclaimer' },
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
              <li>
                <button
                  type="button"
                  onClick={openConsentPreferences}
                  className="group flex items-center gap-2 hover:text-accent transition-colors duration-300"
                >
                  <FaAngleRight
                    className="text-accent transition-transform duration-300 group-hover:rotate-90"
                    size={14}
                  />
                  <span>Cookie Preferences</span>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit">
              Contact Us
            </h4>
            <ul className="space-y-4 text-md text-primary-light">
              <li className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-accent shrink-0" />
                <address className="not-italic">
                  <a
                    href="https://maps.app.goo.gl/CroHchUx4BJmJdCr9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    Ground Floor, Hotel Biggboss International, NH4,
                    Chitradurga, Karnataka, India - 577501
                  </a>
                </address>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent" />
                <a href="tel:+917090000502" className="hover:text-accent">
                  +91 7090000502
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <a
                  href="mailto:Indoglobaledu.official@gmail.com"
                  className="hover:text-accent"
                >
                  Indoglobaledu.official@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary mb-8" />
        <div className="mb-6 grid gap-4 rounded-2xl bg-white/5 p-4 text-sm text-primary-light md:grid-cols-3">
          <p>
            Optional advertising technologies for Meta ads and Google ads
            should only run after consent where required.
          </p>
          <p>
            Google and other third-party vendors may use cookies or device
            identifiers for measurement and remarketing when enabled.
          </p>
          <p>
            WhatsApp is offered as a contact channel. Conversations initiated
            there are also subject to WhatsApp and Meta policies.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-md text-primary-light">
          <p>© {currentYear} Indo Global Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

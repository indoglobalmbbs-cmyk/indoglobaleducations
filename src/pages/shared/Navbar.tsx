import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/images';
import {
  FaBarsStaggered,
  FaChevronDown,
  FaInstagram,
  FaXTwitter,
  FaPinterest,
} from 'react-icons/fa6';
import {
  FaTimesCircle,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
import Submenu from '../../components/Submenu';
import { russiaUniversities } from '../../data/russiaUniversities';
import { armeniaUniversities } from '../../data/armeniaUniversities';
import { georgiaUniversities } from '../../data/georgiaUniversities';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUnivOpen, setIsUnivOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isRussiaOpen, setIsRussiaOpen] = useState(false);
  const [isArmeniaOpen, setIsArmeniaOpen] = useState(false);
  const [isGeorgiaOpen, setIsGeorgiaOpen] = useState(false);

  const updates = [
    'Admissions open for Fall 2026!',
    'New partnership with UK Universities announced.',
    'Join our webinar on Global Education trends this Friday.',
  ];

  return (
    <header className="bg-primary-light text-primary p-4">
      <div className="bg-primary text-white py-1 rounded-ss-2xl rounded-ee-2xl px-4 flex flex-wrap justify-between items-center relative">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+91-9060722799"
            className="group flex items-center gap-2 hover:text-accent transition-all duration-300"
          >
            <div className="p-1 rounded-full group-hover:bg-accent group-hover:text-primary">
              <FaPhoneAlt className="text-md" />
            </div>
            <span className="text-sm font-medium hidden sm:inline">
              Student Helpline: +91 9060722799
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="mailto:aditya822003@gmail.com"
            className="group flex items-center gap-2 hover:text-accent transition-all duration-300"
          >
            <div className="p-1 rounded-full group-hover:bg-accent group-hover:text-primary">
              <FaEnvelope className="text-lg" />
            </div>
            <span className="text-sm font-medium hidden md:inline">
              Email Id: aditya822003@gmail.com
            </span>
          </a>
          <div className="flex items-center gap-3">
            <span className="text-md tracking-wider mr-2 hidden lg:inline">
              Follow Us
            </span>
            <div className="flex items-center gap-1">
              {[
                { Icon: FaFacebookF, href: 'https://facebook.com' },
                { Icon: FaXTwitter, href: 'https://twitter.com' },
                { Icon: FaLinkedinIn, href: 'https://linkedin.com' },
                { Icon: FaYoutube, href: 'https://youtube.com' },
                { Icon: FaPinterest, href: 'https://pinterest.com' },
                { Icon: FaInstagram, href: 'https://instagram.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 text-md"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center w-full px-1">
        <Link to="/" className="flex items-center -ml-6 -mt-8">
          <div className="h-30 w-30 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="IndoGlobal Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-2xl pt-8 -ml-4 font-bold tracking-tight text-primary whitespace-nowrap">
            Indo Global Education
          </span>
        </Link>
        <button
          className="md:hidden text-xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimesCircle /> : <FaBarsStaggered />}
        </button>
        <ul
          className={`fixed md:static top-0 right-0 h-screen md:h-auto w-70 md:w-auto bg-primary-light md:bg-transparent flex flex-col md:flex-row gap-4 md:gap-6 font-medium px-4 md:px-0 pt-19 md:pt-0 whitespace-nowrap transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full items-center'
          } md:translate-x-0 md:flex`}
        >
          <li className="md:hidden flex flex-col mt-2">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xl font-bold tracking-wider">
                Indo Global Education
              </span>
            </div>
            <div className="h-0.5 w-full bg-primary" />
          </li>
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="relative group hover:text-accent transition-colors pb-1"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="relative group hover:text-accent transition-colors pb-1"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setIsUnivOpen(true)}
            onMouseLeave={() => setIsUnivOpen(false)}
          >
            <button
              onClick={() => setIsUnivOpen(!isUnivOpen)}
              className="relative group hover:text-accent transition-colors flex items-center gap-1 text-left pb-1"
            >
              University
              <FaChevronDown
                className={`text-md transition-transform duration-200 ${
                  isUnivOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <ul
              className={`md:absolute left-0 mt-2 w-max bg-primary-light text-primary rounded-lg shadow-lg transition-all duration-200 ${isUnivOpen ? 'block opacity-100' : 'hidden md:block md:opacity-0 md:invisible'}`}
            >
              <li
                className="relative group/russia"
                onMouseEnter={() => setIsRussiaOpen(true)}
                onMouseLeave={() => setIsRussiaOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsRussiaOpen(!isRussiaOpen)}
                  className="relative group/item w-full block px-4 py-2 hover:bg-primary hover:text-accent transition-colors flex items-center justify-between rounded-t-lg"
                >
                  <span className="relative z-10 text-left">
                    Universities of Russia
                  </span>
                  <FaChevronDown
                    className={`text-md transition-transform duration-200 ${
                      isRussiaOpen ? '-rotate-90' : 'rotate-0'
                    }`}
                  />
                  <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                </button>
                <Submenu
                  items={russiaUniversities}
                  isOpen={isRussiaOpen}
                  onItemClick={() => setIsMenuOpen(false)}
                />
              </li>
              <li
                className="relative group/armenia"
                onMouseEnter={() => setIsArmeniaOpen(true)}
                onMouseLeave={() => setIsArmeniaOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsArmeniaOpen(!isArmeniaOpen)}
                  className="relative group/item w-full block px-4 py-2 hover:bg-primary hover:text-accent transition-colors gap-1 flex items-center justify-between"
                >
                  <span className="relative z-10 text-left">
                    Universities of Armenia
                  </span>
                  <FaChevronDown
                    className={`text-md transition-transform duration-200 ${
                      isArmeniaOpen ? '-rotate-90' : 'rotate-0'
                    }`}
                  />
                  <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                </button>
                <Submenu
                  items={armeniaUniversities}
                  isOpen={isArmeniaOpen}
                  onItemClick={() => setIsMenuOpen(false)}
                />
              </li>
              <li
                className="relative group/georgia"
                onMouseEnter={() => setIsGeorgiaOpen(true)}
                onMouseLeave={() => setIsGeorgiaOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsGeorgiaOpen(!isGeorgiaOpen)}
                  className="relative group/item w-full block px-4 py-2 hover:bg-primary hover:text-accent transition-colors flex items-center justify-between rounded-b-lg"
                >
                  <span className="relative z-10 text-left">
                    Universities of Georgia
                  </span>
                  <FaChevronDown
                    className={`text-md transition-transform duration-200 ${
                      isGeorgiaOpen ? '-rotate-90' : 'rotate-0'
                    }`}
                  />
                  <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                </button>
                <Submenu
                  items={georgiaUniversities}
                  isOpen={isGeorgiaOpen}
                  onItemClick={() => setIsMenuOpen(false)}
                />
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/countries"
              onClick={() => setIsMenuOpen(false)}
              className="relative group hover:text-accent transition-colors pb-1"
            >
              Countries
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group hover:text-accent transition-colors flex items-center gap-1 text-left pb-1"
            >
              Resources
              <FaChevronDown
                className={`text-md transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <ul
              className={`md:absolute left-0 mt-2 w-44 bg-primary-light text-primary rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${isOpen ? 'block opacity-100' : 'hidden md:block md:opacity-0 md:invisible'}`}
            >
              <li>
                <Link
                  to="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group/item block px-4 py-2 hover:bg-primary hover:text-accent transition-colors"
                >
                  <span className="relative z-10">Blog</span>
                  <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group/item block px-4 py-2 hover:bg-primary hover:text-accent transition-colors"
                >
                  <span className="relative z-10">News</span>
                  <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group/item block px-4 py-2 hover:bg-primary hover:text-accent transition-colors"
                >
                  <span className="relative z-10">FAQ's</span>
                  <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setIsGalleryOpen(true)}
            onMouseLeave={() => setIsGalleryOpen(false)}
          >
            <button
              onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              className="relative group hover:text-accent transition-colors flex items-center gap-1 text-left pb-1"
            >
              Gallery
              <FaChevronDown
                className={`text-md transition-transform duration-200 ${
                  isGalleryOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <ul
              className={`md:absolute left-0 mt-2 w-44 bg-primary-light text-primary rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${isGalleryOpen ? 'block opacity-100' : 'hidden md:block md:opacity-0 md:invisible'}`}
            >
              <li>
                <Link
                  to="/photosGallery"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group/item block px-4 py-2 hover:bg-primary hover:text-accent transition-colors"
                >
                  <span className="relative z-10">Photo Gallery</span>
                  <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/videosGallery"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group/item block px-4 py-2 hover:bg-primary hover:text-accent transition-colors"
                >
                  <span className="relative z-10">Video Gallery</span>
                  <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="relative group hover:text-accent transition-colors pb-1"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <a
              href="/brochure-2026.pdf"
              download
              className="bg-accent text-white px-4 py-1 rounded-full font-bold text-sm shadow-md 
                         hover:bg-white hover:text-accent border-2 border-accent 
                         transition-all duration-300 transform hover:scale-105 
                         flex items-center gap-2 animate-soft-pulse"
            >
              Download Brochure 2026
            </a>
          </li>
        </ul>
      </nav>
      <div className="bg-primary text-white py-2 rounded-ss-2xl rounded-ee-2xl overflow-hidden relative marquee-mask">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...updates, ...updates].map((update, index) => (
            <span
              key={index}
              className="mx-10 text-sm font-medium flex items-center"
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
              {update}
            </span>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-primary-light opacity-50 md:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/images';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa6';
import { FaTimesCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <header className="bg-primary-light text-primary p-4">
      <nav className="flex justify-between items-center w-full px-1">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-30 w-30 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="IndoGlobal Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-2xl pt-6 font-bold tracking-tight text-primary whitespace-nowrap ">
            Indo-Global
          </span>
        </Link>
        <button
          className="md:hidden pt-5 text-xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimesCircle /> : <FaBarsStaggered />}
        </button>
        <ul
          className={`fixed md:static top-0 right-0 h-screen md:h-auto w-64 md:w-auto bg-primary-light md:bg-transparent flex flex-col md:flex-row gap-4 md:gap-6 font-medium px-4 md:px-0 pt-11 mt-5 md:pt-0 whitespace-nowrap  transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0 md:flex`}
        >
          <li className="md:hidden flex flex-col mt-2">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xl font-bold tracking-wider">
                Indo Global
              </span>
            </div>
            <div className="h-[1px] w-full bg-primary" />
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
          <li>
            <Link
              to="/university"
              onClick={() => setIsMenuOpen(false)}
              className="relative group hover:text-accent transition-colors pb-1"
            >
              University
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
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
              className="relative group hover:text-accent transition-colors flex items-center gap-1 w-full text-left pb-1"
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
              className="relative group hover:text-accent transition-colors flex items-center gap-1 w-full text-left pb-1"
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
              className="hover:text-accent transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
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

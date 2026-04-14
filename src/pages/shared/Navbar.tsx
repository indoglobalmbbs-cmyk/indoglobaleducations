import { Link } from 'react-router-dom';
import { logo } from '../../assets/images';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="IndoGlobal Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/university" className="hover:underline">
              University
            </Link>
          </li>
          <li>
            <Link to="/countries" className="hover:underline">
              Countries
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:underline">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:underline">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

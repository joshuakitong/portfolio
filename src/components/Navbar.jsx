import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/webdev', label: 'Web Development' },
    { path: '/music', label: 'Music Production' },
    { path: '/gaming', label: 'Gaming & Streaming' },
    { path: '/yarn', label: 'Yarn Mixes' },
    { path: '/others', label: 'Others' },
    { path: '/contact', label: 'Contact' },
  ];

  const getLinkClass = (path) =>
    `block py-2 md:py-0 transition-transform duration-150 hover:scale-105 hover:text-blue-500 ${
      location.pathname === path ? 'text-blue-500 scale-105' : ''
    }`;

  return (
    <nav className="bg-dark text-gray-300 border-b border-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div
        className={`text-xl font-semibold transition-transform duration-150 hover:scale-105 hover:text-blue-500 ${
          location.pathname === '/' ? 'text-blue-500 scale-105' : 'text-gray-300'
        }`}
      >
        <Link to="/">Joshua Kitong</Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:flex md:items-center md:space-x-4 ${
          menuOpen ? 'block' : 'hidden'
        } md:block absolute md:static top-12 left-0 w-full md:w-auto bg-dark md:bg-transparent p-4 md:p-0 border-b border-white md:border-0 rounded-md z-40`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={getLinkClass(link.path)}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
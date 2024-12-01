import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/95 fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
              OmniWave Media
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#work">Our Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#work">Our Work</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-300 hover:text-blue-400 transition-colors">
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
    {children}
  </a>
);

export default Navbar;
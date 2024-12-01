import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../utils/constants';
import { Button } from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900/95 fixed w-full z-50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
              OmniWave Media
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
              <Button>Get Started</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
            {NAVIGATION_LINKS.map((link) => (
              <MobileNavLink key={link.href} href={link.href}>
                {link.label}
              </MobileNavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-blue-400 transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
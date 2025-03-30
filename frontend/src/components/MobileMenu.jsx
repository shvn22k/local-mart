import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="sm:hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-primary-green hover:text-accent-green focus:outline-none"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } fixed inset-0 z-40 transition-opacity duration-300 ease-in-out bg-gray-600/50`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed inset-y-0 right-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out shadow-xl`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-green hover:text-accent-green"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div className="flex-1 px-4 py-6 space-y-6 bg-white">
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-4 py-2 text-base font-medium text-primary-green hover:text-accent-green hover:bg-gray-50 rounded-md transition-colors duration-150"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('how-to-use')}
              className="block w-full text-left px-4 py-2 text-base font-medium text-primary-green hover:text-accent-green hover:bg-gray-50 rounded-md transition-colors duration-150"
            >
              How To Use
            </button>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-primary-green hover:bg-accent-green rounded-md transition-colors duration-150 shadow-sm"
            >
              Login/Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
import React, { useState, useEffect } from 'react';
import { Menu, X, Sunrise } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <Sunrise className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              DawnLock
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-700 hover:text-orange-600 transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-gray-700 hover:text-orange-600 transition-colors">
              Solution
            </a>
            <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">
              Reviews
            </a>
            <a href="#join-beta" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Join Beta
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t bg-white/95 backdrop-blur-lg rounded-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#problem" className="text-gray-700 hover:text-orange-600 transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-gray-700 hover:text-orange-600 transition-colors">
                Solution
              </a>
              <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">
                Reviews
              </a>
              <a href="#join-beta" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-2 rounded-full w-full">
                Join Beta
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

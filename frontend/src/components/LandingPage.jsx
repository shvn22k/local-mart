import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function LandingPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-primary-light bg-grid-pattern bg-grid relative overflow-x-hidden">
      {/* Navigation Bar - Floating */}
      <nav className="fixed w-full top-0 sm:top-4 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm sm:rounded-lg shadow-lg">
            <div className="flex justify-between items-center h-16 px-4">
              <div className="flex-shrink-0">
                <button onClick={() => scrollToSection('hero')} className="flex items-center">
                  <h1 className="text-xl sm:text-2xl font-bold text-primary-green hover:text-accent-green transition-colors duration-300">
                    LocalMart
                  </h1>
                </button>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:space-x-8">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-green hover:text-accent-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('how-to-use')}
                  className="text-primary-green hover:text-accent-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  How To Use
                </button>
                <Link 
                  to="/login" 
                  className="bg-primary-green text-white hover:bg-accent-green px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Login/Signup
                </Link>
              </div>

              {/* Mobile Menu */}
              <MobileMenu scrollToSection={scrollToSection} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="animate-float">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-primary-green block sm:inline">Groceries,</span>
                <span className="text-accent-green block sm:inline"> Snacks & More</span>
              </h2>
            </div>
            
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-primary-green font-medium max-w-2xl mx-auto px-4">
              at your doorstep
            </p>
            
            <p className="text-base sm:text-lg text-accent-green italic max-w-xl mx-auto px-4">
              empowering locals thru locals
            </p>
            
            {/* Call to Action */}
            <div className="mt-8 sm:mt-10 px-4">
              <Link
                to="/explore"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base sm:text-lg font-medium rounded-lg text-white bg-primary-green hover:bg-accent-green transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all w-full sm:w-auto justify-center"
              >
                Explore Local Stores
              </Link>
            </div>
            
            {/* Decorative Elements */}
            <div className="mt-12 sm:mt-16 flex justify-center space-x-6">
              <span className="text-2xl sm:text-3xl text-accent-green animate-float opacity-75">✱</span>
            </div>
          </div>

          {/* Mobile-specific Features Preview */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-primary-green text-xl mb-2">Quick Delivery</div>
              <p className="text-accent-green">Get your groceries delivered within hours</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-primary-green text-xl mb-2">Local Stores</div>
              <p className="text-accent-green">Support your neighborhood businesses</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1 transform transition-all duration-300 hover:scale-105">
              <div className="text-primary-green text-xl mb-2">Easy Ordering</div>
              <p className="text-accent-green">Simple and intuitive mobile ordering</p>
            </div>
          </div>
        </main>
      </section>

      {/* About Us Section */}
      <section id="about" className="min-h-screen flex items-center bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green mb-8">About Us</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg">
              <p className="text-accent-green">
                LocalMart is born from a simple yet powerful idea: connecting local communities through their neighborhood stores.
              </p>
              <p className="text-primary-green">
                Our mission is to empower local businesses while making grocery shopping more convenient for everyone. We believe in strengthening local economies and building sustainable communities.
              </p>
              <p className="text-accent-green">
                By connecting customers directly with their neighborhood stores, we're not just delivering groceries – we're fostering community relationships and supporting local entrepreneurship.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-primary-green mb-4">Community First</h3>
              <p className="text-accent-green">Supporting local businesses and strengthening neighborhood bonds</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-primary-green mb-4">Quick & Reliable</h3>
              <p className="text-accent-green">Fast delivery from stores you know and trust</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-primary-green mb-4">Empowering Locals</h3>
              <p className="text-accent-green">Creating opportunities for local stores and delivery partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* How To Use Section */}
      <section id="how-to-use" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-green text-center mb-16">How To Use</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary-green mb-4">1</div>
              <h3 className="text-xl font-semibold text-primary-green mb-2">Create Your List</h3>
              <p className="text-accent-green">Upload a photo of your shopping list or type in your items</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary-green mb-4">2</div>
              <h3 className="text-xl font-semibold text-primary-green mb-2">Wait for Shops</h3>
              <p className="text-accent-green">Local shops will see your order and compete to serve you</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary-green mb-4">3</div>
              <h3 className="text-xl font-semibold text-primary-green mb-2">Get Your Order</h3>
              <p className="text-accent-green">The first shop to accept will prepare and deliver your items</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary-green mb-4">4</div>
              <h3 className="text-xl font-semibold text-primary-green mb-2">Payment</h3>
              <p className="text-accent-green">Choose to pay before delivery or after receiving your items</p>
            </div>
          </div>

          <div className="mt-16 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-primary-green mb-4">Additional Tips</h3>
            <ul className="space-y-4 text-accent-green">
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                Add specific brands or preferences in your list for better service
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                You can chat with the shop for any clarifications
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                Rate your experience to help other customers
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                Save your favorite shops for future orders
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@localmart.com
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1-800-LOCALMART
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>Monday - Saturday</p>
                <p className="font-semibold">8:00 AM - 10:00 PM</p>
                <p>Sunday</p>
                <p className="font-semibold">9:00 AM - 8:00 PM</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block hover:text-gray-200 transition-colors duration-300"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('how-to-use')}
                  className="block hover:text-gray-200 transition-colors duration-300"
                >
                  How To Use
                </button>
                <Link 
                  to="/login"
                  className="block hover:text-gray-200 transition-colors duration-300"
                >
                  Login/Signup
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
            <p>© {new Date().getFullYear()} LocalMart. All rights reserved.</p>
            <p className="mt-2">Connecting communities through local stores</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomerSignup from './CustomerSignup';
import ShopSignup from './ShopSignup';
import CustomerLogin from './CustomerLogin';
import ShopLogin from './ShopLogin';

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState('customer'); // 'customer' or 'shop'
  const [authMode, setAuthMode] = useState('signup'); // 'signup' or 'login'

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'customer' || type === 'shop') {
      setUserType(type);
    }
  }, [searchParams]);

  const toggleAuthMode = () => {
    setAuthMode(prev => prev === 'signup' ? 'login' : 'signup');
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Side - Customer */}
      <div 
        className={`h-1/2 md:h-full md:w-1/2 relative ${
          userType === 'customer' 
            ? 'bg-primary-green text-white' 
            : 'bg-white text-gray-600'
        }`}
      >
        {userType !== 'customer' && (
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        )}
        
        {userType === 'customer' ? (
          <div className="h-full overflow-y-auto">
            <div className="min-h-full flex flex-col items-center justify-center p-8">
              <div className="max-w-md w-full">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {authMode === 'signup' ? 'Sign Up as Customer' : 'Customer Login'}
                </h2>
                {authMode === 'signup' ? (
                  <CustomerSignup onToggleAuth={toggleAuthMode} />
                ) : (
                  <CustomerLogin onToggleAuth={toggleAuthMode} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <div className="text-center relative z-10">
              <p className="text-lg mb-4">Help us empower local businesses</p>
              <button
                onClick={() => setUserType('customer')}
                className="mt-4 px-6 py-2 bg-primary-green text-white rounded-md hover:bg-primary-green/90 transition-colors duration-300"
              >
                Switch to Customer
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Side - Shop */}
      <div 
        className={`h-1/2 md:h-full md:w-1/2 relative ${
          userType === 'shop' 
            ? 'bg-primary-green text-white' 
            : 'bg-white text-gray-600'
        }`}
      >
        {userType !== 'shop' && (
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        )}
        
        {userType === 'shop' ? (
          <div className="h-full overflow-y-auto">
            <div className="min-h-full flex flex-col items-center justify-center p-8">
              <div className="max-w-md w-full">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {authMode === 'signup' ? 'Sign Up as Shop' : 'Shop Login'}
                </h2>
                {authMode === 'signup' ? (
                  <ShopSignup onToggleAuth={toggleAuthMode} />
                ) : (
                  <ShopLogin onToggleAuth={toggleAuthMode} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <div className="text-center relative z-10">
              <p className="text-lg mb-4">We empower your business through people</p>
              <button
                onClick={() => setUserType('shop')}
                className="mt-4 px-6 py-2 bg-primary-green text-white rounded-md hover:bg-primary-green/90 transition-colors duration-300"
              >
                Switch to Shop
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
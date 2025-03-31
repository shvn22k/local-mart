import { useState } from 'react';

export default function CustomerLogin({ onToggleAuth }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login
    console.log('Customer login:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="••••••••"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 rounded border-white/20 bg-white/10 text-primary-green focus:ring-white/50"
          />
          <label htmlFor="remember" className="ml-2 block text-sm">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm hover:text-white/80">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-white text-primary-green rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
      >
        Log In
      </button>

      <p className="text-center text-sm">
        Don't have an account?{' '}
        <button
          onClick={onToggleAuth}
          className="underline hover:text-white/80"
        >
          Sign up
        </button>
      </p>
    </form>
  );
} 
import { useState } from 'react';

export default function ShopSignup({ onToggleAuth }) {
  const [formData, setFormData] = useState({
    shopName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    businessLicense: '',
    password: '',
    confirmPassword: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Shop signup:', formData);
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
        <label htmlFor="shopName" className="block text-sm font-medium mb-2">
          Shop Name
        </label>
        <input
          type="text"
          id="shopName"
          name="shopName"
          value={formData.shopName}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="Your Shop Name"
          required
        />
      </div>

      <div>
        <label htmlFor="ownerName" className="block text-sm font-medium mb-2">
          Owner Name
        </label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="Full Name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Business Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="shop@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Contact Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="+1234567890"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Business Type
        </label>
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 [&>option]:text-gray-900"
        >
          <option value="" className="text-gray-900">Select business type</option>
          <option value="grocery" className="text-gray-900">Grocery Store</option>
          <option value="restaurant" className="text-gray-900">Restaurant</option>
          <option value="cafe" className="text-gray-900">Café</option>
          <option value="bakery" className="text-gray-900">Bakery</option>
          <option value="dairy" className="text-gray-900">Dairy Shop</option>
          <option value="other" className="text-gray-900">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="businessLicense" className="block text-sm font-medium mb-2">
          Business License Number
        </label>
        <input
          type="text"
          id="businessLicense"
          name="businessLicense"
          value={formData.businessLicense}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="Enter your business license number"
          required
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-2">
          Shop Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="Complete shop address"
          rows="3"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Shop Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="Brief description of your shop"
          rows="3"
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

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-white text-primary-green rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
      >
        Sign Up as Shop
      </button>

      <p className="text-center text-sm">
        Already have an account?{' '}
        <button
          onClick={onToggleAuth}
          className="underline hover:text-white/80"
        >
          Log in
        </button>
      </p>
    </form>
  );
} 
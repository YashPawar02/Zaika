import React from 'react';

const SignupForm = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white p-8 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700 mb-4">
        Close
      </button>
      <h2 className="text-2xl font-bold mb-6">Sign up</h2>
      <p className="mb-6 text-sm">
        or <a href="#" className="text-orange-500" onClick={onClose}>login to your account</a>
      </p>
      <form>
        <div className="mb-4">
          <input 
            type="tel" 
            placeholder="Phone number" 
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600"
        >
          CONTINUE
        </button>
      </form>
      <p className="mt-4 text-xs text-gray-500">
        By creating an account, I accept the <a href="#" className="text-orange-500">Terms & Conditions</a> & <a href="#" className="text-orange-500">Privacy Policy</a>
      </p>
    </div>
  );
};

export default SignupForm;

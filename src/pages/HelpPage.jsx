// Import required dependencies
import React from 'react';

  const  HelpPage = () => {
  return (
    <div className="bg-gradient-to-tl from-[#db9443ee] via-[#e96100] to-[#fdba74] min-h-screen flex flex-col items-center py-10 px-4">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">How can we help you?</h1>
        <p className="text-gray-600">Here are some frequently asked questions and a way to contact us if needed.</p>
      </header>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div>
            <h3 className="font-medium text-gray-800">How do I reset my password?</h3>
            <p className="text-gray-600">Go to the login page and click on "Forgot Password." Follow the instructions to reset your password.</p>
          </div>
          {/* FAQ Item 2 */}
          <div>
            <h3 className="font-medium text-gray-800">How do I contact customer support?</h3>
            <p className="text-gray-600">You can use the contact form below or email us at support@example.com.</p>
          </div>
          {/* FAQ Item 3 */}
          <div>
            <h3 className="font-medium text-gray-800">Where can I find your privacy policy?</h3>
            <p className="text-gray-600">Our privacy policy is available at the footer of every page on our website.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <form className="space-y-4"  method="post" action="https://api.web3forms.com/submit">
        
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default HelpPage;

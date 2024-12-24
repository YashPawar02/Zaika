
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600">Discover who we are and what we stand for</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600">
            Welcome to our food ordering platform, where convenience meets deliciousness! Our journey began with the mission to bring your favorite meals right to your doorstep, hassle-free. We collaborate with top restaurants in your area to offer a wide variety of cuisines, ensuring there’s something for everyone.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our goal is to make food ordering a delightful experience. Whether it’s a quick snack or a family dinner, we are here to bridge the gap between you and your cravings. With a focus on quality, speed, and customer satisfaction, we strive to exceed your expectations every time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Wide selection of dishes and cuisines</li>
            <li>Easy-to-use platform with secure payment options</li>
            <li>Fast and reliable delivery</li>
            <li>Dedicated customer support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions, feedback, or need assistance? Feel free to reach out to us. We’re here to help!
          </p>
          <p className="text-gray-600">
            Email: Zaika@gmail.com<br />
            Phone: +91 7248924639 <br />
            Developer: Yash Pawar
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;

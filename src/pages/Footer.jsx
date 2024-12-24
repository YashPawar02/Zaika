import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import gimg from "../assets/google-store.png";
import aimg from "../assets/app-store.png"
import { MdFastfood } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 bg-gradient-to-tl from-[#c18c77] via-[#f6d6bf] to-[#fdba74]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 border-b border-black pb-6">
        <p className="text-lg font-semibold mb-4 md:mb-0">
          For better experience, download the Zaika app now
        </p>
        <div className="flex space-x-4">
          <a href="#">
            <img
              src={gimg}
              alt="Google Play"
              className="h-10"
            />
          </a>
          <a href="#">
            <img src={aimg} alt="App Store" className="h-10" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 px-6 md:px-12 py-8">
        {/* Logo Section */}
        <div className="col-span-1">
          <div className="flex flex-col items-start">
           <MdFastfood size={60} className="text-orange-600"/>
            <p className="text-sm mt-2">© 2024 Zaika Limited</p>
          </div>
        </div>

        {/* Footer Links */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Zaika Corporate</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500">Team</a></li>
            <li><a href="#" className="hover:text-orange-500">Zaika One</a></li>
            <li><a href="#" className="hover:text-orange-500">Zaika Instamart</a></li>
            <li><a href="#" className="hover:text-orange-500">Zaika Dineout</a></li>
            <li><a href="#" className="hover:text-orange-500">Zaika Genie</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contact us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Help & Support</a></li>
            <li><a href="#" className="hover:text-orange-500">Partner with us</a></li>
            <li><a href="#" className="hover:text-orange-500">Ride with us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Available in:</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Bangalore</a></li>
            <li><a href="#" className="hover:text-orange-500">Gurgaon</a></li>
            <li><a href="#" className="hover:text-orange-500">Hyderabad</a></li>
            <li><a href="#" className="hover:text-orange-500">Delhi</a></li>
            <li><a href="#" className="hover:text-orange-500">Mumbai</a></li>
            <li><a href="#" className="hover:text-orange-500">Pune</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-500">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Investor Relations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Social Links</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://linkedin.com/in/yash-pawar-0999b9315" className="text-gray-800 hover:text-orange-500">
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yashhh.039" className="text-gray-800 hover:text-orange-500">
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-orange-500">
                <FaFacebook size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-orange-500">
                <FaPinterest size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-orange-500">
                <FaTwitter size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="text-center flex  px-5 -mb-9 border-t border-gray-500 bg-black text-white p-2 mt-12">
            <p className="text-center">&copy; 2024 Zaika.Pvt.Ltd. All Rights Reserved.</p>
        </div>

    </footer>
  );
};

export default Footer;

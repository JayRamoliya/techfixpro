
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-repair-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">TechFix<span className="text-repair-500">Pro</span></h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for fast and reliable phone and laptop repairs. We bring your devices back to life with expert care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-repair-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-repair-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-repair-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hours & Location</h3>
            <div className="flex items-start space-x-2 mb-3">
              <Clock className="h-5 w-5 mt-1 text-repair-500" />
              <div>
                <p>Monday - Friday: 9AM - 7PM</p>
                <p>Saturday: 10AM - 5PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-1 text-repair-500" />
              <div>
                <p>123 Repair Street</p>
                <p>Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-3">
              <Phone className="h-5 w-5 text-repair-500" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Mail className="h-5 w-5 text-repair-500" />
              <p>support@techfixpro.com</p>
            </div>
            <div className="mt-4">
              <Link to="/contact" className="text-repair-500 hover:underline font-medium">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TechFixPro. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/about" className="text-gray-400 hover:text-white text-sm">
              About
            </Link>
            <Link to="/services" className="text-gray-400 hover:text-white text-sm">
              Services
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-white text-sm">
              FAQs
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

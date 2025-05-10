
import { Link } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/common/ContactForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch for repairs, questions, or to request a quote"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our services or need to book a repair? Fill out the form below and we'll get back to you as soon as possible. You can also reach us directly by phone or email.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-repair-100 p-3 rounded-full text-repair-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Monday-Friday: 9AM-7PM, Saturday: 10AM-5PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-repair-100 p-3 rounded-full text-repair-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">support@techfixpro.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-repair-100 p-3 rounded-full text-repair-700">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Working Hours</h4>
                    <p className="text-gray-600">Monday-Friday: 9AM-7PM</p>
                    <p className="text-gray-600">Saturday: 10AM-5PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-repair-100 p-3 rounded-full text-repair-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">123 Repair Street</p>
                    <p className="text-gray-600">Tech City, TC 12345</p>
                    <Link to="#map" className="text-repair-700 hover:underline text-sm">View on map</Link>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-repair-100 p-2 rounded-full text-repair-700 hover:bg-repair-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-repair-100 p-2 rounded-full text-repair-700 hover:bg-repair-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-repair-100 p-2 rounded-full text-repair-700 hover:bg-repair-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-repair-100 p-2 rounded-full text-repair-700 hover:bg-repair-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section id="map" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
          <div className="google-map mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596793345!2d-74.25986613799748!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1619971100594!5m2!1sen!2suk"
              allowFullScreen
              loading="lazy"
              title="TechFixPro Location"
            ></iframe>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-4">Directions</h3>
            <p className="text-gray-700 mb-4">
              We're located at 123 Repair Street in Tech City, just two blocks east of Tech Central Station. 
              Street parking is available, and there's a public parking garage one block north.
            </p>
            <a 
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-repair-700 font-medium hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-repair-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Emergency Repair?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call us now for priority service. We understand how important your devices are and will do our best to accommodate urgent repair needs.
          </p>
          <div className="bg-white text-repair-700 font-bold text-2xl py-4 px-6 rounded-lg inline-block">
            (555) 123-4567
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

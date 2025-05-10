
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Laptop, Phone, Database, Shield, Clock, Award } from "lucide-react";
import ServiceCard from "@/components/common/ServiceCard";
import FAQ from "@/components/common/FAQ";

const Index = () => {
  const services = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Repair",
      description: "Screen replacements, battery issues, water damage repair and more for all major phone brands.",
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Laptop Repair",
      description: "Hardware upgrades, screen replacements, keyboard fixes, and software troubleshooting.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Recovery",
      description: "Recover your valuable data from damaged devices, corrupted drives or accidental deletion.",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical repair take?",
      answer: "Most common repairs like screen or battery replacements are completed within 1-2 hours. More complex repairs may take 24-48 hours. We'll provide you with an estimated completion time when you drop off your device."
    },
    {
      question: "Do you offer a warranty on repairs?",
      answer: "Yes! All of our repairs come with a 90-day warranty covering both parts and labor. If you experience any issues with the repaired components during this period, we'll fix it at no additional cost."
    },
    {
      question: "Do you use original parts?",
      answer: "We offer both original manufacturer parts and high-quality aftermarket alternatives. We'll discuss your options and associated costs before performing any repairs so you can make an informed decision."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-repair-800 to-repair-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Fast & Reliable <span className="text-repair-300">Device Repairs</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Expert phone and laptop repairs with free diagnostics. Get your tech working like new again!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Book a Repair</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Laptop repair"
                className="rounded-lg shadow-2xl max-h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose <span className="text-repair-700">TechFixPro</span>?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With over 10 years of experience, our certified technicians provide fast, reliable repairs for all your devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Most repairs are completed within hours, not days. We respect your time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">90-Day Warranty</h3>
              <p className="text-gray-600">
                All our repairs include a 90-day warranty on both parts and labor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Our certified technicians have years of experience with all device types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional repair services for all your devices. From cracked screens to water damage, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <p className="text-gray-600 mb-8">
                We're conveniently located in the heart of Tech City. Drop by for a free diagnosis or schedule a repair online.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-repair-100 p-2 rounded-full text-repair-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">123 Repair Street, Tech City, TC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-repair-100 p-2 rounded-full text-repair-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-repair-100 p-2 rounded-full text-repair-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">support@techfixpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-repair-100 p-2 rounded-full text-repair-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p className="text-gray-600">Monday-Friday: 9AM-7PM</p>
                    <p className="text-gray-600">Saturday: 10AM-5PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596793345!2d-74.25986613799748!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1619971100594!5m2!1sen!2suk"
                allowFullScreen
                loading="lazy"
                title="TechFixPro Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to our most commonly asked questions. If you need more help, don't hesitate to contact us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-repair-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to fix your device?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free diagnosis and get your device working like new again!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Book a Repair Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;


import PageHeader from "@/components/common/PageHeader";
import TestimonialCard from "@/components/common/TestimonialCard";
import { CheckCircle, Tool, Clock, FileText, Microscope, Award } from "lucide-react";

const About = () => {
  const testimonials = [
    {
      quote: "They fixed my iPhone screen in under an hour and it was good as new! Great service at a fair price.",
      author: "Michael Johnson",
      role: "iPhone User"
    },
    {
      quote: "My laptop wouldn't boot up and I was afraid I'd lost all my work. TechFixPro recovered all my data and fixed the issue quickly.",
      author: "Sarah Williams",
      role: "Graphic Designer"
    },
    {
      quote: "Professional, knowledgeable staff who explained everything clearly. No surprise charges and my phone was ready when promised.",
      author: "David Chen",
      role: "Business Owner"
    }
  ];

  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Learn about our expert repair services and our commitment to quality"
      />
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2013, TechFixPro began as a small repair shop with a simple mission: to provide honest, affordable, and high-quality device repairs to our community.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Alex Rodriguez, was frustrated with the high costs and long wait times at manufacturer repair centers. He believed there was a better way to serve customers who needed quick, reliable repairs without breaking the bank.
              </p>
              <p className="text-gray-700 mb-6">
                Over the past decade, we've grown from that small shop to become the area's most trusted repair service. Our team of certified technicians has repaired over 50,000 devices, always staying up-to-date with the latest technology and repair techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center text-repair-700">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center text-repair-700">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">50,000+ Repairs</span>
                </div>
                <div className="flex items-center text-repair-700">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Certified Technicians</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Technician repairing a laptop"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose TechFixPro</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with exceptional customer service to ensure your repair experience is smooth and satisfying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Our technicians are certified and continually trained on the latest repair techniques and technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                Many repairs are completed within hours, not days. We respect your time and dependence on your devices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">90-Day Warranty</h3>
              <p className="text-gray-600">
                All our repairs include a 90-day warranty on parts and labor, giving you peace of mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <Microscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Parts</h3>
              <p className="text-gray-600">
                We use original or high-quality compatible parts to ensure optimal performance and longevity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Upfront Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprise charges. We provide clear cost estimates before starting any work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="mx-auto bg-repair-100 w-16 h-16 flex items-center justify-center rounded-full text-repair-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Friendly Service</h3>
              <p className="text-gray-600">
                Our team is committed to providing exceptional customer service and clear communication throughout the repair process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our repair services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-repair-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Expert Repair Services</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us today or contact us to schedule a repair. We're here to get your devices working like new again!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-repair-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
            >
              Contact Us
            </a>
            <a 
              href="/services" 
              className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

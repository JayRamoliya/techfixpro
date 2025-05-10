
import PageHeader from "@/components/common/PageHeader";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Professional repair services for all your devices"
      />
      
      {/* Phone Repairs Section */}
      <section id="phone-repairs" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Phone Repairs</h2>
              <p className="text-gray-700 mb-6">
                We provide expert repair services for all major phone brands including Apple, Samsung, Google, and more. Our technicians can quickly diagnose and fix your device, often while you wait.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Screen Replacement</h4>
                    <p className="text-sm text-gray-600">From $69.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Battery Replacement</h4>
                    <p className="text-sm text-gray-600">From $49.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Water Damage Repair</h4>
                    <p className="text-sm text-gray-600">From $89.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Charging Port Repair</h4>
                    <p className="text-sm text-gray-600">From $59.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Camera Replacement</h4>
                    <p className="text-sm text-gray-600">From $69.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Button Replacement</h4>
                    <p className="text-sm text-gray-600">From $39.99</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/contact">Request Phone Repair</Link>
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Phone repair"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Laptop Repairs Section */}
      <section id="laptop-repairs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Laptop repair"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Laptop Repairs</h2>
              <p className="text-gray-700 mb-6">
                From hardware issues to software problems, our skilled technicians can handle repairs for all laptop brands. We offer competitive rates and quality service to get your computer back up and running.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Screen Replacement</h4>
                    <p className="text-sm text-gray-600">From $129.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Battery Replacement</h4>
                    <p className="text-sm text-gray-600">From $79.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Keyboard Replacement</h4>
                    <p className="text-sm text-gray-600">From $89.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Hard Drive Upgrade/Repair</h4>
                    <p className="text-sm text-gray-600">From $99.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Virus/Malware Removal</h4>
                    <p className="text-sm text-gray-600">From $69.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">OS Installation/Recovery</h4>
                    <p className="text-sm text-gray-600">From $79.99</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/contact">Request Laptop Repair</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Recovery Section */}
      <section id="data-recovery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Data Recovery</h2>
              <p className="text-gray-700 mb-6">
                Lost important files due to device damage or accidental deletion? Our specialized data recovery services can help retrieve your valuable photos, documents, and other data from various storage media.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone Data Recovery</h4>
                    <p className="text-sm text-gray-600">From $99.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Hard Drive Recovery</h4>
                    <p className="text-sm text-gray-600">From $129.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">SSD Recovery</h4>
                    <p className="text-sm text-gray-600">From $149.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Flash Drive Recovery</h4>
                    <p className="text-sm text-gray-600">From $79.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">SD Card Recovery</h4>
                    <p className="text-sm text-gray-600">From $69.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-repair-700 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium">Deleted File Recovery</h4>
                    <p className="text-sm text-gray-600">From $89.99</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/contact">Request Data Recovery</Link>
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Data recovery"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section id="additional-services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core repair offerings, we provide a range of additional services to meet all your technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Computer Upgrades</h3>
              <p className="text-gray-700 mb-4">
                Boost your computer's performance with our upgrade services. We can install additional RAM, replace your hard drive with an SSD, upgrade your graphics card, and more.
              </p>
              <p className="font-medium">Starting from $49.99</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Software Installation</h3>
              <p className="text-gray-700 mb-4">
                Need help installing software or setting up a new operating system? Our experts can handle software installation, configuration, and troubleshooting for various applications.
              </p>
              <p className="font-medium">Starting from $39.99</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Computer Tune-Up</h3>
              <p className="text-gray-700 mb-4">
                Is your computer running slowly? Our comprehensive tune-up service includes system optimization, removing unnecessary startup programs, cleaning temporary files, and more.
              </p>
              <p className="font-medium">Starting from $59.99</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Network Setup</h3>
              <p className="text-gray-700 mb-4">
                We can set up or troubleshoot your home or small business network, configure routers, extend Wi-Fi coverage, and ensure all your devices connect seamlessly.
              </p>
              <p className="font-medium">Starting from $79.99</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Game Console Repair</h3>
              <p className="text-gray-700 mb-4">
                We repair PlayStation, Xbox, and Nintendo consoles. From HDMI port issues to disc drive problems, our technicians can get your gaming system back in action.
              </p>
              <p className="font-medium">Starting from $69.99</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Custom PC Building</h3>
              <p className="text-gray-700 mb-4">
                Looking for a custom-built PC for gaming, design work, or business? We can build a system tailored to your needs and budget with quality components.
              </p>
              <p className="font-medium">Starting from $199.99</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-repair-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a service not listed here?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us anyway! We handle a wide range of tech issues and can provide custom solutions for your specific needs.
          </p>
          <Button variant="secondary" asChild size="lg">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;

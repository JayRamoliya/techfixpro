
import PageHeader from "@/components/common/PageHeader";
import FAQ from "@/components/common/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Faq = () => {
  const generalFaqs = [
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
    {
      question: "Do you offer pickup/drop-off service?",
      answer: "Yes, we offer pickup and drop-off services within a 10-mile radius of our shop for a small fee. Please call us to arrange this service."
    },
  ];

  const phoneFaqs = [
    {
      question: "Can you repair water-damaged phones?",
      answer: "Yes, we can repair many water-damaged phones. The success rate depends on how quickly you bring in the device and the extent of the damage. Please turn off your phone immediately if it gets wet and bring it to us as soon as possible without attempting to charge it."
    },
    {
      question: "Do I need an appointment for phone repairs?",
      answer: "Walk-ins are welcome for phone repairs, but appointments are recommended for faster service. Many common phone repairs can be completed while you wait."
    },
    {
      question: "Will I lose my data during a phone repair?",
      answer: "In most cases, your data will remain intact during repairs like screen or battery replacements. However, we always recommend backing up your data before any repair as a precaution. For certain repairs that require factory resets, we'll inform you in advance."
    },
    {
      question: "Can you unlock my phone?",
      answer: "We can help with factory unlocking for most carriers and phone models. Please note that we only perform legal unlocking services in accordance with carrier policies."
    },
  ];

  const laptopFaqs = [
    {
      question: "My laptop is running slowly. Can you fix this?",
      answer: "Yes, we can diagnose and resolve performance issues with your laptop. This might involve removing malware, replacing a failing hard drive with an SSD, adding RAM, or performing a system optimization. We'll diagnose the specific causes and recommend the most cost-effective solution."
    },
    {
      question: "Can you recover data from a laptop that won't turn on?",
      answer: "In many cases, yes. Even if your laptop won't boot, we can often recover data from the hard drive by removing it and connecting it to our specialized equipment. Success rates depend on the nature of the failure and the condition of the drive."
    },
    {
      question: "How much does it cost to replace a laptop screen?",
      answer: "Laptop screen replacement costs vary depending on your specific model and the type of screen required. Basic screens start around $129.99, while high-resolution or touch screens may cost more. We can provide an exact quote after identifying your laptop model."
    },
    {
      question: "Can you upgrade my laptop's components?",
      answer: "Yes, we can upgrade many laptop components including RAM, storage drives (HDD to SSD), and in some models, other components. Not all laptops allow for component upgrades, so we'll need to check your specific model."
    },
  ];

  const dataFaqs = [
    {
      question: "Can you recover deleted files?",
      answer: "Yes, in many cases we can recover deleted files from various storage devices including hard drives, SSDs, memory cards, and USB drives. The success rate depends on factors like how long ago the files were deleted and whether the storage space has been overwritten."
    },
    {
      question: "How much does data recovery cost?",
      answer: "Data recovery pricing starts at $89.99 for basic recovery scenarios. Complex recovery from physically damaged devices may cost more. We provide free evaluations and will give you a firm quote before proceeding with any recovery work."
    },
    {
      question: "How long does data recovery take?",
      answer: "Simple data recovery cases can be completed in 1-2 business days. More complex cases involving physical damage may take 3-5 business days. We'll provide an estimated timeframe after our initial diagnosis."
    },
    {
      question: "Is my data kept confidential during recovery?",
      answer: "Absolutely. We maintain strict confidentiality for all client data. Our technicians adhere to privacy protocols, and we never access, copy, or view your personal files beyond what's necessary for the recovery process."
    },
  ];

  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our repair services"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">General Questions</h2>
            <FAQ items={generalFaqs} />
            
            <h2 className="text-3xl font-bold mt-16 mb-8">Phone Repair Questions</h2>
            <FAQ items={phoneFaqs} />
            
            <h2 className="text-3xl font-bold mt-16 mb-8">Laptop Repair Questions</h2>
            <FAQ items={laptopFaqs} />
            
            <h2 className="text-3xl font-bold mt-16 mb-8">Data Recovery Questions</h2>
            <FAQ items={dataFaqs} />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Contact our team directly and we'll be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline">
              <a href="tel:+5551234567">Call (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

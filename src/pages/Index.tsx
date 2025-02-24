import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import SupportedResources from "@/components/SupportedResources";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { Clock, BarChart, LineChart, Share } from "lucide-react";

// Import team member images
import randulaImage from '../assets/images/randula.jpg';
import sahanImage from '../assets/images/sahan.jpg';
import piyumiImage from '../assets/images/piyumi.jpg';
import diyathImage from '../assets/images/diyath.jpg';
import lithmiImage from '../assets/images/lithmi.jpg';
import yukthiImage from '../assets/images/yukthi.jpg';

const Index = () => {
  const featuresRef = useRef<HTMLElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: <Clock className="w-6 h-6" />, // Real-Time Bidding
      title: "Real-Time Bidding",
      description: "Instant bidding for apparel resources",
      image: "https://iili.io/3HGuxKx.jpg",
      details: "Engage in live auctions and place real-time bids on apparel resources, ensuring dynamic pricing and immediate competition in the marketplace.",
    },
    {
      icon: <BarChart className="w-6 h-6" />, // Sustainability Tracking
      title: "Factory Outlet Locator",
      description: "A geolocation-based tool to help customers find nearby factory outlets.",
      image: "https://iili.io/3HtfhsS.jpg",
      details: "The Factory Outlet Locator helps customers find nearby outlets using geolocation. It filters by location, product availability, and offers, making shopping easier and more sustainable by reducing transportation costs.",
    },
    
    {
      icon: <LineChart className="w-6 h-6" />, // Wholesale & Retail
      title: "Wholesale & Retail Options",
      description: "Bulk & single-item purchases available",
      image: "https://iili.io/3HGwb6v.jpg",
      details: "Predictive analytics helps forecast demand trends, optimize pricing, and adjust inventory in real-time for both bulk and individual buyers.",
    },
    {
      icon: <Share className="w-6 h-6" />, // Resource Sharing
      title: "Apparel Resource Exchange",
      description: "Buy & sell surplus factory clothing efficiently",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJW8m5_Op0cado1X_sYy54yxn75ElHammwp81cuRe-TAs5QS3CAdoxFlARhu3mOs-LCA&usqp=CAU",
      details: "Enable businesses to exchange surplus apparel directly with other businesses, reducing waste and promoting a circular economy.",
    },
  ];

  const supportedResources = [
    "Cotton Fabrics", "Denim", "Woolen Textiles", "Silk", "Leather Goods", "Activewear"
  ];

  const teamMembers = [
    {
      name: "Mr. Diyath Koralage",
      role: "Frontend Developer",
      image: diyathImage,
      linkedin: "http://linkedin.com/in/diyath-koralage-ab0a5a294",
    },
    {
      name: "Mr. Pasindu Randula",
      role: "Frontend Developer/Backend Developer",
      image: randulaImage,
      linkedin: "https://www.linkedin.com/in/pasindu-randula-514693294",
    },
    {
      name: "Mr. Yukthi Jeewantha",
      role: "Frontend Developer/Backend Developer",
      image: yukthiImage,
      linkedin: "https://www.linkedin.com/in/yukthi-jeewantha-762b19295",
    },
    {
      name: "Mr. Sahan Sudeepa",
      role: "UI/UX Designer",
      image: sahanImage,
      linkedin: "http://linkedin.com/in/sahan-gunawardhana-961256302",
    },
    {
      name: "Ms. Lithmi Jayarathne",
      role: "UI/UX Designer / Project Manager",
      image: lithmiImage,
      linkedin: "http://linkedin.com/in/lithmi-jayarathna-3b1690331",
    },
    {
      name: "Ms. Piyumi Sanjeewa",
      role: "Frontend Developer",
      image: piyumiImage,
      linkedin: "https://www.linkedin.com/in/piyumi-wijesinghe-4153ab321",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Hero onGetStarted={scrollToFeatures} />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="features" ref={featuresRef}>
        <Features features={features} />
      </section>
      <section id="resources">
        <SupportedResources resources={supportedResources} />
      </section>
      <section id="team">
        <Team members={teamMembers} />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Join Our B2B Resource Exchange Platform
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Start connecting, trading, and growing your business today by becoming a part of our resource exchange.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;

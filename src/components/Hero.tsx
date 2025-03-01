import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXNlMjBzaG9wfGVufDB8fDB8fHww')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
            Transforming B2B Resource Exchange with ReFab
            <span className="block text-yellow-400">for a Circular Economy</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            In today's fast-paced industrial landscape, businesses frequently
            encounter challenges related to excess materials, surplus inventory,
            and wasted resources. Our B2B Resource Exchange Platform, ReFab, is
            designed to bridge this gap by enabling businesses to trade, sell, and
            repurpose unused materials efficiently.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#8B4513] to-[#D2B48C] shadow-md fixed w-full z-50"> {/* Brown to Beige Gradient */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Text */}
        <div className="flex items-center space-x-3">
          <img 
            src="/Refabicon.jpg" // Replace with actual path
            alt="ReFab Logo"
            className="w-10 h-10 object-contain"
          />
          <a href="/" className="text-2xl font-bold text-white"> {/* Text color changed to white */}
            Refab
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex space-x-8 items-center ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="home" smooth={true} duration={500} className="text-white hover:text-yellow-300 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-yellow-300 cursor-pointer">
            About
          </Link>
          <Link to="features" smooth={true} duration={500} className="text-white hover:text-yellow-300 cursor-pointer">
            Features
          </Link>
          <Link to="resources" smooth={true} duration={500} className="text-white hover:text-yellow-300 cursor-pointer">
            Resources
          </Link>
          <Link to="team" smooth={true} duration={500} className="text-white hover:text-yellow-300 cursor-pointer">
            Team
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-yellow-300 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

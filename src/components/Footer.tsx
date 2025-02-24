import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-sage-100">Contact Us</h3>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform">
              <Mail className="w-5 h-5 text-sage-100" />
              <a href="mailto:refabb2b@gmail.com" className="hover:text-sage-300">refabb2b@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform">
              <Phone className="w-5 h-5 text-sage-100" />
              <a href="tel:+94 703597669" className="hover:text-sage-300">+94 703597669</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-sage-100">Follow Us</h3>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/refab_b2b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sage-300 transform hover:scale-125 transition-transform"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/refab2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sage-300 transform hover:scale-125 transition-transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-sage-100">Stay Updated</h3>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for the latest updates and features from the Refab platform.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-sage-300"
              />
              <button
                type="submit"
                className="bg-sage-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sage-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sage-500 text-center">
          <p className="text-sage-100">&copy; {new Date().getFullYear()} Refab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";  // Removed Gavel icon, using image instead

const AboutUs = () => {
  return (
    <section className="py-20 bg-sage-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Representation (Bidding System) with Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex justify-center">
              <div className="relative">
                <a href="YOUR_IMAGE_LINK_HERE" target="_blank" rel="noopener noreferrer">
                  <img src="/Refabicon.jpg" alt="" className="w-96 h-96 object-cover rounded-full" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* About Us Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-sage-800">  {/* Changed the size and color */}
        <span className="text-sage-900">Welcome to Refab!</span>  {/* Different color for "Welcome to Refab!" */}
         <br />
        <span className="text-sage-600">Where Innovation Drives Apparel Trade</span>  {/* Larger and different color for the rest */}
         </h2>
            <p className="text-gray-600 leading-relaxed">
              At Refab, we’re transforming the way businesses exchange factory outlet apparel. By harnessing cutting-edge technology and real-time bidding, our platform empowers "manufacturers", "wholesalers", and "retailers" to connect seamlessly. Enjoy transparent, dynamic auctions that optimize surplus stock, reduce waste, and unlock maximum value.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Join us in revolutionizing apparel trade for a more sustainable and profitable future.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-600">Fair & Competitive Pricing</h3>
                  <p className="text-gray-600">Businesses can bid on apparel inventory in real-time, securing the best deals while reducing waste.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-600">Industry-Wide Connectivity</h3>
                  <p className="text-gray-600">Connect manufacturers, retailers, and wholesalers through a streamlined marketplace for factory outlet apparel.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

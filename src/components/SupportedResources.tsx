import { motion } from "framer-motion";
import { Box } from "lucide-react"; 

interface SupportedResourcesProps {
  resources: string[];
}

const SupportedResources = ({ resources }: SupportedResourcesProps) => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/65fa6ba90412abc870cab98d/6645d5626110e2e296d23f26_boutique%20clothing%20shop.jpg')" }} 
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Supported Resources
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <Box className="w-8 h-8 text-yellow-400 mx-auto mb-3" /> {/* Changed icon color */}
              <h3 className="text-lg font-semibold text-gray-800">{resource}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedResources;

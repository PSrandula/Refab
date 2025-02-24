import { motion } from "framer-motion";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  details: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-sage-600 mb-16">
          Smart Features for a Sustainable B2B Resource Exchange
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-sage-50 cursor-pointer"
            >
              <div className="relative h-72">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">{feature.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

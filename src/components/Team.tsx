import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

interface TeamProps {
  members: TeamMember[];
}

const Team = ({ members }: TeamProps) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-700 mb-12">
          Meet Our Expert Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group w-56 h-72 mx-auto"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm opacity-90">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center w-8 h-8 bg-white/30 rounded-full hover:bg-white/50 transition-all duration-300"
                >
                  {/* Changed icon color to blue */}
                  <Linkedin className="w-6 h-6 text-blue-600" /> 
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import { motion } from "framer-motion";
import { skillData } from '../assets/assets';

function Skills() {
  return (
    <motion.section
      id="Skills"
      className="relative py-12 px-4 sm:px-6 w-full max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          My Skills
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Technologies I work with regularly
        </p>
      </motion.div>

      <div className="space-y-6">
        {skillData.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50"
          >
            <h3 className="text-lg font-medium mb-3 text-blue-300">
              {category.category.charAt(0).toUpperCase() + category.category.slice(1)}
            </h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center p-2 rounded-md bg-gray-800/40 hover:bg-gray-700/50 transition-colors"
                >
                  <img
                    src={skill.logo}
                    alt={skill.title}
                    className="w-8 h-8 object-contain mb-1"
                  />
                  <span className="text-xs text-center text-gray-300">
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
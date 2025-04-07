/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
// import leetcodeLogo from '../assets/leetcode.png'; // Add these images to your assets
// import gfgLogo from '../assets/gfg.png';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      id="About"
      className="relative py-16 px-6 sm:px-14 md:px-20 lg:px-32 w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Stats Section */}
          <motion.div
            className="flex-1 p-8 rounded-2xl bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 shadow-xl"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Experience", value: "1+ Years", icon: "⏳" },
                { label: "Projects", value: "4 Completed", link: "#Project", icon: "🚀" },
                {
                  label: "LeetCode",
                  value: "260+ Solved",
                  link: "https://leetcode.com/u/Praphullrahangdale/",
                  // logo: leetcodeLogo,
                  icon: "🧠"
                },
                {
                  label: "GeeksForGeeks (Currently)",
                  value: "270+ Solved",
                  link: "https://www.geeksforgeeks.org/user/praphullraugcx/",
                  // logo: gfgLogo,
                  icon: "💻"
                },
                { label: "Ongoing", value: "2 Projects", icon: "🛠️" },
                { label: "Education", value: "B.Tech (IT)", icon: "🎓" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-gray-900 bg-opacity-60 hover:bg-opacity-80 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                >
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                      {item.logo ? (
                        <div className="flex items-center gap-2 mb-2">
                          <img src={item.logo} alt={item.label} className="h-6 w-6 object-contain" />
                          <span className="text-2xl font-bold text-blue-400">{item.value}</span>
                        </div>
                      ) : (
                        <>
                          <span className="text-2xl mb-1">{item.icon}</span>
                          <span className="text-2xl font-bold text-blue-400">{item.value}</span>
                        </>
                      )}
                      <span className="text-gray-300 text-sm text-center">{item.label}</span>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">{item.icon}</span>
                      <span className="text-2xl font-bold text-blue-400">{item.value}</span>
                      <span className="text-gray-300 text-sm text-center">{item.label}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Description */}
          <motion.div
            className="flex-1 p-8 rounded-2xl bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 shadow-xl relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-blue-400 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-purple-500 rounded-br-lg"></div>

            <motion.h2
              className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Who Am I?
            </motion.h2>

            <motion.p
              className="text-gray-200 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I'm <span className="text-blue-300 font-medium">Praphull Rahangdale</span>— a B.Tech student with a big passion for full-stack development. I really enjoy building web applications that are not just efficient and scalable, but also fun and easy to use.
            </motion.p>

            <motion.p
              className="text-gray-200 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I love working across both the frontend and backend — whether it’s crafting clean, interactive interfaces or designing robust backend systems. Problem-solving excites me, and I’m always eager to learn, explore new tools, and build digital experiences that make a real difference.            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full text-blue-300 text-sm">Problem Solving</span>
              <span className="px-4 py-2 bg-purple-500 bg-opacity-20 rounded-full text-purple-300 text-sm">Web Development</span>
              <span className="px-4 py-2 bg-green-500 bg-opacity-20 rounded-full text-green-300 text-sm">IT</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
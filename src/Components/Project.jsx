// import React from 'react';
import { motion } from 'framer-motion';
import { projectData, techIcons } from '../assets/assets';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function Projects() {
  return (
    < motion.section 
      id="Project"
      className="relative py-16 px-4 sm:px-6 md:px-8 lg:px-16 w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Projects
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my completed projects showcasing my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col w-full h-[400px] border border-gray-700 rounded-xl overflow-hidden bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 group"
            >
              {/* Project Image */}
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-blue-300 text-sm">{project.title}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((techKey, idx) => {
                    const techImage = techIcons[techKey];
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-1 px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-200"
                        title={techKey}
                      >
                        {techImage ? (
                          <img 
                            src={techImage} 
                            alt={techKey}
                            className="w-4 h-4 object-contain"
                          />
                        ) : (
                          <span>{techKey}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <p className="text-gray-300 mb-6 text-sm flex-grow">{project.text}</p>

                {/* Project Links */}
                <div className="flex gap-4 items-center mt-auto">
                  <motion.a
                    href={project.link_src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.github_src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiGithub className="w-5 h-5" />
                    <span className="text-xs">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
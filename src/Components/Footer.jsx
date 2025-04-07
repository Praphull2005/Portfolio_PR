import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const handleContactClick = () => {
    window.location.href = "mailto:praphullrahangdale@gmail.com";
  };

  return (
    <motion.footer
      className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 py-16 px-4 sm:px-6 md:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Decorative elements (matching header) */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-10 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <motion.div
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name with gradient text (like header) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Praphull Rahangdale
            </h2>
          </motion.div>

          {/* Social Links with hover effects */}
          <motion.div
            className="flex gap-6"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://github.com/Praphull2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/praphull-rahangdale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Contact Button with matching header style */}
          <motion.button
            onClick={handleContactClick}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="w-5 h-5" />
            <span className="font-medium">Contact Me</span>
          </motion.button>
        </motion.div>

        {/* Copyright with subtle border */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Praphull Rahangdale. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import Social from './Social';
import profilePic from '../assets/gitProfilePic.jpg';

function Header() {
  return (
    <div
      id="Header"
      className="ml-2 min-h-screen flex flex-col md:flex-row justify-between items-center w-full pt-12 overflow-hidden relative bg-gradient-to-br "
    >
      <Navbar />

      <motion.div
        className="flex flex-col items-start text-left px-8 md:px-12 py-8 lg:w-1/2 z-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Hey there, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Praphull Rahangdale</span>
        </h2>

        <p className="text-gray-300 text-lg mb-8 font-light max-w-lg">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <motion.a
            href="#Project"
            className="border-2 border-blue-400 px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-400 hover:bg-opacity-20 transition-all duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="mailto:praphullrahangdale@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>

        <div className="mt-4">
          <Social />
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="relative flex-1 flex justify-center items-center mt-8 md:mt-0 w-full md:w-auto"
      >
        <div className="rohit-container relative">
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-400 shadow-xl shadow-blue-500/30"
            whileHover={{ scale: 1.03 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-500 animate-ping opacity-0"
            animate={{ opacity: [0, 0.2, 0], scale: [1, 1.1, 1.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;
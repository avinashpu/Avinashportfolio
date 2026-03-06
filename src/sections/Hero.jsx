import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';

import profileImage from "../assets/images/profile.jpg";
import resume from "../assets/resume/Avinash Resume.pdf";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Avinash-Kumar-Resume.pdf";
    link.click();
  };

  const handleViewProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-6">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            <motion.div
              className="space-y-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                {PERSONAL_INFO.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
                {PERSONAL_INFO.subtitle}
              </h3>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >

              <motion.button
                onClick={handleViewProjects}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-slate-700 rounded-lg font-medium hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <Download className="w-5 h-5" />
              </motion.button>

            </motion.div>

          </motion.div>


          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <div className="relative w-full h-full flex items-center justify-center">

              <motion.div
                className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >

                <div className="w-60 h-60 md:w-[22rem] md:h-[22rem] rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">

                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover"
                  />

                </div>

              </motion.div>


              <motion.div
                className="absolute top-10 right-0 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Available for work
                  </span>
                </div>
              </motion.div>


              <motion.div
                className="absolute bottom-10 left-0 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {PERSONAL_INFO.projects}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
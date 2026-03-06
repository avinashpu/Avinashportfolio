import { motion } from 'framer-motion';
import { Briefcase, FolderGit2, Code2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { PERSONAL_INFO, ABOUT_TEXT } from '../utils/constants';

const About = () => {
  const stats = [
    {
      icon: Briefcase,
      value: PERSONAL_INFO.experience,
      label: 'Years Experience',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: FolderGit2,
      value: PERSONAL_INFO.projects,
      label: 'Projects Completed',
      color: 'from-purple-500 to-cyan-500',
    },
    {
      icon: Code2,
      value: PERSONAL_INFO.technologies,
      label: 'Technologies',
      color: 'from-cyan-500 to-indigo-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my journey and expertise"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl transform rotate-6" />
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profile"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

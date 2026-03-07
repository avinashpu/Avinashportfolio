import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and achievements"
        />

        <div className="relative">

          {/* Timeline Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500" />

          <div className="space-y-12">

            {experiences.map((exp, index) => (

              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >

                {/* Desktop Spacer */}
                <div className="hidden md:block flex-1" />

                {/* Timeline Dot (Desktop Only) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-indigo-600 rounded-full z-10" />

                {/* Card */}
                <div className="flex-1 md:px-10">

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                  >

                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>

                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                  </motion.div>

                </div>

              </motion.div>

            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
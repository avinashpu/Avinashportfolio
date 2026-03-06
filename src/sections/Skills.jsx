import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index + categoryIndex * 4}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;

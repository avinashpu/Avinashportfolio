import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <motion.div
      className={center ? 'text-center mb-16' : 'mb-16'}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Services"
          subtitle="What I can do for you"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

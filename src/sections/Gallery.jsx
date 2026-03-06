import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { galleryItems } from '../data/gallery';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Design Gallery"
          subtitle="UI/UX designs and visual work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Minimal category pill */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full shadow">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
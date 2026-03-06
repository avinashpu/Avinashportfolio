import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import { SOCIAL_LINKS } from "../utils/constants";

import img1 from "../assets/images/4.png";
import img2 from "../assets/images/1.webp";
import img3 from "../assets/images/3.webp";
import img4 from "../assets/images/2.webp";

const Contact = () => {

  const images = [img1, img2, img3, img4];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const contactInfo = [
  
    {
      icon: MapPin,
      label: "Location",
      value: "DLF Phase - 1, Gurugram, India",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8409774787",
      href: "tel:+918409774787",
    },
  ];

  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    
  ];

  return (
    <section id="contact" className="py-28 bg-gray-50 dark:bg-slate-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together"
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mt-16">

          {/* IMAGE SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[450px]"
          >

            <AnimatePresence mode="wait">

              <motion.img
                key={index}
                src={images[index]}
                alt="Contact Visual"
                className="absolute w-full h-full object-cover rounded-3xl shadow-2xl"
                initial={{ opacity: 0, x: -60, scale: 1.05 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.95 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />

            </AnimatePresence>

          </motion.div>

          {/* CONTENT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >

            <motion.h3
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Let's talk about your project
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </motion.p>

            {/* CONTACT INFO */}

            <div className="space-y-6">

              {contactInfo.map((info, index) => {

                const Icon = info.icon;

                return (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-5"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >

                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">

                      <Icon className="w-6 h-6 text-white" />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {info.label}
                      </p>

                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-indigo-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white font-medium">
                          {info.value}
                        </p>
                      )}

                    </div>

                  </motion.div>
                );

              })}

            </div>

            {/* SOCIAL ICONS */}

            <motion.div
              className="flex gap-5 pt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >

              {socialLinks.map((social) => {

                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors group shadow-lg"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >

                    <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />

                  </motion.a>
                );

              })}

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;
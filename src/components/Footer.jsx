import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../utils/constants";

const Footer = () => {

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: SOCIAL_LINKS.github,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: SOCIAL_LINKS.linkedin,
    },
   
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}

          <div>

            <h3 className="text-2xl font-bold text-indigo-600 dark:text-white">
              {PERSONAL_INFO.name}
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-sm">
              {PERSONAL_INFO.tagline}
            </p>

            {/* QUOTE */}

            <p className="mt-6 text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              'Error 404: Comfort Zone Not Found'
            </p>

          </div>


          {/* NAVIGATION */}

          <div>

            <h4 className="text-lg font-semibold text-indigo-600 dark:text-white mb-5">
              Pages
            </h4>

            <ul className="space-y-3">

              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>


          {/* SOCIAL */}

          <div>

            <h4 className="text-lg font-semibold text-indigo-600 dark:text-white mb-5">
              Connect With Me
            </h4>

            <div className="space-y-4">

              {socialLinks.map((social) => {

                const Icon = social.icon;

                return (

                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                  >

                    <span className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 text-white" />
                    </span>

                    {social.name}

                  </a>

                );

              })}

            </div>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="mt-14 pt-6 border-t border-gray-200 dark:border-slate-800">

          {/* COPYRIGHT */}

          <div className="text-center">

            <p className="text-lg text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
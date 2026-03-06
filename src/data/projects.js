import doctor from "../assets/images/doctor.webp";
import ecommerce from "../assets/images/Ecommerce.png";
import qrcabs from "../assets/images/qrcabs.jpg";
import auto from "../assets/images/Auto.png";
import analytics from "../assets/images/analytics.png";
import portfolio from "../assets/images/portfolio.png";

export const projects = [
  {
    id: 1,
    title: "Doctor Appointment App",
    description:
      "A comprehensive healthcare booking platform with real-time appointment scheduling and patient management.",
    image: doctor,
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "Modern e-commerce platform with advanced filtering, cart management, and secure payment integration.",
    image: ecommerce,
    techStack: ["React", "Express", "Stripe", "Redux"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "QR Cabs Ride App",
    description:
      "Ride-hailing application with QR code scanning, real-time tracking, and seamless booking experience.",
    image: qrcabs,
    techStack: ["React Native", "Firebase", "Google Maps API"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 4,
    title: "Automation Testing Dashboard",
    description:
      "Comprehensive testing dashboard for managing and monitoring Playwright automation test suites.",
    image: auto,
    techStack: ["React", "Playwright", "Node.js", "Chart.js"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization.",
    image: analytics,
    techStack: ["React", "D3.js", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Modern portfolio website with smooth animations and responsive design.",
    image: portfolio,
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
];
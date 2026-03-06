import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const MINUTE = 60 * 1000;
    const INTERVAL = 2.5 * MINUTE;

    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
      }
    };

    // Sequence:
    // 0: Start White (Light)
    // 2.5m: Black (Dark)
    // 5.0m: White (Light)
    // 7.5m: Black (Dark) - Final

    applyTheme(false); // Start Light

    const t1 = setTimeout(() => applyTheme(true), INTERVAL);
    const t2 = setTimeout(() => applyTheme(false), INTERVAL * 2);
    const t3 = setTimeout(() => applyTheme(true), INTERVAL * 3);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="bg-custom-bg min-h-screen text-custom-text font-sans selection:bg-custom-primary/30 selection:text-custom-primary transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import { ThemeProvider } from './context/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WhyChooseMe from './components/WhyChooseMe';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import './App.css';

function AppContent() {
  useScrollReveal();

  return (
    <div className="app">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {/* Cookie consent banner — renders only when no prior decision exists */}
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

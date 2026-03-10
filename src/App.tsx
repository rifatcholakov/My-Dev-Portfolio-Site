import { ThemeProvider } from './context/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WhyChooseMe from './components/WhyChooseMe';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function AppContent() {
  // Replaces the raw scroll listener — uses IntersectionObserver under the hood
  useScrollReveal();

  return (
    <div className="app">
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

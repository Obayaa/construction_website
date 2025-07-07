import './App.css'
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import Home from './components/Home';
import ModernHomes from './components/ModernHomes';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />
      <div className="">
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section id="about" className="min-h-screen py-16 bg-white">
          <About />
        </section>

        <section id="achievements" className="min-h-[27rem] py-10 bg-blue-100">
          <Achievements />
        </section>

        <section id="services" className={`min-h-screen py-16 bg-white`}>
          <Services />
        </section>

        <section id="projects" className="min-h-screen py-16 bg-gray-50">
          <Projects />
        </section>
        <section id="modern-homes" className="min-h-screen py-16 bg-white">
          <ModernHomes />
        </section>

        <section id="team" className="min-h-[70vh] py-16 bg-blue-50">
          <Team />

        </section>
        <section id="contact" className="min-h-screen py-16 bg-gray-50">
          <Contact />
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default App;
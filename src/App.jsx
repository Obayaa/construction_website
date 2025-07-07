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
        <section id="home" className="">
          <Home />
        </section>

        <section id="about" className=" py-16 bg-blue-50">
          <About />
        </section>

        <section id="services" className={`py-16 bg-white`}>
          <Services />
        </section>

        <section id="projects" className=" py-16 bg-gray-50">
          <Projects />
        </section>

        <section id="modern-homes" className=" py-16 bg-blue-100">
          <ModernHomes />
        </section>

        <section id="achievements" className="min-h-[27rem] py-10 bg-white">
          <Achievements />
        </section>

        <section id="team" className="py-16 bg-gray-50">
          <Team />

        </section>
        <section id="contact" className=" py-16 bg-white">
          <Contact />
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default App;
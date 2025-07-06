import './App.css'
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />
      <div className="">
        <section id="home" className="scroll-mt-56 md:scroll-mt-0">
          <Home />
        </section>

        <section id="about" className="min-h-screen pt-12 pb-8 bg-white scroll-mt-64 md:scroll-mt-0">
          <About />
        </section>

        <section id="achievements" className="min-h-[27rem] py-10 bg-blue-100">
          <Achievements />
        </section>

        <section id="services" className="min-h-screen py-12 bg-white scroll-mt-56 md:scroll-mt-0">
          <Services />
        </section>

        <section id="projects" className="min-h-screen py-12 p-10 bg-gray-50 scroll-mt-56 md:scroll-mt-0">
          <Projects />
        </section>

        <section id="team" className="min-h-[70vh] py-12 bg-blue-50 scroll-mt-56 md:scroll-mt-0">
          <Team />

        </section>
        <section id="contact" className="min-h-screen py-12 bg-gray-50">
          <Contact />
        </section>

      </div>
    </div>
  );
}

export default App;
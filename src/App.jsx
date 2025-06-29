import './App.css'
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="">
        <section id="home" className="">
          <Home />
        </section>

        <section id="about" className="min-h-screen pt-20 bg-white">
          <About />
        </section>

        <section id="achievements" className="min-h-[27rem] p-10 bg-blue-100">
          <Achievements />
        </section>

        <section id="services" className="min-h-screen pt-20 p-10 bg-gray-100 text-4xl flex">
          <div>Services Section</div>
        </section>

        <section id="projects" className="min-h-screen pt-20 p-10 bg-white text-4xl flex">
          <div>Hello everyone, welcome to projects done</div>
        </section>

        <section id="team" className="min-h-[70vh] p-10 bg-blue-50">
          <Team />

        </section>
        <section id="contact" className="min-h-screen pt-20 p-10 bg-white text-4xl flex">
          {/* <div>Contact Section</div> */}
          <Contact />
        </section>

      </div>
    </div>
  );
}

export default App;
import { Helmet } from 'react-helmet-async';
import './App.css'
import Achievements from './components/Achievements';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ModernHomes from './pages/ModernHomes';
import Team from './pages/Team';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Main Title for the entire website */}
        <title>Sambislight Construction - Expert Building & Renovation in Accra, Ghana</title>

        {/* Main Meta Description for the entire website */}
        <meta
          name="description"
          content="Sambislight Construction offers comprehensive building, renovation, civil engineering, and project management services in Accra, Ghana. Explore our projects, team, and contact us for quality construction solutions."
        />

        {/* You can add other global meta tags here if needed */}
        <meta name="keywords" content="sambislight, construction, building, renovation, modern homes, project management, Accra, Ghana, Sunyani, Kumasi, residential, commercial, infrastructure, builders, contractors" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        {/* Add any other global meta tags or links here, like favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Helmet>


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
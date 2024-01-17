// App.js
import './styles.css';
import Header from './components/HeaderSection';
import Home from './components/IntroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Form from './components/Form';
import Footer from './components/Footer';
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header />
      <Link to="home" smooth={true} duration={500}></Link>
      <Link to="about" smooth={true} duration={500}></Link>
      <Link to="skills" smooth={true} duration={500}></Link>
      <Link to="projects" smooth={true} duration={500}></Link>
      <Link to="education" smooth={true} duration={500}></Link>
      <Link to="certifications" smooth={true} duration={500}></Link>
      <Link to="resume" smooth={true} duration={500}></Link>
      <Link to="contact" smooth={true} duration={500}></Link>

      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="certifications">
        <Certifications />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="Form">
        <Form />
      </Element>
      <Footer />
    </div>
  );
}

export default App;

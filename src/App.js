import './App.css';
import Home from './Components/home/Home';
import Header from './Components/header/Header';
import About from './Components/about/about';
import Skills from './Components/skills/skills';
import Services from './Components/services/services';
import Certificates from './Components/ceritificates/certificates';
import Projects from './Components/projects/projects';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App;
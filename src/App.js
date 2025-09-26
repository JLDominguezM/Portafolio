import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <div>
      <Header />
      
      {/* Aquí renderizamos cada sección una debajo de la otra */}
      {/* Cada div tiene un 'id' para que el scroll sepa a dónde ir */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
export default App;

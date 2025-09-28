import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import Awards from "./Pages/Awards";
import Community from "./Pages/Community"

function App() {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="community">
        <Community />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="awards">
        <Awards />
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

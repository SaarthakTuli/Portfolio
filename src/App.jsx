import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Hero,
  Navbar,
  Tech,
  Footer,
  FullScreenButton,
  Contact,
  StarsCanvas,
} from "./components";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>{" "}
        <About />
        <Experience />
        <Projects />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>{" "}
        <Footer />
        <FullScreenButton />
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;

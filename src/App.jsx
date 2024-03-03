import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Hero,
  Navbar,
  Tech,
  Footer,
  FullScreenButton,
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
        <Footer />
        <FullScreenButton />
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;

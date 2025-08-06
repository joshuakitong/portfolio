import NavBar from "./components/NavBar";
import VignetteOverlay from "./components/VignetteOverlay";
import CustomCursor from "./components/CustomCursor";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-black/5 dark:bg-black/90 text-black dark:text-white font-cascadia transition-all duration-300">
      <NavBar />
      <VignetteOverlay />
      <CustomCursor />
      <ScrollToHash />

      <div id="home" className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen max-w-[1600px] mx-auto pt-20 md:pt-0 px-6">
        <Home />
      </div>
      <div id="about" className="min-h-screen/2 max-w-4xl sections" >
        <About />
      </div>
      <div id="skills" className="min-h-screen/2 max-w-[1600px] sections" >
        <Skills />
      </div>
      <div id="projects" className="min-h-screen max-w-4xl sections">
        <Projects />
      </div>
      <div id="contact" className="min-h-screen/2 max-w-md sections" >
        <Contact />
      </div>
      <footer className="text-sm text-black/50 dark:text-white/50 text-center pt-12 pb-6">&copy; Joshua Kitong 2025. All Rights Reserved</footer>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Music from './pages/Music';
import Gaming from './pages/Gaming';
import WebDev from './pages/WebDev';
import Contact from './pages/Contact';
import ProjectsAndTech from './pages/ProjectsAndTech';
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  return (
    <div className="min-h-screen bg-light text-gray-800 dark:bg-dark dark:text-gray-200 transition">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/music" element={<Music />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/projectsAndTech" element={<ProjectsAndTech />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <DarkModeToggle />
    </div>
  );
}

export default App;
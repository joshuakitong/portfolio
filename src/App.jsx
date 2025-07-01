import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Music from './pages/Music';
import Gaming from './pages/Gaming';
import WebDev from './pages/WebDev';
import Others from './pages/Others';
import Contact from './pages/Contact';
import ProjectsAndTech from './pages/ProjectsAndTech';

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-200">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/music" element={<Music />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/projectsAndTech" element={<ProjectsAndTech />} />
          <Route path="/others" element={<Others />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
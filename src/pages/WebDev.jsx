import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const sections = [
  {
    id: "background-experience",
    title: "Background & Experience",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Background</h2>
        <p className="mb-6">
          Ever since I was a kid, I’ve been fascinated by computers — from playing video games and browsing the internet to learning all sorts of things online. 
           I knew early on that I wanted a career involving technology, which led me to pursue a degree in Information Technology.<br /><br />

          In 2017, I graduated with a Bachelor of Science in <strong>Information Technology</strong>, majoring in <strong>Software Development</strong>, 
           from the University of Baguio.</p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Developer Work Experience</h2>
        <p className="mb-6">
          I worked as a <strong>Front-End Web Developer</strong> at Qualis Consulting Inc., a startup based in Ortigas, from June 2018 to September 2021. 
           I was responsible for developing web-based systems for U.S. utility cooperatives using <strong>ASP.NET (C#)</strong>, <strong>AngularJS</strong>
           , <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Kendo UI</strong>. I also gained experience in back-end development using <strong>PL/SQL</strong>, 
           and toward the end of my tenure, received additional training in <strong>Angular</strong>.<br/><br/>

          The project I worked on involved collaboration with over 200 members across the U.S., India, and the Philippines. Our team followed 
           the <strong>Agile Scrum Methodology</strong> and used a full suite of Atlassian tools throughout the SDLC: <strong>Jira</strong> for task 
           management, <strong>Crucible</strong> for code reviews, <strong>Bitbucket (with Git)</strong> for version control, and <strong>Confluence</strong> for 
           documentation. We also used <strong>npm</strong> for package management. I also trained newly hired front-end developers, led code reviews for the Philippine team, 
           and gained experience facilitating daily standups and presenting during sprint reviews.<br/><br/>
           
          Additionally, during my college internship, I developed a Computer Laboratory System for my university’s M.I.S. department 
           using <strong>Visual Basic</strong> and <strong>MySQL</strong>.</p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Creative Shift & Dev Comeback</h2>
        <p className="mb-6">
          In September 2021, I took the opportunity to pursue my creative careers full-time. While I stepped away from coding, I continued to sharpen related skills 
           like <strong>problem-solving</strong>, <strong>critical thinking</strong>, and <strong>communication</strong> through music production, streaming, content 
           creation, and more recently, <strong>pattern recognition</strong> in cryptoccurency trading.<br/><br/>

          In June 2025, I decided to take a hiatus from my gaming career and step down from my managerial role in music to shift my focus back to development. I’ve been rebuilding 
           my coding foundation and catching up on modern technologies — mainly <strong>React</strong>, <strong>Angular</strong>, and <strong>Python</strong> — through interactive 
           platforms like freeCodeCamp, solving challenges on LeetCode, leveraging AI tools, and building hands-on projects. This portfolio is one of those projects, built 
           with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>. Scroll down to the Projects section below to learn more.
        </p>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Tech & Tools</h2>
        <p>
          These are the technologies and tools I have experience with as a web developer:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>Languages</strong>: HTML5 / CSS3, JavaScript, TypeScript, C#, Java, VB, Python<br/>
            <strong>Frameworks & Libraries</strong>: React, AngularJS, Angular, ASP.NET, Flask, Kendo UI, Tailwind CSS, Framer Motion<br/>
            <strong>Tools & Platforms</strong>: Git, Bitbucket, npm, Visual Studio Code
          </div>
          <div className="space-y-6">
            <strong>Project Management</strong>: Jira, Confluence, Crucible<br/>
            <strong>Database</strong>: PL/SQL, LINQ, MySQL<br/>
            <strong>AI Tools</strong>: ChatGPT, GitHub Copilot, Gemini<br/>
            <strong>Communication</strong>: Slack, Zoom, Skype
          </div>
        </div>
      </>
    )
  },
  {
    id: "projects",
    title: "Projects",
    content: (
      <>
        <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-200">Apps & Websites</h2>
        <p>
          Here’s a list of personal projects I’ve worked on since June 2025 <i>(sorted from latest to oldest)</i>:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div>
            <a href="https://joshuakitong.github.io/habit-tracker-app" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>Habit Tracker App</strong> <i className="text-xs text-gray-400">(work in progress)</i>
            </a><br/>
            <p className="ml-4 mr-4">
              A habit tracker app built with <strong>React</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, and <strong>Firebase</strong>. It features 
               complete CRUD functionality, allowing users to track their habit progress with data stored and synced in real time via Firebase.
            </p>
            <a href="https://joshuakitong.github.io/angular-to-do-app" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>To-do App</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A to-do app built with <strong>Angular</strong> and <strong>Material Design</strong>, featuring CRUD operations, drag-and-drop functionality, 
               confirmation modals, and toast notifications.
            </p>
            <a href="https://joshuakitong.github.io/piano-app" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>Piano App</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A piano app built with <strong>React</strong> and <strong>Vite</strong>, featuring a virtual keyboard with computer keyboard input and a simple control panel.
            </p>
          </div>
          <div>
            <a href="https://joshuakitong.github.io/portfolio" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>My Portfolio</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A responsive, single-page portfolio built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>, 
               showcasing my diverse background and skills across technical and creative fields.
            </p>
            <a href="https://flask-weather-app-k7b3.onrender.com" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>Weather App</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A weather app built with <strong>Python</strong> and <strong>Flask</strong>, where users are able to search for the weather by city.<br/>
              <i className="text-xs text-gray-400">Note: The app may take a few seconds to load as it’s hosted on Render.com’s free tier.</i>
            </p>
            <a href="https://joshuakitong.github.io/react-tic-tac-toe" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>Tic-Tac-Toe</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              My first <strong>React</strong> project which is based on the 
               official <a href="https://react.dev/learn/tutorial-tic-tac-toe" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">React 
               Tic-Tac-Toe tutorial</a> with additional features and styling.
            </p>
            <a href="https://joshuakitong.github.io/crocheted-by-carisse" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>Croched by Carisse</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              My first website since returning to development: A responsive, static product landing page for Crocheted by Carisse, built with <strong>HTML</strong>
               , <strong>CSS</strong>, and minimal <strong>JavaScript</strong>.
            </p>
          </div>
        </div>
        <p className="mt-2">
          You can also visit my <a href="https://github.com/joshuakitong" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400"><strong>GitHub</strong></a> to 
          view source code and stay updated on future projects.
        </p>
      </>
    )
  }
];

export default function WebDevPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  
  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} style={{ paddingBottom: '1rem' }} className="bg-texture min-h-screen">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-500">Web Development</h1>
        <p className="text-gray-400 mt-2 mx-2">Learn about my interest in computers and my experience as a web developer.</p>
      </div>

      {sections.map((section) => (
        <AnimatedSection key={section.id} section={section} />
      ))}
    </motion.div>
  );
}

function AnimatedSection({ section }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-[#222] border border-white/10 rounded-2xl p-8 w-11/12 max-w-6xl mx-auto mb-8"
    >
      <motion.h2
        className="text-2xl font-bold mb-4 text-blue-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {section.title}
      </motion.h2>
      <motion.div
        className="text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {section.content}
      </motion.div>
    </motion.div>
  );
}

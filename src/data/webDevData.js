import WebDevProj from "../components/shared/project/WebDevProj";
import WebDevTech from "../components/shared/tech/WebDevTech";

export const sections = [
  {
    id: "background-experience",
    title: "Background & Experience",
    content: (
      <>
        <h2 className="header">Background</h2>
        <p className="mb-6">
          Ever since I was a kid, I’ve been fascinated by computers. From playing video games and browsing the internet to learning all sorts of things online. 
           I knew early on that I wanted a career involving technology, which led me to pursue a degree in Information Technology.<br /><br />

          I graduated with a Bachelor of Science in <strong>Information Technology</strong>, majoring in <strong>Software Development</strong>, 
           from the University of Baguio.</p>
        <h2 className="header">Developer Work Experience</h2>
        <p className="mb-6">
          I worked as a <strong>Front-End Web Developer</strong> for over 3 years. I was responsible for developing web-based systems for U.S. utility
           cooperatives using <strong>ASP.NET (C#)</strong>, <strong>AngularJS</strong> , <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Kendo
           UI</strong>. I also gained experience in back-end development using <strong>PL/SQL</strong>, and toward the end of my tenure, received additional
           training in <strong>Angular</strong>.<br/><br/>

          The project I worked on involved collaboration with over 200 members across the U.S., India, and the Philippines. Our team followed 
           the <strong>Agile Scrum Methodology</strong> and used a full suite of Atlassian tools throughout the SDLC: <strong>Jira</strong> for task 
           management, <strong>Crucible</strong> for code reviews, <strong>Bitbucket (with Git)</strong> for version control, and <strong>Confluence</strong> for 
           documentation. We also used <strong>npm</strong> for package management. I also trained newly hired front-end developers, led code reviews for the Philippine team, 
           and gained experience facilitating daily standups and presenting during sprint reviews.
        </p>
        <h2 className="header">Creative Shift & Dev Comeback</h2>
        <p className="mb-6">
          In September 2021, I took the opportunity to pursue my creative careers full-time. While I stepped away from coding, I continued to sharpen related skills 
           like <strong>problem-solving</strong>, <strong>critical thinking</strong>, and <strong>communication</strong> through music production, streaming, content 
           creation, and more recently, <strong>pattern recognition</strong> in cryptoccurency trading.<br/><br/>

          In June 2025, I decided to take a hiatus from my gaming career and step down from my managerial role in music to shift my focus back to development. I’ve been rebuilding 
           my coding foundation and catching up on modern technologies, mainly <strong>React</strong>, <strong>Vue.js</strong>, <strong>Node.js</strong>, and <strong>Python</strong>, through
           building hands-on projects. This portfolio is one of those projects, built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>.
        </p>
        <h2 className="header">Tech & Tools</h2>
        <WebDevTech />
      </>
    )
  },
  {
    id: "projects",
    title: "Projects",
    content: (
      <>
        <h2 className="header">Websites & Apps</h2>
        <WebDevProj />
      </>
    )
  }
];
const WebDevProj = () => {
    return (
        <>
        <p>
          Here’s a list of personal projects I’ve worked on since June 2025 <i>(sorted from latest to oldest)</i>:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div>
            <a href="https://joshuakitong.github.io/vue-calculator-app" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>Calculator App</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A calculator app built with <strong>Vue.js</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>, featuring basic 
               math operations (PEMDAS) and full keyboard support.
            </p>
            <a href="https://joshuakitong.github.io/habit-tracker-app" target="_blank" className="text-blue-400 hover:underline visited:text-purple-400">
              <strong>Habit Tracker App</strong>
            </a><i className="text-xs text-gray-400"> (work in progress)</i><br/>
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
};

export default WebDevProj;
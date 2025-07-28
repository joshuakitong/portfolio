const WebDevProj = () => {
    return (
        <>
        <p>
          Featured Projects:<br/>
        </p>
        <div className="my-2">
          <a href="https://workoutgpt-2d445.web.app" target="_blank" className="link">
            <strong>WorkoutGPT</strong>
          </a><br/>
          <p className="ml-4 mr-4">
            An AI-powered workout generator built with <strong>Nuxt.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, the <strong>Gemini API</strong>, 
             and <strong>Firebase</strong>. It features a multi-step form wizard for personalized workout generation, dynamic session regeneration, CRUD functionalities, 
             user authentication with Google, and data persistence with Firebase Firestore.
          </p>
          <a href="https://cryptoguessr-amber.vercel.app" target="_blank" className="link">
            <strong>CryptoGuessr</strong>
          </a><br/>
          <p className="ml-4 mr-4">
            A cryptocurrency-themed game built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, 
              the <strong>CoinGecko API</strong>, <strong>Vercel</strong>, and <strong>Firebase</strong>. It features three interactive mini-games that challenge
              users on their crypto knowledge through trivia, guessing games, and market data. Scores are stored via Firebase Firestore, with user
              authentication handled by Firebase Authentication, and deployment managed through Vercel.
          </p>
          <a href="https://habitrack-afeb2.web.app" target="_blank" className="link">
            <strong>HabiTrack</strong>
          </a><br/>
          <p className="ml-4 mr-4">
            A habit tracker app built with <strong>React</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, and <strong>Firebase</strong>. It offers
              full CRUD functionality, enabling users to track their habit progress with data stored and synced in real time via Firebase Firestore, with user authentication 
              handled by Firebase Authentication.
          </p>
          <a href="https://joshuakitong.github.io/portfolio" target="_blank" className="link">
            <strong>My Portfolio</strong>
          </a><br/>
          <p className="ml-4 mr-4">
            A responsive, single-page portfolio built with <strong>React</strong>, <strong>CRA</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>. 
              It showcases my diverse background and skills across technical and creative fields.
          </p>
        </div>
        <p>
          Here’s a list of other projects I’ve worked on to learn new technologies <i>(sorted from latest to earliest)</i>:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div>
            <a href="https://joshuakitong.github.io/vue-calculator-app" target="_blank" className="link">
              <strong>Calculator App</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A calculator app built with <strong>Vue.js</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>, featuring basic 
               math operations (PEMDAS) and full keyboard support.
            </p>
            <a href="https://joshuakitong.github.io/angular-to-do-app" target="_blank" className="link">
              <strong>To-do App</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A to-do app built with <strong>Angular</strong> and <strong>Material Design</strong>, featuring full CRUD operations.
            </p>
            <a href="https://joshuakitong.github.io/piano-app" target="_blank" className="link">
              <strong>Piano App</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A piano app built with <strong>React</strong> and <strong>Vite</strong>, featuring a virtual keyboard with computer keyboard input and a simple control panel.
            </p>
          </div>
          <div>
            <a href="https://flask-weather-app-k7b3.onrender.com" target="_blank" className="link">
              <strong>Weather App</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              A weather app built with <strong>Python</strong>, <strong>Flask</strong>, and the <strong>OpenWeatherMap API</strong>, where users are able to search for the weather by city.<br/>
              <i className="note">Note: The app may take a few seconds to load as it’s hosted on Render.com’s free tier.</i>
            </p>
            <a href="https://joshuakitong.github.io/react-tic-tac-toe" target="_blank" className="link">
              <strong>Tic-Tac-Toe</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              My first <strong>React</strong> project which is based on the 
               official <a href="https://react.dev/learn/tutorial-tic-tac-toe" target="_blank" className="link">React 
               Tic-Tac-Toe tutorial</a> with additional features and styling.
            </p>
            <a href="https://joshuakitong.github.io/crocheted-by-carisse" target="_blank" className="link">
              <strong>Croched by Carisse</strong>
            </a><br/>
            <p className="ml-4 mr-4">
              My first website since returning to development: A responsive, static product landing page for Crocheted by Carisse, built with <strong>HTML</strong>
               , <strong>CSS</strong>, and minimal <strong>JavaScript</strong>.
            </p>
          </div>
        </div>
        <p className="mt-2">
          You can also visit my <a href="https://github.com/joshuakitong" target="_blank" className="link"><strong>GitHub</strong></a> to 
          view source code and stay updated on future projects.
        </p>
        </>
    )
};

export default WebDevProj;
import { BrowserRouter } from "react-router-dom";
import { About, Skills, Contact, Hero, Navbar, Projects, StarsCanvas} from "./components";
import { useState } from "react";

function App() {

  const [darkThemeEnabled, setDarkTheme] = useState(true)

  return (
    <BrowserRouter>
      <div className={`relative z-0 bg-primary overflow-hidden`}>
        <div className={`${darkThemeEnabled?'bg-hero-pattern-dark':'bg-hero-pattern-light'} bg-cover bg-no-repeat bg-center cursor w-full`}>
          <div className=" flex flex-col justify-items-center items-center mb-8">
            <Navbar darkThemeEnabled={darkThemeEnabled} />
          </div>
          <Hero darkThemeEnabled={darkThemeEnabled} />
        </div>
        <About darkThemeEnabled={darkThemeEnabled} />
        <Skills darkThemeEnabled={darkThemeEnabled} />
        <Projects darkThemeEnabled={darkThemeEnabled} /> 
        <div className="realtive z-0">
          <Contact darkThemeEnabled={darkThemeEnabled} />
          <StarsCanvas darkThemeEnabled={darkThemeEnabled} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App

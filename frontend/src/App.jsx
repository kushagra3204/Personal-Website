import { BrowserRouter } from "react-router-dom";
import { About, Skills, Contact, Hero, Navbar, Projects, StarsCanvas } from "./components";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [darkThemeEnabled, setDarkTheme] = useState(true);
  const updateThemeState = (updateState) => {
    Cookies.set("darkTheme",updateState,{expires: 7});
    setDarkTheme(updateState);
  };

  useEffect(() => {
    var darkThemeCookie = Cookies.get("darkTheme"); 
    if(darkThemeCookie) {
      if(darkThemeCookie==="true") {
        setDarkTheme(true);
      } else {
        setDarkTheme(false);
      }
    } else {
      Cookies.set("darkTheme",true,{expires: 7});
    }
  },[]);

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${darkThemeEnabled ? 'bg-primary-dark' : 'bg-primary-light'} overflow-hidden`}>
        <div className={`${darkThemeEnabled ? 'bg-hero-pattern-dark' : 'bg-hero-pattern-light'} bg-cover bg-no-repeat bg-center cursor w-full`}>
          <div className="flex flex-col justify-items-center items-center mb-8">
            <Navbar darkThemeEnabled={darkThemeEnabled} setDarkTheme={updateThemeState} />
          </div>
          <Hero darkThemeEnabled={darkThemeEnabled} />
        </div>
        <About darkThemeEnabled={darkThemeEnabled} />
        <Skills darkThemeEnabled={darkThemeEnabled} />
        <Projects darkThemeEnabled={darkThemeEnabled} />
        <div className="relative z-0">
          <Contact darkThemeEnabled={darkThemeEnabled} />
          <StarsCanvas darkThemeEnabled={darkThemeEnabled} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
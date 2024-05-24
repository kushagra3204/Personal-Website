import { BrowserRouter } from "react-router-dom";
import { About, Skills, Contact, Hero, Navbar, Projects, StarsCanvas } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [darkThemeEnabled, setDarkTheme] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/getTheme", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        let { theme } = data;
        setDarkTheme(theme === "dark");
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  const updateThemeState = (updateState) => {
    fetch("http://localhost:4000/api/setTheme", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "theme": updateState ? "dark" : "light" }),
      credentials: 'include'
    })
      .catch(error => {
        console.log("Error: ", error);
      });
    setDarkTheme(updateState);
  };

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
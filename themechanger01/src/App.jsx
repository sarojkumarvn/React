import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import "./index.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  // Actual change in theme


  useEffect(() => {
    document.querySelector("body").classList.remove("light", "dark");
    document.querySelector("body").classList.add(themeMode);
  }, [themeMode]);


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto"><Card /></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

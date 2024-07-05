import { createContext, useEffect, useState } from "react"
import Nav from "./Components/Nav"
import PizzaMenu from "./Components/PizzaMenu"
import { json } from "react-router";
export const ThemeContext = createContext();

function App() {
  const [theme, changeTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "black";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Nav changeTheme={changeTheme} theme={theme} />
        <PizzaMenu />
      </ThemeContext.Provider >
    </>




  )
}

export default App

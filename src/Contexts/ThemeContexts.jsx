import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState("claro");

  function alternarTema() {
    setTema(tema === "claro" ? "escuro" : "claro");
  }

  useEffect(() => {
    if (tema === "claro") {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    } else {
      document.body.style.backgroundColor = "#1e1e1e";
      document.body.style.color = "#ffffff";
    }
  }, [tema]);

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
import React, { useEffect, useState } from 'react'
import { ThemeContext } from '../createContext';

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
   if (savedTheme) {
     return savedTheme;
   }
    return window.matchMedia("(prefers-color-scheme: dark)")
         .matches ? "dark" : "light";
}
interface ThemeProviderProps {
    children: React.ReactNode;
}
//It supplies data (theme, toggleTheme) to the whole app.
const ThemeProvider :React.FC<ThemeProviderProps> = ({ children }) => {
     const [theme, setTheme] = useState(getInitialTheme);
     const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
     }
     useEffect(()=>{
        document.body.className = theme;
        localStorage.setItem('theme', theme);
     },[theme]);
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

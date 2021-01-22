import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext({
//   isDark: false,
//   toggleTheme: () => {},
// });
const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = () => {
    console.log("triggered");
    setIsDark((prev) => !prev);
  };
  const theme = isDark ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark, theme]);

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

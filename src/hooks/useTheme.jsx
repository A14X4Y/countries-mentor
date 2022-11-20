import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme !== "dark") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    }
    localStorage.setItem("theme", "light");
    setTheme("light");
  };


  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;

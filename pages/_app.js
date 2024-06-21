import { useCallback, useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("");

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("");
      window.localStorage.setItem("theme", "");
      document.querySelector("html").classList.remove("dark");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.querySelector("html").classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      document.querySelector("html").classList.add("dark");
    } else {
      setTheme("");
      document.querySelector("html").classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default MyApp;

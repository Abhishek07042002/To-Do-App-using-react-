import React, { useState, useEffect } from "react";
import Aside from "./aside";
import Task from "./task";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [category, setCategory] = useState("All");

  // Load dark mode preference from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Apply dark mode class to <body> whenever darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container-fluid p-0">
        <div className="row">
          <Aside setCategory={setCategory} />
          <Task category={category} />
        </div>
      </div>
    </>
  );
}

export default App;

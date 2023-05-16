import React, { useState } from "react";
import { AppWrapper } from "./App.style";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AboutPage from "./Pages/AboutPage/AboutPage";
import PortofolioPage from "./Pages/PortofolioPage/PortofolioPage";
import Shapes from "./Components/Shapes/Shapes";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <AppWrapper className={theme ? "light" : "dark"}>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Shapes />
    </AppWrapper>
  );
}

export default App;

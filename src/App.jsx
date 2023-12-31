import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Themes from "./components/themes/Themes";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/turnos" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

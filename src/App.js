import React from "react";
import "./App.css";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Resume from "./pages/Resume"; // Import the Resume component

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/resume" element={<Resume />} /> {/* Add this route for Resume */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

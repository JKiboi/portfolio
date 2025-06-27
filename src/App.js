import React from "react";
import "./App.css";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./styles/GlobalStyles.css" // Import Global styles

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
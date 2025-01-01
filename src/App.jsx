// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import './index.css'; // Estilos adicionais
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navigation />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

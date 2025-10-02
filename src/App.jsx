
import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

// import pages 

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import Header from "./components/header"; 

function App()
{
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
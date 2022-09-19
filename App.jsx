import React from 'react'
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const App = () => {
  return (
<>
<BrowserRouter>
<Navbar />

<Routes>
  {/* <Route path="/" element={<h1>This is my home page</h1>} /> */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/service" element={<Services />} />
  <Route path="/contact" element={<Contact />} />


  <Route path="*" element={<h3>ERROR 404: Page Not Found</h3>} />
</Routes>
</BrowserRouter>
</>
  )
}

export default App;
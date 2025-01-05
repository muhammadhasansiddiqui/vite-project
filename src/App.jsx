import React from "react";
import "flowbite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurStory from "./components/OurStory";
import Services from "./components/Services";
import Reserve from "./components/Reserve";
import Navbar from "./components/Navbar";
import Recomm from "./components/recom";
import Offer from "./components/offer";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
       <Navbar   />
      <Hero     />
     <OurStory />
      <Services />
      <Offer    />
      <Reserve  />
      <Recomm   />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </Router>
  );
}

export default App;

import React from 'react';
import 'flowbite';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Work from './pages/work';
import Services from './components/Services';
import Offer from './components/offer';

function App() {
  return (
    <Router>




      <Navbar />
      
      <Hero/>
      <OurStory/>
      <Services  />
      <Offer/>



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

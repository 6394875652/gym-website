import React from "react";
import { Routes, Route } from "react-router-dom";
import './components/Navbar.css'
import './components/Banner.css'
import './components/GymClass.css'
import './components/About.css'
import './components/ChoseUs.css'
import './components/Team.css'
import './components/Subscribe.css'
import './components/MonthlyPlan.css'
import './components/BMI.css'
import './components/Testimonial.css'
import './components/Footer.css'
import './components/PageHeader.css'
import './components/Features.css'
import './components/Services.css'
import './components/Contact.css'

import './responsive.css'

import Navbar from './components/Navbar';
import HomeNav from "./routes/HomeNav";
import AboutNav from "./routes/AboutNav";
import FeaturesNav from "./routes/FeaturesNav";
import ContactNav from "./routes/ContactNav";
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<HomeNav />}></Route>
        <Route path="/about" element={<AboutNav />}></Route>
        <Route path="/features" element={<FeaturesNav />}></Route>
        <Route path="/contact" element={<ContactNav />}></Route>

      </Routes>

      <Footer />

    </>
  );
}

export default App;

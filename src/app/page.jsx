
import Gallery from "../app/components/Gallery";
import Location from "../app/components/Location";
import Team from "../app/components/Team";
import FAQ from "../app/components/FAQ";
import Info from "../app/components/Info";
import Footer from "../app/components/Footer";
import Navbar from "../app/components/Navbar";
import Services from "../app/components/Services";
import Testimonials from "../app/components/Testimonials";
import Home from "../app/components/Home";
import React from "react";

export default function Page() {
  return (
      <div className='bg-fuchsia-200'>
        <Navbar/>
        <div id="home"><Home/></div>
        <div id="services"><Services/></div>
        <div id="location"><Location/></div>
        <div id="testimonials"><Testimonials/></div>
        <div id="gallery"><Gallery/></div>
        <div id="team"><Team/></div>
        {/* <div id="contact"><Contact/></div> */}
        <div id="faq"><FAQ/></div>
        <div id="info"><Info/></div>
        <Footer/>
      </div>
  );
}

import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";


import Footer from "../components/Sections/Footer"
import Projects from "../components/Sections/Projects";


export default function Landing() {
  return (
    <>
      <TopNavbar/>
      <br/>
      <br/>
      <br/>
      <br/><br/>
      <Projects className="text-center"/>
      <Footer />
    </>
  );
}
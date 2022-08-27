import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Contact from "../components/Sections/Contacts";

import Footer from "../components/Sections/Footer"


export default function Landing() {
  return (
    <>
      <TopNavbar/>
     <Contact/>
      <Footer />
    </>
  );
}
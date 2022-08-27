import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";


import Footer from "../components/Sections/Footer"
import Map from "../components/Sections/Maps";


export default function Landing() {
  return (
    <>
      <TopNavbar/>
     <Map/>
      <Footer />
    </>
  );
}
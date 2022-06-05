import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";

import Footer from "../components/Sections/Footer"
import Sustainability from "../components/Sections/Sustainability";

export default function Landing() {
  return (
    <>
      <TopNavbar />
     <Sustainability/>
      <Footer />
    </>
  );
}
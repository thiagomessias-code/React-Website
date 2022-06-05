import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";

import Footer from "../components/Sections/Footer"
import { Video } from "../components/Sections/VideoSection";
import Banner from "../container/about";

export default function Landing() {
  return (
    <>
      <TopNavbar />
     <Banner/>
     <Video/>
      <Footer />
    </>
  );
}
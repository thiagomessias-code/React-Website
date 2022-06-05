import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Footer from "../components/Sections/Footer"
import Team from "../components/Sections/Team";
import { Video } from "../components/Sections/VideoSection";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Team/>
      <Video/>
      <Footer />
    </>
  );
}
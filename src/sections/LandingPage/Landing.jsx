import React from "react";

// import VismeForm from "src/components/Sections/Contacts";

// import Blog from "../../components/Sections/Blog";
import Footer from "../../components/Sections/Footer"
import Header from "../../components/Sections/Header";
// Sections
import TopNavbar from "../../components/Nav/TopNavbar";
import Pricing from "../../components/Sections/Pricing";
import Contact from "../../components/Sections/Contact";
import Services from "../../components/Sections/Services";
import Projects from "../../components/Sections/Projects";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      {/* <Blog /> */}
      <Pricing />
      <Contact/>
      {/* <VismeForm/> */}
      <Footer />
    </>
  );
}



"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../components/Home/Main";
import Services from "../components/Services/Services";
import OurService from "../components/OurService/OurService";
import Strongpoint from "../components/StrongPiont/Strongpoint";
import About from "/components/About/About";
import NavbarHeader from "/components/navbar/Navbar";
import Scrolltop from "/components/Scrolltop/Scrolltop";
import Footer from "../components/Footer/Footer";
import Blogs from "/components/Blogs/Blogs";

export default function Home() {
  return (
    <>
      <Scrolltop />
      <NavbarHeader />
      <Main />
      <About />
      <Services />
      <OurService />      
      <Blogs/>

      <Strongpoint />
      <Footer />
    </>
  );
}

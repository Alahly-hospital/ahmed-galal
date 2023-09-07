<<<<<<< HEAD
'use client';

import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './home/Main';
import Services from './services/Services';
import OurService from './OurService/OurService';
import Strongpoint from './StrongPiont/Strongpoint';
import About from '/components/About/About';
import NavbarHeader from '/components/navbar/Navbar';
import Scrolltop from '/components/Scrolltop/Scrolltop';
import Footer from './footer/Footer';
import { Providers } from './../redux/Provider';

export default function Home() {
=======
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
>>>>>>> dec0703fb84754be05710d153adff88361eeff79

export default function Home() {
  return (
    <>
      <Scrolltop />
      <NavbarHeader />
      <Main />
      <About />
      <Services />     
       <Blogs/>

      <OurService />      

      <Strongpoint />
      <Footer />
    </>
  );
}

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

  return (
    <>
    <Scrolltop/>
      <NavbarHeader />
      <Main />
      <About />
      <Services />
      <OurService />
      <Strongpoint />
      <Footer />
    </>
  );
}

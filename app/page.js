'use client';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '/components/About/About';
import NavbarHeader from '/components/navbar/Navbar';
import Scrolltop from '/components/Scrolltop/Scrolltop';
import { Providers } from './../redux/Provider';
import OurService from './../components/OurService/OurService';
import Strongpoint from '@/components/StrongPiont/Strongpoint';
import Footer from '@/components/Footer/Footer';
import Main from '@/components/Home/Main';
import Services from './../components/Services/Services';
import Blogs from '@/components/Blogs/Blogs';

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

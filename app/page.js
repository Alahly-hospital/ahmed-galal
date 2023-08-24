"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Container, Row } from 'react-bootstrap'
import NavbarHeader from '../components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './home/Main';
import Services from './services/Services'
import OurService from './OurService/OurService'
import Footer from './footer/Footer'
import Strongpoint from './StrongPiont/Strongpoint'

export default function Home() {
  return (
  <>
    <NavbarHeader/>
    <Main/>
    <Services/>
    <OurService/>
    <Strongpoint/>
    <Footer/>
  </>

  )
}

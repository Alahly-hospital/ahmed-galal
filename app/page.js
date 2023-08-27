"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './home/Main';
import Services from './services/Services'
import OurService from './OurService/OurService'
import Strongpoint from './StrongPiont/Strongpoint'
import About from '@/components/About/About';

export default function Home() {
  return (
  <>
    <Main/>
    <About/>
    <Services/>
    <OurService/>
    <Strongpoint/>
  </>

  )
}

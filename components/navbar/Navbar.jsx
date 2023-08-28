"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.scss"
import Logo from "../../assets/Logo.png"
import Link from 'next/link';

function NavbarHeader() {
    console.log(Logo);
  return (
    <Navbar expand="lg" id='navbar-header' >
      <Container style={{flexDirection:"row-reverse"}}>
        <Navbar.Brand href="/" ><img src={Logo.src} height="70px" width="70px" alt="doctor-ahmed-galal-logo" className='header-text'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-start'>
          <Nav className='text-right' style={{direction:"rtl"}}>
            <Nav> <Link href="/" className="nav-link">الرئيسية</Link></Nav>
            <Nav><Link href="contact" className="nav-link">تواصل بنا</Link></Nav>
            <Nav><Link href="serviceslist" className="nav-link">الخدمات</Link></Nav>
            <Nav><Link href="reservation" className="nav-link">الحجز</Link></Nav>
            <Nav><Link href="login" className="nav-link">تسجيل الدخول</Link></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
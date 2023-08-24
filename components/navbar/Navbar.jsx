"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.scss"
import Logo from "../../assets/Logo.png"
function NavbarHeader() {
    console.log(Logo);
  return (
    <Navbar expand="lg" id='navbar-header'>
      <Container style={{flexDirection:"row-reverse"}}>
        <Navbar.Brand href="#home" ><img src={Logo.src} height="70px" width="70px" alt="doctor-ahmed-galal-logo" className='header-text'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-start'>
          <Nav className='text-right' style={{direction:"rtl"}}>
            <Nav.Link href="#home">تواصل بنا</Nav.Link>
            <Nav.Link href="#home">الخدمات</Nav.Link>
            <Nav.Link href="#home">الحجز</Nav.Link>
            <Nav.Link href="#home">تسجيل الدخول</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
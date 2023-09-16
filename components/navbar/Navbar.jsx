"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.scss"
import Logo from "../../assets/Logo.png"
import Link from 'next/link';
import { useEffect } from 'react';
import { fetchUserData, userLogut } from '@/redux/reducers/user';
import { useDispatch , useSelector } from 'react-redux';

function NavbarHeader() {

  const dispatch = useDispatch()
  let logedin = useSelector((state)=>state.user.value.logedin)
  let user = useSelector((state)=>state.user.value.data)
  useEffect(()=>{
    dispatch(fetchUserData())
  },[])
    return (
    <Navbar expand="lg" id='navbar-header' >
      <Container style={{flexDirection:"row-reverse"}}>
      <Link href="/" prefetch   className="nav-link"> <Navbar.Brand  ><img prefetch src={Logo.src} height="70px" width="70px" alt="doctor-ahmed-galal-logo" className='header-text'/></Navbar.Brand></Link>   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-start'>
          <Nav className='text-right' style={{direction:"rtl"}}>
            <Nav> <Link href="/" prefetch className="nav-link">الرئيسية</Link></Nav>
            <Nav><Link href="/contact"prefetch className="nav-link">تواصل بنا</Link></Nav>
            <Nav><Link href="/serviceslist"prefetch className="nav-link">الخدمات  </Link></Nav>
            <Nav><Link href="/blogs"prefetch className="nav-link"> المدونات</Link></Nav>
            {logedin&&<Nav><Link href="/reservation"prefetch className="nav-link">احجز الان </Link></Nav>}
            { logedin&&<Nav><Link href="/reservation/userreservation"prefetch className="nav-link">الحجوزات</Link></Nav>}
            {logedin&&<Nav> <Link href="/settings" prefetch className="nav-link">الاعدادات</Link></Nav>}
           {!logedin&& <Nav><Link href="/login" prefetch className="nav-link">تسجيل الدخول</Link></Nav>}
           {!logedin&& <Nav><Link href="/register" prefetch className="nav-link"> أنشئ حسابك</Link></Nav>  }
            {logedin&&<Nav onClick={()=>dispatch(userLogut())}><Link href="/ " prefetch className="nav-link"> تسجيل الخروج </Link></Nav>}  
            {logedin&&user.isAdmin &&<Nav> <Link href="/adminpanel/reservationstatus" prefetch   className="nav-link">صفحة الادمن</Link></Nav>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;          
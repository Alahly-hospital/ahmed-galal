'use client';
import React, { useEffect }  from 'react';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadingOff } from '@/redux/reducers/user';
import { Loading } from '@/components/Loading/Loading';
import ReactGA from 'react-ga';
// import { useRouter } from 'next/navigation';

export default function Home() {
  const loading= useSelector((state)=>state.user.value.loading)
  // const router = useRouter();

  // useEffect(() => {
  //   // Initialize Google Analytics
  //   ReactGA.initialize('G-EV8K58JYWP');

  //   // Track initial pageview
  //   ReactGA.pageview(window.location.pathname + window.location.search);

  //   // Set up a listener for route changes
  //   const handleRouteChange = (url) => {
  //     ReactGA.pageview(url);
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   // Remove listener when the component is unmounted
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);


  const dispatch = useDispatch()
  useEffect(()=>{ 
    setTimeout(()=>{
      dispatch(loadingOff())
    },500)
  },[])
  return (
    <>
      <Scrolltop />
      <NavbarHeader />
        {
          loading?
            <Loading/>:
      <>
        <Main />
        <About />
        <Services />     
        <Blogs/>

        {/* <OurService />       */}

        <Strongpoint />
        <Footer />
      </>

}
</>
  );
}

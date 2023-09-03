'use client'
import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './scrolltop.scss'
export default function Scrolltop() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowScrollToTop(true);
        } else {
          setShowScrollToTop(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <> 
      {showScrollToTop && ( 
        <BsFillArrowUpCircleFill
          onClick={scrollToTop}
          className="scroll-to-top-button fs-2"
        />
      )}
    </>
  )
}

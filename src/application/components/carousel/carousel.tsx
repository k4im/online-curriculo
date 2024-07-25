import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import './carousel.css';

export function Carousel()
{
    const wrapperRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          animateCarrousel(wrapperRef);
        },
          wrapperRef
        );
    
        return () => ctx.revert();
      }, [])
    return <>
      <div id='carousel' className="overflow-hidden carrousel" ref={wrapperRef}>
        <div className="wrapper">
          <p className="carrousel-text text-white text-center">*</p>
          <p className="carrousel-text text-white text-center">Asp.NetCore</p>
          <p className="carrousel-text text-white text-center">*</p>
          <p className="carrousel-text text-white text-center">Node.Js</p>
          <p className="carrousel-text text-white text-center">*</p>
          <p className="carrousel-text text-white text-center">Angular</p>
          <p className="carrousel-text text-white text-center">*</p>
          <p className="carrousel-text text-white text-center">React</p>
          <p className="carrousel-text text-white text-center">*</p>
          <p className="carrousel-text text-white text-center">Docker</p>
          <p className="carrousel-text text-white text-center">*</p>
          <p className="carrousel-text text-white text-center">Linux</p>
          <p className="carrousel-text text-white text-center">*</p>
          <p className="carrousel-text text-white text-center">CI/CD</p>
          <p className="carrousel-text text-white text-center">*</p>
          <p className="carrousel-text text-white text-center">Rust</p>
          <p className="carrousel-text text-white text-center">*</p>
        </div>
      </div>    
    </>
}

function animateCarrousel(wrapperRef: any) {
    const wrapper = wrapperRef.current;
    const slides = Array.from(wrapper.children);
    //@ts-ignore
    const slidesCopy = [...slides].map(el => el.cloneNode(true));
    slidesCopy.forEach(el => wrapper.appendChild(el));
    //@ts-ignore
    const slideWidth = slides[0].offsetWidth; // Assuming all slides have the same width
    const totalWidth = slides.length * slideWidth;
  
    const carouselTL = gsap.timeline({ repeat: -1 });
    // carouselTL.fromTo('.wrapper', { x: totalWidth * 0.7 }, { x: -totalWidth * 0.3, duration: 20, ease: 'linear' })
    carouselTL.fromTo('.wrapper', { x: totalWidth * 0.5  }, { x: -totalWidth * 0.5, duration: 20, ease: 'linear' })
    ;
  
}
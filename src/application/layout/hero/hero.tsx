import Typed from 'typed.js';
import './hero.css'
import React, { useLayoutEffect, useRef } from 'react';
import { CvButton } from '../../components/button/button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export function Hero() {
  function createPreloader() {
    const preloaderTexts =
      [
        '.preloader-text-1',
        '.preloader-text-2',
        '.preloader-text-3',
        '.preloader-text-4',
        '.preloader-text-5',
        '.preloader-text-6',
        '.preloader-text-7',
        '.preloader-text-8',
      ]
    const preloader = gsap.timeline()

    preloaderTexts.forEach(element => {
      console.log(element)
      preloader.from(element, {
        opacity: 0,
        y: '+=30',
        delay: 0.5,
        duration: 1,
        onStart: () => { document.querySelector(element)?.classList.remove('hidden') }
      })
        .to(element, {
          opacity: 0,
          delay: 0.5,
          alpha: 1,
          translateY: -25,
          duration: 1,
          onComplete: () => { document.querySelector(element)?.classList.add('hidden') }
        })
    }

    )
    preloader.to('.preloader', {
      yPercent: '-100',
      duration: 1
    })
  }
  function animateIcons() {
    const introLoader = gsap.timeline();

    introLoader.from('.icon-menu', {
      transform: 'translateY(50px)',
      stagger: 0.5,
      delay: 25,
      duration: 0.8
    })
      .to('.icon-menu', {
        transform: 'translateY(0)',
        stagger: 0.5,
        duration: 0.8
      })
  }
  function animateNavMenu() {
    const introLoader = gsap.timeline();

    introLoader.from('.nav-item-link', {
      transform: 'translateY(50px)',
      stagger: 0.5,
      delay: 25,
      duration: 0.8
    }).to('.nav-item-link', {
      transform: 'translateY(0)',
      stagger: 0.5,
      duration: 0.8
    })
  }
  function animateSlogan() {
    const introLoader = gsap.timeline();

    introLoader.from('.h2-container', {
      opacity: 0,
      transform: 'translateY(80px)',
      delay: 26.2,
      duration: 0.5
    }).to('.h2-container', {
      transform: 'translateY(0)',
    })

    introLoader.from('.p-container', {
      transform: 'translateY(180px)',
      stagger: 0.5,
      duration: 0.8
    }).to('.p-container', {
      transform: 'translateY(0)',
      stagger: 0.5,
      duration: 0.8
    })
  }
  function animateButton() {
    const animateBackground = gsap.timeline({repeat: -1});
    animateBackground.from('.btn', {
      opacity: 0,
      delay: 28
    })
    animateBackground.to('.btn', {
      duration: 2,
      background: "linear-gradient(100deg, #A855F7, #EC4899)",
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    })
  }
  function animateScroll() {
    const animateScroll = gsap.timeline({repeat: -1});
    animateScroll.from('.scroll-container', {
      opacity: 0,
      delay: 28
    })
    animateScroll.to('.scroll-ball', {
      duration: 2,
      transform: 'translateY(10px)',
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    })
  }
  const scrollRef = useRef(null);
  const buttonRef = useRef(null);
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      createPreloader();
      animateIcons();
      animateNavMenu();
      animateSlogan();
      animateButton();
      animateScroll();
    },
      comp
    );

    return () => ctx.revert();
  },
    [])
  return <>
    <div ref={comp} className="relative">
      {/* COLOCAR ABSOLUTE */}
      <section className='preloader absolute overflow-hidden z-10 h-screen w-screen bg-gray-950 flex justify-center items-center flex-col'>
        <p className='hidden text-loader preloader-text-1 text-3xl text-white'>Bem vindo.</p>
        <p className='hidden text-loader preloader-text-2 text-3xl text-white'>Me chamo João Victor.</p>
        <p className='hidden text-loader preloader-text-3 text-3xl text-white'>Sou um dev full stack.</p>
        <p className='hidden text-loader preloader-text-4 text-3xl text-white'>Trabalho com:</p>
        <p className='hidden text-loader preloader-text-5 text-3xl text-white'>Angular.</p>
        <p className='hidden text-loader preloader-text-6 text-3xl text-white'>React.</p>
        <p className='hidden text-loader preloader-text-7 text-3xl text-white'>Node.js.</p>
        <p className='hidden text-loader preloader-text-8 text-3xl text-white'>C# Asp.netCore.</p>
      </section>
      <section id='hero-section' className='z-9 bg-gradient-to-r from-gray-950 to-gray-900 h-screen w-screen flex flex-col justify-start gap-64 items-center'>
        <div className="flex w-full">
          <div className="nav-icons flex justify-center w-1/2 h-20 mt-10">
          </div>

          <div id='nav-menu' className="nav-bar w-full h-20 flex justify-around items-center mt-10">
            <ul className='nav text-white flex flex-row gap-5 text-center mb-3 overflow-hidden'>
              <li className='nav-item-link overflow-hidden'>
                <a className='nav-link overflow-hidden' href="">HOME</a></li>
              <li className='nav-item-link overflow-hidden'>
                <a className='nav-link overflow-hidden' href="">CONTATO</a></li>
              <li className='nav-item-link overflow-hidden'>
                <a className='nav-link overflow-hidden' href="">SOBRE</a></li>
            </ul>
          </div>

          <div className="nav-icons flex justify-centers items-center w-1/2 h-20 mt-10">
            <ul id='list-icons' className='nav text-white flex flex-row gap-10 text-center mb-3'>
              <li className='nav-item overflow-hidden'>
                <a className='text-center overflow-hidden' href="">
                  <FontAwesomeIcon icon={faGithub} className='h-7 text-white mt-6 icon-menu' />
                </a>
              </li>
              <li className='nav-item overflow-hidden'>
                <a className='overflow-hidden' href="">
                  <FontAwesomeIcon icon={faLinkedin} className='h-7 text-white mt-6 icon-menu' />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-3/5 h-1/2 flex flex-col gap-5 items-center justify-center overflow-hidden">
          <div className="hero-slogan overflow-hidden flex flex-col items-center">
            <h2 className='text-white text-center h2-container'>
              <span className='text-5xl hero-h2'>Desenvolvedor de software full stack.</span>
            </h2>
            <p className='text-white text-3xl text-center p-container overflow-hidden mt-10'>
              <span className='text-3xl hero-slogan-p'>Impulsionando empresas com tecnologia.</span>
            </p>
            <button  ref={buttonRef} type="button" 
            className="
              btn
              text-white 
              hover:bg-gradient-to-l 
              focus:outline-none 
              font-medium 
              rounded-lg 
              text-lg 
              px-3 
              py-2.5 
              text-center 
              me-2 
              mb-2
              mt-10
              "
              style={{background: "linear-gradient(100deg, #F9A8D4, #EC4899)"}}
            >
              Baixar Curriculo
            </button>
          </div>
        </div>

        <div className="scroll-container" ref={scrollRef}>
          <div className="scroll-ball"></div>
        </div>
      </section>
    </div>
  </>
}
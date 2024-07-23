import Typed from 'typed.js';
import './hero.css'
import React, { useLayoutEffect, useRef } from 'react';
import { CvButton } from '../../components/button/button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


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

    preloaderTexts.forEach(element => 
      {
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
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      createPreloader();
    },
      comp
    );

    return () => ctx.revert();
  },
    [])
  return <>
    <div ref={comp} className="relative">
      <section className='preloader h-screen w-screen bg-gray-950 flex justify-center items-center flex-col'>
          <p className='hidden text-loader preloader-text-1 text-3xl text-white'>Bem vindo.</p>
          <p className='hidden text-loader preloader-text-2 text-3xl text-white'>Me chamo João Victor.</p>
          <p className='hidden text-loader preloader-text-3 text-3xl text-white'>Sou um dev full stack.</p>
          <p className='hidden text-loader preloader-text-4 text-3xl text-white'>Trabalho com:</p>
          <p className='hidden text-loader preloader-text-5 text-3xl text-white'>Angular.</p>
          <p className='hidden text-loader preloader-text-6 text-3xl text-white'>React.</p>
          <p className='hidden text-loader preloader-text-7 text-3xl text-white'>Node.js.</p>
          <p className='hidden text-loader preloader-text-8 text-3xl text-white'>C# Asp.netCore.</p>
      </section>
    </div>
  </>
}
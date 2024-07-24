import './main.css'
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import { Preloader } from '../preloader/preloader';
import { Hero } from '../hero/hero';

export function MainApp() 
{
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      createPreloader();
    },
      comp
    );
    return () => ctx.revert();
  }, [])


  useLayoutEffect(() => {
    animateScrollIntro();
    return () => gsap.killTweensOf('#intro-slide')
  }, [])

  useEffect(() => {
    const locomotive = new LocomotiveScroll();
    locomotive.init();
  })
  return <>
    <div ref={comp} className="relative">
      <Preloader></Preloader>
      <Hero></Hero>
    </div>
  </>
}

/**
 * Animar preload
 * 
 * função utilizada para animar tela
 * de preload da pagina.
 */
function createPreloader() {
  const preloaderTexts =
    [
      '.preloader-text-1',
      '.preloader-text-2',
      // '.preloader-text-3',
      // '.preloader-text-4',
      // '.preloader-text-5',
      // '.preloader-text-6',
      // '.preloader-text-7',
      // '.preloader-text-8',
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
    duration: 1,
    onComplete: () => { 
      document.querySelector('.preloader')?.classList.toggle('hidden') 
      document.getElementById('sobre')?.classList.toggle('hidden') 
    }
  })
}

/**
 * Animar scroll Hero.
 * 
 * Função utilizada para animar a saida
 * da hero ao rodar para a pagina de sobre.
 */
function animateScrollIntro() {
  gsap.registerPlugin(ScrollTrigger);
  const animateScrollSobre = gsap.timeline(
    {
      scrollTrigger: {
        trigger: '#hero-section',
        start: '330px 300px',
        end: 'bottom 400px',
        scrub: true,
      }
    }
  );
  animateScrollSobre.to(['#nav-menu', '#nav-icons', '#slogan', '#scroller'], {
    ease: 'ease-in-out', // Corrigida a propriedade ease      
    opacity: 0,
    transform: 'translateY(50px)',
    duration: 2,
    delay: 0.5,
    alpha: 1
  })
}
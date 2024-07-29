import './main.css'
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Preloader } from '../preloader/preloader';
import { Hero } from '../hero/hero';
import { Experience } from '../experience/experience';

export function MainApp() 
{
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      createPreloader();
    },
      comp
    );
    return () => {
      gsap.killTweensOf('.preload-text-1');
      gsap.killTweensOf('.preload-text-2');
      ctx.revert();
    }
  }, [])


  useLayoutEffect(() => {
    animateScrollIntro();
    return () => gsap.killTweensOf('#intro-slide')
  }, [])

  return <>
    <div ref={comp} className="relative">
      <Preloader></Preloader>
      <Hero></Hero>
      <Experience></Experience>
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
    ]
  const preloader = gsap.timeline()

  preloaderTexts.forEach(element => {
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
      document.getElementById('oq-fiz')?.classList.toggle('hidden') 
      document.getElementById('xp')?.classList.toggle('hidden') 
      document.getElementById('container-xp')?.classList.toggle('hidden') 
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
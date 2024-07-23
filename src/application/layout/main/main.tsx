import './main.css'
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import { Preloader } from '../preloader/preloader';
import { Hero } from '../hero/hero';

export function MainApp() {
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
  function animateIcons() {
    const introLoader = gsap.timeline();

    introLoader.from('.icon-menu', {
      transform: 'translateY(50px)',
      stagger: 0.5,
      delay: 6.5,
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
      delay: 6.5,
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
      delay: 6.5,
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
    const animateBackground = gsap.timeline({
      repeat: -1
    });
    animateBackground.from('.btn', {
      opacity: 0,
      delay: 8
    })
    animateBackground.to('.btn', {
      duration: 2,
      background: "linear-gradient(100deg, #A855F7, #EC4899)",
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    })
  }
  function animateScrollSobre() {
    gsap.registerPlugin(ScrollTrigger);
    const animateScrollSobre = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '#sobre',
          start: '-200px 300px',
          end: '200px 400px',
          scrub: true,
        }
      }
    );
    animateScrollSobre.to('#sobre-mim', {
      ease: 'ease-in-out', // Corrigida a propriedade ease      
      opacity: 1,
      duration: 2,
      delay: 0.5,
      alpha: 1
    })
  }

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
  function animateScroll() {
    const animateScroll = gsap.timeline({ repeat: -1 });
    animateScroll.from('.scroll-container', {
      opacity: 0,
      delay: 8
    })
    animateScroll.to('.scroll-ball', {
      duration: 2,
      transform: 'translateY(10px)',
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    })
  }
  function animateScrollInfo() {
    gsap.registerPlugin(ScrollTrigger);
    const animateScrollSobre = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '#info',
          start: '850px 300px',
          end: '1150px 400pxpx',
          scrub: true,
        }
      }
    );
    const infoList = ['#info-1', '#info-2', '#info-3'];
    infoList.forEach(info => {
      animateScrollSobre.to(info, {
        ease: 'ease-in-out', // Corrigida a propriedade ease      
        opacity: 1,
        transform: 'translateY(0px)',
        duration: 3,
        delay: 5,
        alpha: 1
      })
  
    })
  }
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
  }, [])


  useLayoutEffect(() => {
    animateScrollSobre();
    animateScrollIntro();
    animateScrollInfo();
    return () => gsap.killTweensOf('#sobre-mim')
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
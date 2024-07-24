import { useLayoutEffect, useRef } from "react";
import { NavBar } from "../../components/navbar/navbar";
import { About } from "../about/about";
import './hero.css'
import gsap from 'gsap';
import { Carousel } from "../../components/carousel/carousel";

export function Hero() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animateIcons();
      animateNavMenu();
      animateSlogan();
      animateButton();
      animateScroll();
      showCarousel();
    },
      comp
    );

    return () => ctx.revert();
  }, [])
  return <>
    <section ref={comp} id='hero-section' className='z-10 bg-gradient-to-r from-gray-950 to-gray-900 h-screen w-screen flex flex-col justify-start gap-64 items-center'>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <div id='slogan' className="w-3/5 h-1/2 flex flex-col gap-5 items-center justify-center overflow-hidden">
        <div className="hero-slogan overflow-hidden flex flex-col items-center">
          <h2 className='text-white text-center h2-container'>
            <span className='hero-h2'>Desenvolvedor de software full stack.</span>
          </h2>
          <p className='text-white text-3xl text-center p-container overflow-hidden mt-10'>
            <span className='text-3xl hero-slogan-p'>Impulsionando empresas com tecnologia.</span>
          </p>
          <a
            href='https://drive.google.com/file/d/1UsnzUHrILF03M3sRgS8ZdGZgff78kUGU/view'
            type="button"
            className="
                btn
                text-white 
                hover:bg-gradient-to-l 
                focus:outline-none 
                font-medium 
                rounded-lg 
                px-3 
                py-2.5 
                text-center 
                me-2 
                mb-2
                mt-10
                flex 
                justify-center
                items-center
                "
            style={{ background: "linear-gradient(100deg, #F9A8D4, #EC4899)" }}
          >
            <p className='text-lg text-center text-white'>Baixar Curriculo</p>
          </a>
        </div>
      </div>

      <div id='scroller' className="scroll-container">
        <div className="scroll-ball"></div>
      </div>

      <About></About>
    </section>
  </>
}

/**
 * Animar icons
 * 
 * função utilizada para animar entrada
 * dos icones no top esquerdo da tela.
 * 
 */
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
/**
 * Animar navMenu
 * 
 * Função utilizada para animar
 * a entrada do navmenu.
 */
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
/**
 * Função utilizada para realizar a animação
 * do slogan presente na hero.
 * 
 */
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
/**
 * Animar button
 * 
 * função utilizada para animar o background do button
 * fazendo com que fique alterando o linear gradient em loop.
 */
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
/**
 * Animar Scroll.
 * 
 * Função utilizada
 * para animar o scroll container 
 * que fica abaixo do botão de download de curriculo.
 */
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
function showCarousel() {
  const carouselTL = gsap.timeline();
  carouselTL.fromTo('#carousel', {opacity: 0}, {opacity: 1, duration: 1.5, delay: 6.8});
}

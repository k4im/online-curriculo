import { useLayoutEffect } from 'react';
import './about.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {

    useLayoutEffect(() => {
        animateScrollSobre();
        animateScrollInfo();
        return () => gsap.killTweensOf('#sobre-mim')
      }, [])
    
    return <>
        <section id='sobre' className="hidden overflow-hidden container-sobre h-screen w-screen flex gap-6 flex-col justify-start items-center">
            <h1 id='sobre-mim' className='text-4xl text-white mb-10'>SOBRE MIM</h1>
            <div id='info' className=" flex flex-col gap-2 justify-center text-center items-center w-3/5">
                <p id='info-1' className='text-reveal text-5xl text-white'>Me chamo João Victor, tenho <span className='text-purple-500 text-5xl'>24 anos</span>,
                    trabalho com TI a <span className='text-purple-500 text-5xl'>2.5 anos,</span> atualmente estou cursando
                    <span className='text-purple-500 text-5xl'> Analise e desenvolvimento de sistemas,</span> onde tive contato com diversas tecnologias
                    e metodologias.</p>
                <p id='info-2' className='text-reveal text-5xl text-white mt-8'>Trabalhei como analista de infraestrura durante<span className='text-purple-500 text-5xl'>1 ano,</span> onde tinha como responsabilidade estar atuando como <span className='text-purple-500 text-5xl'>SysAdmin</span>, além de estar
                    auxiliando a equipe de desenvolvimento com a parte de <span className='text-purple-500 text-5xl'>DevOps.</span></p>
                <p id='info-3' className='text-reveal text-5xl text-white mt-8'>Atuando como desenvolvedor backend, durante <span className='text-purple-500 text-5xl'>2.5 anos,</span> em projetos multi-tenants.</p>
            </div>
        </section>

    </>
}

/**
 * Animate scroll info.
 * 
 * Função utilizada para animar partes
 * da informações do sobre como elas
 * vão aparecendo conforme scroll é realizado.
 */
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

/**
 * Animar Sobre.
 * 
 * função utilizada para animar os 
 * textos que aparecem na aba sobre.
 */
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
  
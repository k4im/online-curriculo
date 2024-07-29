import { useLayoutEffect } from 'react';
import './about.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
    const currentDate = new Date().getFullYear();
    const startDate = 2022
    useLayoutEffect(() => 
      {
        animateScrollSobre();
        animateScrollInfo();
        animateFadeOutSobreInfo();
        return () => {
          gsap.killTweensOf('#sobre');
          gsap.killTweensOf('#sobre-mim');
          gsap.killTweensOf('#info');
          gsap.killTweensOf('#info-1');
          gsap.killTweensOf('#info-2');
          gsap.killTweensOf('#info-3');
        }
      }, 
    []); 

    useLayoutEffect(() => {
        animateScrollJaFiz();
        animateScrollInfoJaFiz();
        animateFadeOutSobreOqJaFiz();

        return () => {
          gsap.killTweensOf('#oq-fiz');
          gsap.killTweensOf('#oq-ja-fiz');
          gsap.killTweensOf('#info-1-ja-fiz');
          gsap.killTweensOf('#info-2-ja-fiz');
          gsap.killTweensOf('#info-3-ja-fiz');
        }
      }, [])
    
    return <>
        <section id='sobre' className="hidden overflow-hidden container-sobre h-screen w-screen flex gap-6 flex-col justify-start items-center">
            <h1 id='sobre-mim' className='text-4xl text-white mb-10'>SOBRE MIM</h1>
            <div id='info' className=" flex flex-col gap-2 justify-center text-center items-center w-3/5">
                <p id='info-1' className='text-reveal text-5xl text-white'>Me chamo João Victor, tenho <span className='text-purple-500 text-5xl'>24 anos</span>,
                    trabalho com TI a <span className='text-purple-500 text-5xl'>{currentDate - startDate} anos,</span> atualmente estou cursando
                    <span className='text-purple-500 text-5xl'> Analise e desenvolvimento de sistemas</span>.</p>
                <p id='info-2' className='text-reveal text-5xl text-white mt-7'>Amante de arquitetura de software, Linux e aplicações nativas em cloud.</p>
                <p id='info-3' className='text-reveal text-5xl text-white mt-7'>Construindo aplicações escalaveis e de facil manutenção a <span className='text-purple-500 text-5xl'>{currentDate - startDate} anos.</span></p>
            </div>
        </section>

        <section id='oq-fiz' className="hidden overflow-hidden container-oq-ja-fiz h-screen w-screen flex gap-6 flex-col justify-start items-center">
            <h1 id='oq-ja-fiz' className='text-4xl text-white mb-10'>O QUE JÁ FIZ?</h1>
            <div id='info-ja-fiz' className=" flex flex-col gap-2 justify-center text-center items-center w-3/5">
                <p id='info-1-ja-fiz' className='text-reveal text-5xl text-white'>Trabalhei durante <span className='text-purple-500 text-5xl'>1.8 anos</span>,
                    como analista de infraestrutura, onde tinha como responsabilidade administração de servidores de clientes e servidores internos da empresa
                     atuando diretamente como <span className='text-purple-500 text-5xl'>SysAdmin</span>.</p>
                <p id='info-2-ja-fiz' className='text-reveal text-5xl text-white mt-7'>Além de prestar suporte a equipe de desenvolvimento atuando na construção de pipelines.</p>
                <p id='info-3-ja-fiz' className='text-reveal text-5xl text-white mt-7'>Automatizando o deploy dos softwares da empresa com <span className='text-purple-500 text-5xl'>CI/CD.</span></p>
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
          start: '850px 400px',
          end: '1225px 450px',
          scrub: true,
        }
      }
    );
    const infoList = ['#info-1', '#info-2', '#info-3'];
    infoList.forEach(info => {
      animateScrollSobre.to(info, {
        ease: 'power3.inOut', // Corrigida a propriedade ease      
        opacity: 1,
        transform: 'translateY(0px)',
        duration: 350,
        delay: 150,
        alpha: 1
      })
  
    })
}
/**
 * Animate scroll info.
 * 
 * Função utilizada para animar partes
 * da informações do sobre como elas
 * vão aparecendo conforme scroll é realizado.
 */
function animateFadeOutSobreInfo() {
    gsap.registerPlugin(ScrollTrigger);
    const animateScrollSobre = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '#sobre',
          start: '350px 370px',
          end: '590px 395px',
          scrub: true,
        }
      }
    );
    animateScrollSobre.to(['#info-1', '#info-2', '#info-3', '#sobre-mim'], {
        ease: 'power1.inOut', // Corrigida a propriedade ease      
        opacity: 0,
        transform: 'translateY(50px)',
        duration: 2,
        delay: 0.5,
        alpha: 1
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
      ease: 'power3.inOut', // Corrigida a propriedade ease      
      opacity: 1,
      duration: 2,
      delay: 0.5,
      alpha: 1
    })
  }

/**
 * Animar Sobre.
 * 
 * função utilizada para animar os 
 * textos que aparecem na aba sobre.
 */
function animateScrollJaFiz() {
    gsap.registerPlugin(ScrollTrigger);
    const animateScrollSobre = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '#oq-fiz',
          start: '-200px 300px',
          end: '200px 400px',
          scrub: true,
        }
      }
    );
    animateScrollSobre.to('#oq-ja-fiz', {
      ease: 'power3.inOut', // Corrigida a propriedade ease      
      opacity: 1,
      duration: 2,
      delay: 0.5,
      alpha: 1
    })
  }
  
/**
 * Animate scroll info.
 * 
 * Função utilizada para animar partes
 * da informações do sobre como elas
 * vão aparecendo conforme scroll é realizado.
 */
function animateScrollInfoJaFiz() {
    gsap.registerPlugin(ScrollTrigger);
    const animateScrollSobre = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '#info-ja-fiz',
          start: '1600px 380px',
          end: '1800px 400px',
          scrub: true,
        }
      }
    );
    const infoList = ['#info-1-ja-fiz', '#info-2-ja-fiz', '#info-3-ja-fiz'];
    infoList.forEach(info => {
      animateScrollSobre.to(info, {
        ease: 'power3.inOut', // Corrigida a propriedade ease      
        opacity: 1,
        transform: 'translateY(0px)',
        duration: 35,
        delay: 15,
        alpha: 1
      })
  
    })
}


/**
 * Animate scroll info.
 * 
 * Função utilizada para animar partes
 * da informações do sobre como elas
 * vão aparecendo conforme scroll é realizado.
 */
function animateFadeOutSobreOqJaFiz() {
  gsap.registerPlugin(ScrollTrigger);
  const animateScrollSobre = gsap.timeline(
    {
      scrollTrigger: {
        trigger: '#oq-fiz',
        start: '350px 360px',
        end: '600px 400px',
        scrub: true,
      }
    }
  );
  animateScrollSobre.to(['#info-1-ja-fiz', '#info-2-ja-fiz', '#info-3-ja-fiz', '#oq-ja-fiz'], {
      ease: 'power1.inOut', // Corrigida a propriedade ease      
      opacity: 0,
      transform: 'translateY(50px)',
      duration: 2,
      delay: 0.5,
      alpha: 1
    })
}

import './experience.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export function Experience() {
    useLayoutEffect(() => {
        animateBallReveal();
    }, [])
    const xpBallSection = useRef(null);
    return <>
        <section ref={xpBallSection} id='xp' className="hidden h-screen flex flex-col items-center w-screen overflow-hidden">
        </section>
        <section id='container-xp' className="hidden flex justify-start items-center container-experience h-screen w-screen">
            <div className="container-xp h-full w-5/6 flex">
                <div id='languages'className="h-1/2 w-full flex flex-col gap-10">
                    <div id='javascript' className=" h-full w-full flex flex-col justify-start items-start gap-2">
                            <h3 className='text-purple-500 h-xp-profission'>Javascript</h3>
                            <p className='text-white p-xp-profission '>
                                Ao criar aplicativos JavaScript, estou equipado com as ferramentas certas e posso funcionar de forma totalmente independente delas para fornecer soluções rápidas e resilientes, 
                                otimizadas para escalabilidade — desempenho e escalabilidade são prioridades no meu radar.
                            </p>
                            <a className='text-3xl link text-purple-500'href="https://github.com/k4im?tab=repositories&q=&type=public&language=typescript&sort=" target='_blank'>
                                Projetos em Javascript
                                &#8594;
                            </a>
                    </div>
                    <div id='aspnet' className=" h-full w-full flex flex-col justify-end items-end gap-2">
                            <h3 className='text-purple-500 h-xp-profission'>Asp.netCore</h3>
                            <p className='text-white p-xp-profission-left'>
                            Ao desenvolver aplicações com ASP.NET Core, emprego ferramentas que me permitem operar de forma autônoma. 
                            Priorizo soluções ágeis, robustas e escaláveis, fundamentadas em Domain-Driven Design (DDD), 
                            arquitetura limpa e princípios SOLID —
                            viso alto desempenho, resiliência e eficiência diante de desafios complexos.
                            </p>
                            <a className='text-3xl mt-5 link-right text-purple-500'href="https://github.com/k4im?tab=repositories&q=&type=public&language=c%23&sort=" target='_blank'>
                                Projetos em Asp.netCore
                                &#8594;
                            </a>
                    </div>
                </div>
            </div>
        </section>
    </>
}

function animateBallReveal() {
    gsap.registerPlugin(ScrollTrigger);
    const ballTL1 = gsap.timeline({
        scrollTrigger: {
            trigger: '#xp',
            scrub: true,
            start: '150px 550px',
            end: '600px, 600px',
        },
        delay: 12,
        smoothChildTiming: true
    });
    ballTL1.to('#container-xp', { opacity: 1, y: 0, duration: 5, delay: 6, ease: 'power1.inOut' })
    ballTL1.to('.xp-h2', { opacity: 1, duration: 5, delay: 0.5, ease: 'power1.inOut' })
}

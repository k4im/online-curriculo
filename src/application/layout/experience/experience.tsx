import './experience.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function Experience() {
    useLayoutEffect(() => {
        animateBallReveal();
    }, [])
    const xpBallSection = useRef(null);
    return <>
        <section ref={xpBallSection} id='xp' className="hidden h-screen flex flex-col items-center w-screen overflow-hidden">
            <div className="ball-reveal">
            </div>
        </section>
        <section id='container-xp' className="hidden flex justify-start items-center container-experience h-screen w-screen">
            <div className="container-xp h-full w-5/6 flex mt-14">
                <div id='languages'className="h-1/2 w-full flex flex-col gap-10">
                    <div id='javascript' className=" h-full w-full flex flex-col justify-start items-start gap-2">
                            <h3 className='text-purple-500 h-xp-profission'>Javascript</h3>
                            <p className='text-zinc-900 p-xp-profission '>
                                Ao criar aplicativos JavaScript, estou equipado com as ferramentas certas e posso funcionar de forma totalmente independente delas para fornecer soluções rápidas e resilientes, 
                                otimizadas para escalabilidade — desempenho e escalabilidade são prioridades no meu radar.
                            </p>
                            <a className='text-3xl link text-purple-500'href="" target='_blank'>
                                Projetos em Javascript
                                &#8594;
                            </a>
                    </div>
                    <div id='aspnet' className=" h-full w-full flex flex-col justify-end items-end gap-2">
                            <h3 className='text-purple-500 h-xp-profission'>Asp.netCore</h3>
                            <p className='text-zinc-900 p-xp-profission-left'>
                                Ao criar aplicativos JavaScript, estou equipado com as ferramentas certas e posso funcionar de forma totalmente independente delas para fornecer soluções rápidas e resilientes, 
                                otimizadas para escalabilidade — desempenho e escalabilidade são prioridades no meu radar.
                            </p>
                            <a className='text-3xl mt-5 link-right text-purple-500'href="" target='_blank'>
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
            start: '240px 600px',
            end: '600px, 600px',
        },
        delay: 12,
        smoothChildTiming: true
    });
    ballTL1.to('.ball-reveal', { opacity: 1, y: 350, delay: 3000, duration: 250000, ease: 'power1.inOut' })
    ballTL1.to('.ball-reveal',
            { opacity: 1, scale: 70, duration: 550000, delay: 2500, ease: 'power1.inOut' })
    ballTL1.to('#container-xp', { opacity: 1, duration: 550000, delay: 2500, ease: 'power1.inOut' })
    ballTL1.to('.xp-h2', { opacity: 1, duration: 1.8, delay: 0.5, ease: 'power1.inOut' })
}

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
        <section ref={xpBallSection} id='xp' className="hidden h-screen flex flex-col items-center w-screen overflow-hidden ">
            <div className="ball-reveal">
            </div>
        </section>
        <section id='container-xp' className="hidden flex flex-col justify-start items-center container-experience h-screen w-screen">
                <h2 className='xp-h2 text-zinc-900'>EXPERIENCIAS</h2>
        </section>
    </>
}

function animateBallReveal() 
{
    gsap.registerPlugin(ScrollTrigger);
    const ballTL1 = gsap.timeline({
        scrollTrigger: {
            trigger: '#xp',
            scrub: true,
            start: '100px 250px',
            end: '590px, 600px'
        }
    });
    ballTL1.fromTo('.ball-reveal', {opacity: 0}, {opacity: 1, y: 280, delay: 10, duration: 25000, ease: 'power1.inOut'})
    ballTL1.to('.ball-reveal', 
        {opacity: 1, scale: 100, duration: 25000, delay: 10,  ease: 'power1.inOut',
            onComplete: () => {document.querySelector('.ball-reveal')?.classList.toggle('hidden')}})
    ballTL1.fromTo('#container-xp', {opacity: 0,}, {opacity: 1, duration: 1.8, delay: 10, ease: 'power1.inOut'})
    ballTL1.fromTo('.xp-h2', {opacity: 0}, {opacity: 1, duration: 1.8, delay: 25, ease: 'power1.inOut'})
}

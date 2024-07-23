import { NavBar } from "../../components/navbar/navbar";
import { About } from "../about/about";
import './hero.css'

export function Hero()
{
    return<>
     <section id='hero-section' className='z-10 bg-gradient-to-r from-gray-950 to-gray-900 h-screen w-screen flex flex-col justify-start gap-64 items-center'>
        <NavBar></NavBar>
        
        <div id='slogan' className="w-3/5 h-1/2 flex flex-col gap-5 items-center justify-center overflow-hidden">
          <div className="hero-slogan overflow-hidden flex flex-col items-center">
            <h2 className='text-white text-center h2-container'>
              <span className='text-5xl hero-h2'>Desenvolvedor de software full stack.</span>
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
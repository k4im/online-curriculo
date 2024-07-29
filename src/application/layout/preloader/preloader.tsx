export function Preloader()
{

    return <>
    <section id='intro-slide' className='preloader absolute overflow-hidden z-20 h-screen w-screen bg-gray-950 flex justify-center items-center flex-col'>
        <p className='hidden text-loader preloader-text-1 text-3xl text-white'>Bem vindo.</p>
        <p className='hidden text-loader preloader-text-2 text-3xl text-white'>Me chamo João Victor.</p>
    </section>
    </>
}
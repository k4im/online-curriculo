export function Preloader()
{
    return <>
    <section className='preloader absolute overflow-hidden z-20 h-screen w-screen bg-gray-950 flex justify-center items-center flex-col'>
        <p className='hidden text-loader preloader-text-1 text-3xl text-white'>Bem vindo.</p>
        <p className='hidden text-loader preloader-text-2 text-3xl text-white'>Me chamo João Victor.</p>
        {/* ANIMAR DEPOIS */}
        {/* <p className='hidden text-loader preloader-text-3 text-3xl text-white'>Sou um dev full stack.</p>
        <p className='hidden text-loader preloader-text-4 text-3xl text-white'>Trabalho com:</p>
        <p className='hidden text-loader preloader-text-5 text-3xl text-white'>Angular.</p>
        <p className='hidden text-loader preloader-text-6 text-3xl text-white'>React.</p>
        <p className='hidden text-loader preloader-text-7 text-3xl text-white'>Node.js.</p>
        <p className='hidden text-loader preloader-text-8 text-3xl text-white'>C# Asp.netCore.</p> */}
    </section>
    </>
}
import React from 'react'
import Typed from 'react-typed'
import {AiFillCheckCircle} from 'react-icons/ai'

const Home = () => {
  return (
    <div className='text-center dark:bg-gray-900 dark:text-white py-4'>
      <h1>Welcome to my Portfolio</h1>

     <div className='bg-black text-white min-h-[400px] md:max-w-[1000px] rounded-lg mx-4 md:mx-auto mb-20 dark:bg-gray-800'>
      <p className='py-10 text-2xl'><b>My name:</b>&nbsp; <Typed
          strings={['Mindaugas', 'Šunokas']} typeSpeed={70} backSpeed={100} loop />
        </p>
        <p className='p-4 w-full  mx-auto'>Ieškau Entry-level/Junior-level programuotojo darbo, internetinių svetainių ar programėlių kūrime. Baigta žiniatinklio programavimo specialybė, turiu patirties dirbant su <span className='font-semibold'>HTML, CSS, PHP, JAVASCRIPT,</span> taip pat ir su web karkasais: <span className='text-[#F05340]'>Laravel</span>, <span className='text-[#61DBFB]'>React</span>, <span className='text-[#FA74A0]'>Next.JS</span>. Stiliaus įrankiais <span className='text-[#563D7C]'>Bootstrap</span> ir <span className='text-[#3490DC]'>TailwindCSS</span>. Esant poreikiui galiu atsiųsti savo gyvenimo aprašymą (CV).<br/>Visi pasiūlymai ir galimybės labai laukiami!
        </p>

        <h1 className='my-4 text-indigo-600'>React Native</h1>

        <div className='pb-4 text-indigo-600'>
          <Typed strings={['Learn once, write anywhere.']} typeSpeed={70} backSpeed={100} loop />
        </div>
     </div>

     <h1>Web Development</h1>

      {/* Cards Container */}
      <div className='text-white mx-4 md:mx-0 py-20 flex flex-col md:flex-row justify-center gap-8 sm:px-20 md:px-4 xl:px-52'>
        {/* Card 1 */}
        <div className='bg-gradient-to-b from-blue-500 to-indigo-700 w-full md:w-[33%] rounded-lg cursor-pointer hover:scale-105 duration-300 dark:border-2 dark:border-white'>
            <h1 className='underline font-bold'>Card-1</h1>
           <div className='flex flex-col items-center pb-4 gap-4'>
                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>HTML</p>

                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>CSS</p>
                
                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>JAVASCRIPT</p>
           </div>
        </div>

        {/* Card 2 */}
        <div className='bg-gradient-to-b from-blue-500 to-indigo-700 w-full md:w-[33%] rounded-lg cursor-pointer hover:scale-105 duration-300 dark:border-2 dark:border-white'>
            <h1 className='underline font-bold'>Card-2</h1>
            <div className='flex flex-col items-center pb-4 gap-4'>
                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>PHP</p>
              
                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>LARAVEL</p>
              
                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>MYSQL</p>
           </div>
        </div>

        {/* Card 3 */}
        <div className='bg-gradient-to-b from-blue-500 to-indigo-700 w-full md:w-[33%] rounded-lg cursor-pointer hover:scale-105 duration-300 dark:border-2 dark:border-white'>
            <h1 className='underline font-bold'>Card-3</h1>
            <div className='flex flex-col items-center pb-4 gap-4'>
                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>REACT</p>

                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>NEXTJS</p>

                <AiFillCheckCircle size={50} />
                <p className='text-3xl'>JAVASCRIPT</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home
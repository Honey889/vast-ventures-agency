import React from 'react'
import ButtonBlue from './Button/ButtonBlue'
import ButtonRed from './Button/ButtonRed'
import Image from 'next/image'
import travel2 from '@/public/travel2.jpeg'

const Hero = () => {
  return (

    <div className='h-[70vh] lg:h-[88vh] md:h-[75vh] sm:h-[75vh] flex items-center flex-col justify-center'>

      <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>

         <div className='col-span-2'>   
        <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-blue-950 leading-[2.4rem] md:leading-[4rem]'>Where Will Your Next Adventure Take You? - Let's Find Out Together!</h1>

        <p className='md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>we're passionate about crafting unforgettable travel experiences tailored to your unique preferences and interests. From serene beaches to thrilling adventures and cultural explorations, we're here to turn your travel dreams into reality. </p>
        <div className='flex items-center space-x-4 md:space-x-6'>
            <ButtonBlue text='Book Now'/>
            <ButtonRed text='Discover More'/>
        </div>

        </div>

        <div className='col-span-3 hidden sm:block'>
          <Image src={travel2} alt='travel'height={500} width={700} />
        </div>
 
      </div>
    </div>
  )
}

export default Hero

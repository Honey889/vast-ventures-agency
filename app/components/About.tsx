import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.jpeg'
import { CheckIcon } from '@heroicons/react/16/solid'

const About = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center'>
            <div className='order-2 lg:order-1'>
                <Image src={logo} alt='logo' height={500} width={500}/>
            </div>
            <div className='order-1 lg:order-2'>
                <h1 className='text-[20px] md:text-[45px] ld:text-[28px] text-blue-950 font-bold leading-[2rem] md:leading-[3rem]'>Learn About Our Vision:</h1>
                <p className='mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md-text-[16px]'>Embark on a journey of discovery with <span className='font-bold text-blue-700'>VAST VENTURES</span>. From hidden gems to iconic landmarks, we specialize in crafting tailor-made experiences that exceed expectations.We believe that travel is not just about the destination, but the journey itself. Let us guide you on a path of discovery, adventure, and unparalleled memories.</p>
                <div className='flex items-center mb-[1rem] space-x-3'>
                  <CheckIcon className='w-[1.3rem] h-[1.3rem] text-pink-600'/>
                  <p className='text-[17px] text-blue-600  font-bold'>Global Connectivity</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                  <CheckIcon className='w-[1.3rem] h-[1.3rem] text-pink-600'/>
                  <p className='text-[17px] text-blue-600  font-bold'>Sustainability and Responsibility</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                  <CheckIcon className='w-[1.3rem] h-[1.3rem] text-pink-600'/>
                  <p className='text-[17px] text-blue-600  font-bold'>  Inspiration and Adventure</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                  <CheckIcon className='w-[1.3rem] h-[1.3rem] text-pink-600'/>
                  <p className='text-[17px] text-blue-600  font-bold'>Memorable Journeys</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                  <CheckIcon className='w-[1.3rem] h-[1.3rem] text-pink-600'/>
                  <p className='text-[17px] text-blue-600  font-bold'>Unparalleled Experiences</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About

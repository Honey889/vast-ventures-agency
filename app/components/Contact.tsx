import Image from 'next/image'
import React from 'react'
import ButtonBlue from './Button/ButtonBlue'

const Contact = () => {
  return (
    <div className='pt-[8rem] pb-[3rem] '>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
            <div>
               <Image src='/plane.jpeg' alt='plane' width={800} height={400} className='object-contain mx-auto p-[1rem]'/>
               </div>
               <div className='flex items-center justify-center flex-col'>
                <h1 className=' text-center w-[90%] xl:w-[80%] tracking-[0.1rem] mx-auto font-bold text-[20px] md:text-[30px] text-black '>Access special deals and insider tips courtesy of <span className='text-blue-700'>VastVentures</span></h1>
                <p className='mt-[0.7rem] w-[80%] xl:w-[60%] mx-auto text-center text-[15px] placeholder: text-black opacity-70'>Discover instant discounts when you sign up</p>
                <div className='flex mt-[1.4rem] rounded-lg bg-gray-300 mb-[3rem] items-center space-x-2 w-[80%] h-[4vh] md:h-[6.3vh] '>
                    <input className=' ml-[1rem] bg-transparent w-[80%] h-[100%] border-none outline-none' type="Email" placeholder='Email adress' />
                    <ButtonBlue text='Join'/>
                </div>
               
            </div>
        </div>
      
    </div>
  )
}

export default Contact

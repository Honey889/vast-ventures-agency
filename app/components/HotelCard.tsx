import { StarIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react'
interface Props {
    image:string;
    name:string;
    city:string;
    price:string;
    reviewnum:string;
}
const HotelCard = ({image,name,city,price,reviewnum}:Props) => {
  return (
    <div className='cursor-pointer bg-gray-200 rounded-md overflow-hidden'>
      <div className='relative overflow-hidden w-[100%] h-[20rem]'>
        <Image src={`${image}`} alt={name} className=' transform object-cover transition-all duration-700 scale-100 hover:scale-125 ' layout='fill'/>
        
      </div>
      <div className='p-[1.4rem]'>
        <div className='flex items-center'>
          <StarIcon className='text-orange-600 w-[1rem] h-[1rem]'/>
          <StarIcon className='text-orange-600 w-[1rem] h-[1rem]'/>
          <StarIcon className='text-orange-600 w-[1rem] h-[1rem]'/>
          <StarIcon className='text-orange-600 w-[1rem] h-[1rem]'/>
          <StarIcon className='text-orange-600 w-[1rem] h-[1rem]'/>
        </div>
        <h1 className='mt-[0.4rem] text-[20px] text-blue-950 font-bold'>{name}</h1>
        <p className='text-[15px] text-black opacity-70 mt-[0.4rem] '>{city}</p>
      </div>
    </div>
  )
}

export default HotelCard
 
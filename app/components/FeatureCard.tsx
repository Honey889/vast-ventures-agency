import Image from 'next/image';
import React from 'react'

interface Props{
    image : string;
    title : string;
}
const FeatureCard = ({image, title}: Props) => {
  return (
    <div className='text-center bg-gray-200 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
      <Image
       src={image} alt='icon' width={700} height={70} className='mx-auto
      '/>
      <h1 className='text-[20px] mt-[1.4rem]  text-blue-950 font-bold'>{title}</h1>
      
    </div>
  )
} 

export default FeatureCard

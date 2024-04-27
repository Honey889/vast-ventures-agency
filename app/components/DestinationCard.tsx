import React from 'react'
import Image from 'next/image';
 interface Props {
    image: string;
    num:string;
    price: string;
    name:string;
 }
const DestinationCard = ({image,num,price,name}:Props) => {
    const large = num == "2" ? "lg:scale-110 scale-100 z-[100]" : "" ;
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
      <div className={`${image} h-[200px] flex flex-col items-center justify-center rounded-t-md`}>
      <Image
       src={image} alt='icon' width={700} height={700} className='mx-auto
      '/>
        <h1 className='text-[20px] text-blue-950 font-bold'>{name}  <span className='
        txt-[30px] text-pink-700 font-bold'>${price} </span></h1>
        
      </div>
    </div>
  )
}

export default DestinationCard

import React from 'react'

interface Props {
    headingMini : string;
    headingPrimary : string;
}
const Headingsection = ({headingMini , headingPrimary}: Props) => {
  return (
    <div className='text-center pt-2'>
        <p className='text-gray-700 md:text-[20px] text-[16px]'>{headingMini}</p>
        <h1 className='mt-[0,5rem] font-bold text-[22px] md:text-[30px] text-pink-800'>{headingPrimary}</h1>
      
    </div>
  )
}

export default Headingsection

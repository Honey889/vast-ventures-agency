import React from 'react'
import Headingsection from './Headingsection'
import HotelCard from './HotelCard'

const Hotels = () => {
  return (
    <div className='pt-[5rem] bg-gray-100 pb-[4rem]'>
      <Headingsection headingPrimary='Best Hotels' headingMini='Enjoy the best'/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem] '>
        <div>
            <HotelCard name='fairmont hotel' city='Baku' image='/fairmontbaku.jpeg' price='' reviewnum='' />
        </div>
        <div>
            <HotelCard image='/crownePlazaDubai.avif' name='Crowne Plaza' city='Dubai' price='$100/' reviewnum='5'/>
        </div>
        <div>
            <HotelCard image='/GleamCollectionIstanbul.jpeg' name='Gleam Collection' city='Istanbul' price='$150/' reviewnum='5'/>
        </div>
        <div>
            <HotelCard image='/Jhotelshanghai.png' name='J Hotel,Shanghai' city='Shanghai' price='$200/' reviewnum='5'/>
        </div>
        <div>
            <HotelCard image='/Leparisis.jpeg' name='Le Parisis' city='Paris' price='$300/' reviewnum='5'/>
        </div>
        <div>
            <HotelCard image='/waldorfLondon.jpeg' name='Waldorf Hotel' city='London' price='$350/' reviewnum='5'/>
        </div>
      </div>
     
    </div>
  )
}

export default Hotels

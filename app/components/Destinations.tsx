import React from 'react'
import Headingsection from './Headingsection'
import DestinationCard from './DestinationCard'
import Baku from '@/public/Baku.jpeg'
import Dubai from '@/public/dubai.jpeg'
import shanghai from '@/public/shanghai;china.jpeg'
import Paris from '@/public/paris.jpeg'
import London from '@/public/london.jpeg'
import Istanbul from '@/public/Istanbul.jpeg'
const Destinations = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Headingsection headingMini='Explore the World with Us' headingPrimary='Wanderlust-Worthy Destinations'/>
        <div className='w-[80%] mx-auto grid pt-[2rem] gap-[2rem] lg-gap-5 space-y-3.5 grid-cols-1 lg:grid-cols-3 items-center'>
           <div>
            <DestinationCard image="/Baku.jpeg" price="1800" num="1" name="Baku,Azerbaijan"/>
           </div>
           <div>
            <DestinationCard image="/dubai.jpeg" price="2050" num="1" name="Dubai,U.A.E"/>
           </div>
           <div>
            <DestinationCard image="/Istanbul.jpeg" price="2000" num="1" name="Istanbul,Turkey"/>
           </div>
           <div>
            <DestinationCard image="/shanghai;china.jpeg" price="2500" num="1" name="Shanghai,China"/>
           </div>
           <div>
            <DestinationCard image="/paris.jpeg" price="2200" num="1" name="Paris,France"/>
           </div>
           <div>
            <DestinationCard image="/london.jpeg" price="3000" num="1" name="London,England"/>
           </div>
          
        </div>
      
    </div>
  )
}

export default Destinations

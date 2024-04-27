import React from 'react'
import Headingsection from './Headingsection'
import FeatureCard from './FeatureCard'

import coverage from '@/public/coverage.jpeg'
import unique from '@/public/unique.jpeg'
import solo from '@/public/solo.jpeg'

import transport from '@/public/transport.jpeg'
import customerservice from
 '@/public/customerservice.jpeg'
 import luxuryhotel from '@/public/luxuryhotel.png'


const Feature = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <Headingsection
       headingMini = "Solution that perfectly suits your needs"
       headingPrimary="Experience Extraordinary Adventures"
       />

       <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
        <div>
            <FeatureCard title="Destination Coverage" image={coverage.src}/>
        </div>
        <div>
            <FeatureCard title="Unique Experiences" image={unique.src}/>
        </div>
        <div>
            <FeatureCard title="Solo & Group Travel" image={solo.src}/>
        </div>
        <div>
            <FeatureCard title="Luxury Hotel" image={luxuryhotel.src}/>
        </div>
        <div>
            <FeatureCard title="Transportation Service" image={transport.src}/>
        </div>
        <div>
            <FeatureCard title="Customer Care" image={customerservice.src}/>
        </div>
       </div>
    </div>
  )
}

export default Feature

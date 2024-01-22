import React from 'react'
import Heading from './Heading'
import Image from 'next/image'

const Review = () => {
  return (
    <div className='mx-14'>
        <Heading Heading="What Our Customers Say"/>
        <div className='grid grid-cols-3 gap-6'>
            <Image src="/review1.png"
                height={500}
                width={400}
            />
            <Image src="/review2.png"
                height={500}
                width={400}
            />
            <Image src="/review3.png"
                height={500}
                width={400}
            />
        </div>
    </div>
  )
}

export default Review
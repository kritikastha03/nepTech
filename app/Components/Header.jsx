import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <>
        <nav className='border-3 border-black flex justify-between px-10 py-2  bg-primary rounded sticky top-0'>
        <div>
          <Image
            src="/macintosh.png"
            width={50}
            height={50}
          />
        </div>
        <div className='flex gap-5 mt-2 text-neutral-content'>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link> 
        </div>
        <div>
            <button className='p-2 inline rounded bg-neutral-content text-neutral'>Sign In</button>
        </div>
        </nav>
    </>
  )
}

export default Header
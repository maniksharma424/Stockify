import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div  className='header w-full flex justify-end py-4 px-2 sm:text-[16px] text-[12px] font-[200]'>
        <ul className='flex w-2/5 justify-around'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/Dashboard"><li>Dashboard</li></Link>
            <Link href="/Profile"><li>Profile</li></Link>
        </ul>
    </div>
  )
}

export default Header
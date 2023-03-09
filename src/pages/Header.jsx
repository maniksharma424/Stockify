import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div  className='header w-full flex justify-end py-4 font-[200]'>
        <ul className='flex w-2/5 justify-around'>
            <Link href="/Homepage"><li>Home</li></Link>
            <li>About</li>
            <Link href="/auth"><li>Login</li></Link>
        </ul>
    </div>
  )
}

export default Header
import Link from 'next/link'
import React from 'react'
import ButtonBlue from '../Button/ButtonBlue'
import ButtonRed from '../Button/ButtonRed'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}: Props) => {
  return (
    <div className='h-[12vh] bg-white shadow-md'>
    <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
        <h1 className='text-[16px] md:text-[25px] font-bold text-slate-600'>
            <span className='text-[27px] md:text-[40px] text-pink-700'>Vast</span>
            Venture.
        </h1>
        <ul className='hidden lg:flex items-center space-x-10'>
            <li className='text-[17px] cursor-pointer text-blue-800 '>
                <Link href="/">Home </Link>
            </li>
            <li className='text-[17px] cursor-pointer hover:text-blue-800 transition-all duration-200 '>
                <Link href="/">Services</Link>
            </li>
            <li className='text-[17px] cursor-pointer hover:text-blue-800 transition-all duration-200 '>
                <Link href="/">About</Link>
            </li>
            <li className='text-[17px] cursor-pointer hover:text-blue-800 transition-all duration-200 '>
                <Link href="/">Blog </Link>
            </li>
            <li className='text-[17px] cursor-pointer hover:text-blue-800 transition-all duration-200 '>
                <Link href="/">Customer </Link>
            </li>
        </ul>
        <div className=' flex items-center space-x-2 md:space-x-5'>
            <ButtonBlue text='Login'/>
            <ButtonRed text='SignUp'/>
            <Bars3BottomRightIcon onClick={openNav}
             className='w-[1.5rem] lg:hidden h-[1.5rem] text-slate-800 cursor-pointer'/>
            {/* Login */}
            {/* signIn */}
        </div>
    </div>
    </div>
  )
}

export default Nav

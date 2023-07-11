'use client'

import React, { useState } from 'react'
import imdbImg from '../public/imdb.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

const router=useRouter();

const [search,setSearch]=useState('')
const [showDropdown,setShowDropdown]=useState(false)
const handleSubmit=(e)=>{
e.preventDefault();
router.push(`/search/${search}`)
}

  return (
    <div className='flex gap-5 items-center py-2 justify-between '>
    <div className='flex items-center gap-2 '>
        <div className='flex items-center pl-3'>
        <div className='block md:hidden relative'>
                    <div
                        className='rounded-full bg-[#F5C518] transition p-2'
                        onClick={() => { setShowDropdown(!showDropdown) }}
                    >
                        <AiOutlineMenu size={20} color='#000' />
                    </div>
                    <div className={`absolute top-[50px] z-[1200] ${showDropdown ? 'translate-x-[-5%]' : 'translate-x-[-120%]'} transition left-0 duration-700  rounded-sm bg-black bg-opacity-60 w-[100vw] h-[100vh]`}>
                        <div className='bg-black h-full w-[190px] flex flex-col  items-start gap-2 pt-2'>
                            <Link href={'/movies/popular'} className='text-md bg-gray-500 hover:bg-gray-700 transition rounded-sm w-full flex justify-center py-3 cursor-pointer'
                                onClick={() => { setShowDropdown(!showDropdown) }}
                            >
                                Popular
                            </Link>
                            <Link href={'/movies/upcoming'} className='text-md bg-gray-500 hover:bg-gray-700 transition rounded-sm w-full flex justify-center py-3 cursor-pointer'
                                onClick={() => { setShowDropdown(!showDropdown) }}
                            >
                                Upcoming
                            </Link>
                            <Link href={'/movies/top_rated'} className='text-md bg-gray-500 hover:bg-gray-700 transition rounded-sm w-full flex justify-center py-3 cursor-pointer'
                                onClick={() => { setShowDropdown(!showDropdown) }}
                            >
                                Top rated
                            </Link>
                        </div>
                    </div>
                </div>
     <div className='relative w-[55px] h-[55px] md:w-[70px] md:h-[70px]'>
      <Link href={'/'}>
    <Image src={imdbImg}
     fill
      priority
    alt='logo'
    className='px-2'
    />
    </Link>
    </div>
    </div>
    <div className='hidden md:block'>
    <div className='flex gap-3 '>
      <Link href={'/movies/popular'}>
    <p className='text-sm lg:text-xl cursor-pointer'>Popular</p>
      </Link>
      <Link href={'/movies/top_rated'}>
    <p className='text-sm lg:text-xl cursor-pointer'>Top Rated</p>
      </Link>
      <Link href={'/movies/upcoming'}>
    <p className='text-sm lg:text-xl cursor-pointer'>Upcoming</p>
      </Link>
    </div>
    </div>
    </div>
    <form onSubmit={handleSubmit} className='mr-4 flex gap-0.5'>
    <input type="text"
    value={search}
    onChange={(e)=>{setSearch(e.target.value)}}
    placeholder='search here' 
    className='
    text-black 
    outline-none 
    focus:ring-2 
    focus:ring-[#F5C518]
    py-1 px-2 rounded-sm w-[180px] md:w-[400px]
   
    ' />
    <button type='submit' className='bg-[#F5C518] py-1 px-1 md:px-2 rounded-sm text-black '>search</button>
    </form>
    </div>
  )
}

export default Navbar
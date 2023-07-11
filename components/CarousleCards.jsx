'use client'

import React from 'react'
import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai'
import Link from 'next/link';

const CarouselCards = ({data}) => {

  return (
    <Link href={`/movie/${data.id}`}>
  <div className='relative w-ful h-[50vh] md:h-[60vh] lg:h-[75vh]'>
        <div className='relative w-full h-[50vh] md:h-[60vh] lg:h-[75vh] rounded-md'>
        <Image 
        src={`https://image.tmdb.org/t/p/original${data && data.backdrop_path || data.poster_path}`}
        alt='carousel-image'
        fill 
        priority
        />
        </div>
        <div className='absolute z-100 bottom-[5vh] px-3'>
          <div className='flex flex-col gap-1.5 '>
          <p className='text-2xl'>{data && data.original_title}</p>
          <p>Release Date: {data && data.release_date}</p>

          <div className='flex gap-1 items-center'>
          <p>{data && data.vote_average}</p>
          <AiFillStar size={28} color='#fff'/>
          </div>
          
          <p>{data && data.vote_count} reviews</p>
          </div>
        </div>
        </div>
        </Link>
  )
}

export default CarouselCards
import React from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'

const MovieCard = ({data}) => {
  return (
    <>
   {data.map((movie)=>(
    <Link key={movie.id} href={`/movie/${movie.id}`}
    className='relative z-0 hover:z-[1000]  hover:scale-125 transition'
    >
    <div  className='w-[300px] md:w-[180px] min-h-[350px] bg-[#1A1A1A]'>
        <div className='relative w-full h-[265px]'>
 <Image 
        src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path?movie.backdrop_path:movie.poster_path}`}
        alt='movie-image'
        fill 
        priority
        className='object-cover'
        />
        </div>
          <div className='flex flex-col gap-1 px-2 py-2'>
          <div className='flex gap-1 items-center'>
          <AiFillStar size={16} color='#F5C518'/>
          <p>{movie && movie.vote_average}</p>
          </div>
          <p className='text-md py-1'>{movie && movie.original_title}</p>
          <p className='text-sm'>Release Date: {movie && movie.release_date}</p>
          </div>
    </div>
    </Link>
   )
   )}
    </>
  )
}

export default MovieCard
import { MovieList } from '@/components'
import React from 'react'

const page = ({params:{params}}) => {
  return (
    <div className='px-2 md:px-8'>
    <MovieList sector={params}/>
    </div>
  )
}

export default page
import { MovieData } from '@/components'
import React from 'react'

const page = ({params:{id}}) => {
  return (
   <>
   <MovieData id={id}/>
   </>
  )
}

export default page
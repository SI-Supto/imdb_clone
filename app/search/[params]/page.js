import { SearchedItem } from '@/components'
import React from 'react'

const Search = ({params:{params}}) => {
  return (
    <>
    <div className="px-8 py-5 pb-5 text-[#F5C518] text-3xl font-bold capitalize text-center">{`${decodeURIComponent(params.replace(/\+/g, ' '))} movie`}</div>
    <div className='py-2 px-4 mt-10 flex gap-2 flex-wrap justify-center '>
    <SearchedItem params={params}/>
    </div>
    </>
  )
}

export default Search
'use client'

import axios from "axios"
import { useEffect,useState } from "react"
import MovieCard from "./MovieCard"

const SearchedItem = ({params}) => {
    const [searchedItem,setSeachedItem]=useState([])
    const fetchData=async ()=>{
        const api=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${params}&include_adult=false&language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}`)
        setSeachedItem(api.data.results)
    }
    useEffect(() => {
     fetchData();
    }, [params])
  return (
   <>
   <MovieCard data={searchedItem}/>
   </>
  )
}

export default SearchedItem
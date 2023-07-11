'use client'

import axios from "axios"
import { useEffect,useState } from "react"
import CarouselItem from "./CarouselItem"

const Home = () => {
    const [movies,setMovies]=useState([])
const fetchMovies=async ()=>{
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=en-US&page=1`)
    .then((e)=>{
setMovies(e.data.results)
    })
    
}
useEffect(() => {
  fetchMovies();

 
}, [])
  return (
   <>
   <div>
  <CarouselItem data={movies}/>
  </div>
   </>
  )
}

export default Home
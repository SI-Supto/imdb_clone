'use client'
import { useState,useEffect } from "react"
import axios from "axios"
import MovieCard from "./MovieCard"

const MovieList = ({sector}) => {

    const [movies,setMovies]=useState([])
    const fetchMovies=async ()=>{
        await axios.get(`https://api.themoviedb.org/3/movie/${sector?sector:'popular'}?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=en-US&page=1`)
        .then((e)=>{
    setMovies(e.data.results)
        })
        
    }
    useEffect(() => {
      fetchMovies();
    
    }, [])
  return (
    <>
    <div className="py-5 pb-5 text-[#F5C518] text-3xl font-bold capitalize text-center">{sector?`${sector.split("_").join(" ")} movies`:'Popular movies'}</div>
    <div className="flex justify-center md:justify-start gap-3 flex-wrap mt-4">
    <MovieCard data={movies}/>
    </div>
    </>
  )
}

export default MovieList
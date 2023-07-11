"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const MovieData = ({ id }) => {
  const [movieData, setMovieData] = useState({});
  const fetchData = async () => {
    const api = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=en-US`
    );
    setMovieData(api.data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`relative w-full h-[70vh]`}>
        <div className="relative w-full h-[70vh]">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              movieData
                ? movieData.backdrop_path
                  ? movieData.backdrop_path
                  : movieData.poster_path
                : ""
            }`}
            fill
            priority
            alt="poster_image"
            className="object-cover"
          />
        </div>
        <div className="absolute z-[1000] top-0 bg-black bg-opacity-60 w-full h-[70vh]  md:gap-6 gap-2">
          <div className="flex h-[70vh] md:flex-row flex-col items-center gap-8 md:pl-10">
            <div className="py-4 md:py-0">
              <div className="relative w-[180px] min-h-[250px] md:w-[220px] md:min-h-[300px] ">
                <Image
                  src={`https://image.tmdb.org/t/p/original${
                    movieData
                      ? movieData.poster_path
                        ? movieData.poster_path
                        : movieData.backdrop_path
                      : ""
                  }`}
                  fill
                  priority
                  alt="movie_poster"
                  className="object-cover ring-white ring-1 relative"
                />
              </div>
            </div>
            <div className="relative flex md:min-h-[317px] min-h-[200px]">
              <div className="self-start mt-2">
                <p className="text-xl md:text-3xl md:text-start text-center">
                  {movieData ? movieData.original_title : ""}
                </p>
                <p className="text-md text-center md:text-start">
                  {movieData ? movieData.tagline : ""}
                </p>
                <div className="flex gap-2 items-center justify-center md:justify-start mt-1 text-md">
                  <p>{movieData ? movieData.vote_average : ""}</p>
                  <AiFillStar size={18} color="#F5C518" />
                  <p>({movieData ? movieData.vote_count : ""}) votes</p>
                </div>
                <p className="text-md text-center md:text-start">
                  Released Date: {movieData ? movieData.release_date : ""}
                </p>
                <div className="flex gap-3 mt-2 justify-center md:justify-start">
                  {movieData.genres &&
                    movieData.genres.map((genre) => (
                      <div
                        key={genre.id}
                        className="py-1 px-2 ring-1 ring-white rounded-full "
                      >
                        {genre.name}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 text-center py-3">
        {movieData ? movieData.overview : ""}
      </div>

      <div className="px-2">
        <div>
          <p className="text-2xl">Production company:</p>
          <div className=" flex flex-col justify-center w-full items-center">
            {movieData.production_companies &&
              movieData.production_companies.map((company) => (
                <div
                  key={company.id}
                  className="mt-6 gap-3 flex "
                >
                  <div className="relative w-[220px] min-h-[180px] px-4">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                      alt="company-logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className=" text-lg">{company.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieData;

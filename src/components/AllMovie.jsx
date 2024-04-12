import React, { useEffect, useState } from 'react';
import { fetchAllMovie } from '../Api';
import { Link } from 'react-router-dom';

const AllMovie = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchAlllMovie = async () => {
      const response = await fetchAllMovie();
      setMovies(response.results);
    };
    fetchAlllMovie();
  }, []);

  const fetchNextPage = async () => {
    const response = await fetchAllMovie(currentPage + 1);
    if (response) {
      setMovies(response.results);
      setCurrentPage(currentPage + 1);
    }
  };

  const fetchPrevPage = async () => {
    if (currentPage > 1) {
      const response = await fetchAllMovie(currentPage - 1);
      if (response) {
        setMovies(response.results);
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div>
      <form className="max-w-md mx-auto my-10 ">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search By Film Name"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-lg" onClick={fetchPrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <h1 className="text-white px-5 flex items-center text-2xl">{currentPage}</h1>
        <button className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg" onClick={fetchNextPage}>
          Next
        </button>
      </div>
      <div className="xl:grid xl:grid-cols-5 m-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 sm:items-center">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div
                className="  rounded-lg 
                                  transform transition duration-500 
                                  hover:scale-95 mb-3 hover:text-blue-300 cursor-pointer"
              >
                <div className="w-[200px]">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-xl" />
                </div>
                <div>
                  <h1 className="font-semibold text-xl width-[100px] text-white">{movie.title}</h1>
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/1000/svg" viewBox="0 0 600 540" className="max-w-6 fill-yellow-400">
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                    <h1 className="font-semibold text-xl width-[100px] text-white">{movie.vote_average}/10</h1>
                  </div>
                  <h1 className="font-semibold text-xl width-[100px] text-white">{movie.release_date}</h1>
                  {/* <button className="mt-2">Detail</button> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovie;

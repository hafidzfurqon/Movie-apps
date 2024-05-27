import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchMovieData } from '../Api';
import NavbarComponents from '../components/NavbarComponents';
import BannerMovie from '../components/BannerMovie';
import TopRated from '../components/TopRated';
import AllMovie from '../components/AllMovie';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const MovieDisplay = () => {
  document.title = "HAFIDZ MOVIES"
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchMovieData();
      setMovies(response.results);
    };
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if(!movies) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {' '}
      <NavbarComponents title = "HAFIDZ MOVIES" />
      <BannerMovie />
      <div className="m-auto w-full px-6 ">
        <h4 className="font-semibold text-2xl mt-10 mb-5 text-white">Discover New Movies</h4>
        <Carousel responsive={responsive} swipeable={true} draggable={true} infinite={true} autoPlay={true} autoPlaySpeed={4500} transitionDuration={500}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <div
                  className=" mr-3 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-95 hover:text-blue-300"
                >
                  <div className="w-[200px]">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-xl" />
                    <h1 className="font-semibold text-xl my-2 width-[100px] text-white ">{movie.title}</h1>
                  </div>
                  <div>
                    <div className="flex justify-start">
                      <svg xmlns="http://www.w3.org/1000/svg" viewBox="0 0 600 540" className="max-w-6 fill-yellow-400">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>
                      <h1 className="font-semibold text-xl my-2 width-[100px] text-white p-2">{movie.vote_average}/10</h1>
                    </div>
                    <p className="width-[20px] text-xl">
                      {movie.overview.substring(0, 70)} {'...'}
                    </p>
                    {/* <button className="mt-2">Detail</button> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      <h4 className="px-6 font-semibold text-2xl mt-10 mb-5 text-white">Discover Top Movies</h4>
      <TopRated  />
      <h1 className="font-semibold text-3xl mt-10 mb-5 text-white flex justify-center items-center">All Movies</h1>
      <AllMovie  />
      <Footer  />
    </div>
  );
};

export default MovieDisplay;

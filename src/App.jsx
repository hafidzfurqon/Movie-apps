import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchMovieData } from './Api';
import NavbarComponents from './components/NavbarComponents';
import BannerMovie from './components/BannerMovie';

const App = () => {
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

  return (
    <div>
      {' '}
      <NavbarComponents />
      <BannerMovie />
      <div className="m-auto w-full px-6 ">
        <h4 className="font-semibold text-2xl mt-10 mb-5">Discover Top Movie</h4>
        <Carousel responsive={responsive} swipeable={false} draggable={true} infinite={true} transitionDuration={500}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className="bg-slate-50 rounded-sm mr-3">
                <div className="w-[220px]">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-xl" />
                </div>
                <div>
                  <h1 className="font-semibold text-xl my-2 width-[100px]">
                    {movie.title.substring(0, 10)}
                    {'...'}
                  </h1>
                  <p className="width-[20px] text-blue-300">
                    {movie.overview.substring(0, 120)}
                    {'...'}
                  </p>
                  <button className="mt-2">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default App;

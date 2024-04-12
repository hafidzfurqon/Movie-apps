import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchMoviePlaying } from '../Api';
import { Link } from 'react-router-dom';

const BannerMovie = () => {
  const [moviePlay, setMoviePlay] = useState([]);


  useEffect(() => {
    const fetchMovie = async () => {

      const response = await fetchMoviePlaying();
      setMoviePlay(response.results);
    };
    fetchMovie();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if(!moviePlay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <Carousel responsive={responsive} swipeable={true} draggable={true} infinite={true} showDots={true} autoPlay={true} autoPlaySpeed={2500} transitionDuration={500}>
        {moviePlay.map((movie) => (
          <div key={movie.id}>
            <div className="relative w-full h-[60vh] lg:h-[110vh]">
              <img src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`} alt={movie.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="flex h-full items-center text-left ml-16">
                  <div className="text-white">
                    <h2 className="mb-4 text-4xl font-semibold">{movie.title}</h2>
                    <h4 className="mb-6 text-xl font-semibold text-left">Upcoming Movies</h4>
                    <Link to={`/movie/${movie.id}`}>
                      <button className="px-3 py-4 bg-blue-400 rounded-md font-semibold">Detail</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerMovie;

import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchMoviePlaying } from '../Api';

const BannerMovie = () => {
  const [moviePlay, setMoviePlay] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetchMoviePlaying();
      console.log(response);
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

  return (
    <div className="relative">
      <Carousel responsive={responsive} swipeable={true} draggable={true} infinite={true} showDots={true} autoPlay={true} autoPlaySpeed={2500} transitionDuration={500}>
        {moviePlay.map((movie) => (
          <div key={movie.id}>
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center w-full"
              style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w780/${movie.backdrop_path})`, height: '600px', marginBottom: '20px', backgroundSize: 'cover' }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="flex h-full items-center text-left ml-16">
                  <div className="text-white">
                    <h2 className="mb-4 text-4xl font-semibold">{movie.title}</h2>
                    <h4 className="mb-6 text-xl font-semibold text-left">Top Rated Movie</h4>
                    <button className="px-3 py-4 bg-blue-400 rounded-md font-semibold">Detail</button>
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

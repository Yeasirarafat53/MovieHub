import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import MovieList from '../MovieList/MovieList';
import './Home.css'




const Homepage = () => {
  const [movieList, setMovieList] = useContext(UserContext);
  console.log(movieList);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  }, [setMovieList]);
  return (
    <>
      <div className="movie__list container ">
        <h2 className="list_title">Tv Series</h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <MovieList movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;

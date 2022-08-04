import React from 'react';
import { Link } from 'react-router-dom';
import './Movielist.css';

const MovieList = ({movie}) => {
    return (
      <div className="card-item">
        <Link
          to={`/movie/${movie.show.id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <div className="cards">
            <img src={movie.show.image.medium} alt="" className="cards__img" />
            <div className="cards__overlay">
              <div className="card__title">{movie ? movie.show.name : ''}</div>
              <div className="card__runtime">
                {movie.show ? movie.show.premiered : ''}
                <span className="card__rating">
                  {movie.show ? movie.show.rating.average : ''}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">
                {movie ? movie.show.summary.slice(0, 118) + '...' : ''}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default MovieList;
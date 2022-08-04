import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './MovieDetails.css';

const MovieDetails = () => {
  const [details, setDetails] = useContext(UserContext);
  const [click, setClick] = useContext(UserContext);
  const { id } = useParams();

  const navigate = useNavigate();
  console.log(click);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id, setDetails]);

  const handleClick = () => {
    // console.log("clicked");
    setClick(details);
    navigate('/booking');
  };

  return (
    <div className="movie-details container">
      <div className="poster">
        <img src={details.image ? details.image.medium : ''} alt="" />
      </div>

      <div className="movie-content">
        <h1 className="title">{details.name}</h1>

        <div className="genres">
          {details.genres &&
            details.genres.slice(0, 5).map((genre, i) => (
              <span key={i} className="genres__item">
                {genre}
              </span>
            ))}
        </div>
        <div className="movie__runtime">
          {details ? details.runtime + ' mins' : ''}
        </div>
        <div className="movie__releaseDate">
          {details.premiered ? 'Release date: ' + details.premiered : ''}
        </div>
        <div className="movie-overview">
          <h1 style={{ fontSize: '30px' }}>Overview</h1>
          <p className="overview">{details.summary}</p>
        </div>
        <button onClick={handleClick} className="book-now">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;

import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.scss";
import { MovieCardProps } from "../../types/interfaces";


const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  showBtn = true,

}) => {
  const imgURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "";

  const formatNumber = (number: string) => {
    const formatedNumber = parseFloat(number).toFixed(1);
    return formatedNumber;
  };


  return (
    <>
      <div className="card" key={movie.id}>
        <div className="container-rating">
          <p className="rating">
            {movie?.vote_average ? formatNumber(movie.vote_average) : "-"}
          </p>
        </div>

        <div className="container-main">
          <img className="img-movies" src={imgURL} alt="title" />
          <div className="container-title">
             <h2 className="movie-title">{movie.original_title}</h2>
          </div>
         

          <div className="container-favorite-btn">
            <button id="favorite-btn">
            <img src="src/icons/favorite.png" alt="" />
            </button>
            <button id="addList-btn" >
              <img src="src/icons/addList.png" alt="" />
            </button>
          
          </div>

          <div className="container-see-more">
            {showBtn && (
              <Link to={`/movie/${movie.id}`} className="link-see-more">
                See more
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

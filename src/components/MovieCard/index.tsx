import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import "./movieCard.scss";
import { Movie, MovieCardProps } from "../../types/interfaces";


type MovieCard = {
  movie: Movie;
  showBtn?: boolean;
  onToggleFavorite: (movieId: number, isFavorite: boolean) => void;
};


const MovieCard: React.FC<MovieCardProps> = ({ movie, showBtn = true }) => {
  const imgURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "";
    const [favorite, setFavorite] = useState(() => {
      const storedData = localStorage.getItem("favoriteMovies");
      return storedData ? JSON.parse(storedData).includes(movie.id) : false;
    });
  
    const toggleFavorite = () => {
      const newFavoriteState = !favorite;
      setFavorite(newFavoriteState);
  
      // Atualizar o localStorage
      const storedFavorites = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
      const updatedFavorites = newFavoriteState
        ? [...storedFavorites, movie.id]
        : storedFavorites.filter((id: number) => id !== movie.id);
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    };

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
            <button id="favorite-btn" onClick={toggleFavorite}>
              {!favorite ? (
                <img src="/icons/unfavourite.png" alt="" />
              ) : (
                <img src="/icons/favourite.png" alt="" />
              )}
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

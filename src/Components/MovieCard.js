import React from "react";
import "../styles.css";

export default function MoviesCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const rating = (rating) => {
    if (rating > 8) return "good";
    else if (rating < 4) return "bad";
    else return "average";
  };

  return (
    <div className="grid-card" key={movie.id}>
      <img
        className="grid-card-image"
        src={`/images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      ></img>
      <p className="grid-card-title">{movie.title}</p>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <p style={{ margin: "0px" }} className="grid-card-gerne">
          {movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}
        </p>
        <p
          style={{ margin: "0px" }}
          className={`grid-card-rating ${rating(movie.rating)}`}
        >
          {movie.rating}
        </p>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          checked={isWatchlisted}
          onChange={() => toggleWatchlist(movie.id)}
        ></input>
        <span className={`slider ${isWatchlisted ? "on" : ""}`}>
          <span className={`slider-label ${isWatchlisted ? "on" : ""}`}>
            {isWatchlisted ? "In Watchlist" : "Add  to watchlist"}
          </span>
        </span>
      </label>
    </div>
  );
}

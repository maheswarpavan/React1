import React from "react";
import "../styles.css";
import MoviesCard from "./MovieCard";

export default function WatchList({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your WatchList</h1>
      <div className="main-grid">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MoviesCard
              movie={movie}
              key={id}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></MoviesCard>
          );
        })}
      </div>
    </div>
  );
}

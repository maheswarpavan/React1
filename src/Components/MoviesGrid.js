import React, { useState } from "react";
import "../styles.css";
import MoviesCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchGenre, setSearchGenre] = useState("All");
  const [searchRating, setSearchRating] = useState("All");

  const handleSearchInput = (e) => setSearchTerm(e.target.value.trim());

  const handleGenreFilter = (e) => setSearchGenre(e.target.value);

  const handleRatingFilter = (e) => setSearchRating(e.target.value);

  const getFilteredMovies = () => {
    return movies
      .filter((movie) =>
        searchTerm
          ? movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          : true
      )
      .filter((movie) =>
        searchGenre !== "All"
          ? movie.genre.toLowerCase() === searchGenre.toLowerCase()
          : true
      )
      .filter((movie) => {
        if (searchRating === "All") return true;
        if (searchRating === "Good") return movie.rating > 8;
        if (searchRating === "Bad") return movie.rating < 4;
        return movie.rating >= 4 && movie.rating <= 8;
      });
  };

  return (
    <div>
      <div className="filter">
        <input
          type="text"
          placeholder="Search🔍"
          onChange={handleSearchInput}
        ></input>
        <label htmlFor="Genere">Genere</label>
        <select id="Genere" name="Genere" onChange={handleGenreFilter}>
          <option value="All">All</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Action">Action</option>
        </select>
        <label htmlFor="Rating">Rating</label>
        <select id="Rating" name="Rating" onChange={handleRatingFilter}>
          <option value="All">All</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Bad">Bad</option>
        </select>
      </div>
      <div className="main-grid">
        {getFilteredMovies().map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              key={movie.id}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={watchlist.includes(movie.id)}
            ></MoviesCard>
          );
        })}
      </div>
    </div>
  );
}

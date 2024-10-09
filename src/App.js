import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MoviesGrid from "./Components/MoviesGrid";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WatchList from "./Components/Watchlist";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [Watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => {
        if (!response.ok) {
          throw Error("fetching issue");
        } else {
          return response.json();
        }
      })
      .then((data) => setMovies(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const tooglewatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  watchlist={Watchlist}
                  toggleWatchlist={tooglewatchlist}
                />
              }
            ></Route>
            <Route
              path="/Watchlist"
              element={
                <WatchList
                  movies={movies}
                  watchlist={Watchlist}
                  toggleWatchlist={tooglewatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

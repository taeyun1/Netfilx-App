import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./Row.css";
export default function Row({ title, fetchUrl, id, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const req = await axios.get(fetchUrl);
    setMovies(req.data.results);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div
          className={`slider__arrow-left ${
            isLargeRow && "slider__arrow-Large"
          }`}
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className="arrow">{"<"}</span>
        </div>

        <div id={id} className="row__posters">
          {movies &&
            movies.map((movie) => (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
              />
            ))}
        </div>

        <div
          className={`slider__arrow-right ${
            isLargeRow && "slider__arrow-Large"
          }`}
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../MovieCard";

import styles from "./MoviesGrid.module.css";

function MoviesGrid(props) {
  return (
    <ul className={styles.moviesGrid}>
      {props.movies.map((movie) => (
        <li key={movie.slug}>
          <MovieCard
            slug={movie.slug}
            title={movie.title}
            year={movie.year}
            imageUrl={movie.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
}

MoviesGrid.propTypes = {
  movies: PropTypes.array
};

MoviesGrid.defaultProps = {
  movies: []
};

export default MoviesGrid;

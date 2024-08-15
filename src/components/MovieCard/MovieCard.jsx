import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./MovieCard.module.css";

function MovieCard(props) {
  return (
    <Link to={`/movie/${props.slug}`} className={styles.link}>
      <img src={props.imageUrl} alt={`Poster of ${props.title}`} />
      <h3>
        {props.title} ({props.year})
      </h3>
    </Link>
  );
}

MovieCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default MovieCard;

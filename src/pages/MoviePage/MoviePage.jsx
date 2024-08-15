import React from "react";
import { useParams } from "react-router-dom";

import movies from "../../data/movies.json";

import MainLayout from "../../layouts/MainLayout";

import styles from "./MoviePage.module.css";

export default function MoviePage() {
  const { movieSlug } = useParams();

  const movie = movies.find((movie) => movie.slug === movieSlug);

  return (
    <MainLayout>
      <div>
        <h1 className={styles.title}>
          {movie.title} ({movie.year})
        </h1>
        <p className={styles.description}>{movie.description}</p>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${movie.youTubeTrailerId}`}
          title={`${movie.title} trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <ul className={styles.detailsList}>
          <li>
            Genres: <span>{movie.genres.join(", ")}</span>
          </li>
          <li>
            Director: <span>{movie.director}</span>
          </li>
          <li>
            Writers: <span>{movie.writers.join(", ")}</span>
          </li>
          <li>
            Actors: <span>{movie.actors.join(", ")}</span>
          </li>
        </ul>
        <p className={styles.moreDetails}>
          View more details on{" "}
          <a
            href={`https://www.imdb.com/title/${movie.imdb}`}
            target="_blank"
            rel="noreferrer"
          >
            IMDB
          </a>
          .
        </p>
      </div>
    </MainLayout>
  );
}

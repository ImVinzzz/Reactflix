import React, { useState } from "react";

import movies from "../../data/movies.json";

import MainLayout from "../../layouts/MainLayout";

import SearchBar from "../../components/SearchBar";
import MoviesGrid from "../../components/MoviesGrid";

import styles from "./HomePage.module.css";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const moviesToRender = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h3 className={styles.title}>
        Showing {moviesToRender.length}{" "}
        {moviesToRender.length === 1 ? "movie" : "movies"}
      </h3>

      <MoviesGrid movies={moviesToRender} />
    </MainLayout>
  );
}

import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <div>
      <input
        className={styles.input}
        placeholder="Search a movie"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;

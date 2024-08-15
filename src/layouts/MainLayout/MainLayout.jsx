import React from "react";
import PropTypes from "prop-types";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import styles from "./MainLayout.module.css";

function MainLayout(props) {
  const { children } = props;

  return (
    <div>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;

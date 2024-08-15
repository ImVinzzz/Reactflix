import React from "react";

import MainLayout from "../../layouts/MainLayout";

import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <MainLayout>
      <h1 className={styles.title}>About Page</h1>
      <p>A description about the app goes here...</p>
    </MainLayout>
  );
}

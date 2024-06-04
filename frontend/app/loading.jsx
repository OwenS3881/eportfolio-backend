import React from "react";

import styles from "@/app/styles/Loading.module.css";

const LoadingPage = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingPage;

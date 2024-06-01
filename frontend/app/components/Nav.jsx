import React from "react";

import styles from "../styles/nav.module.css";

import Link from "next/link";

const Nav = () => {
  return (
    <header className={styles.container}>
      <div className={styles.linkContainer}>
        <Link href={"/"}>Home</Link>
        <Link href={"/journal/"}>Journal</Link>
      </div>
    </header>
  );
};

export default Nav;

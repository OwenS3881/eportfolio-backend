import React from "react";

import styles from "../styles/Nav.module.css";

import Link from "next/link";

const Nav = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href={"/"}>
          <h2>Owen Szymanski</h2>
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Coursework</Link>
        <Link href={"/"}>Research</Link>
        <Link href={"/"}>Photos</Link>
        <Link href={"/journal/"}>Journal</Link>
      </div>
    </header>
  );
};

export default Nav;

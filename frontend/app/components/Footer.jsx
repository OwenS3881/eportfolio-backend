import React from "react";

import styles from "../styles/Footer.module.css";

import Link from "next/link";
import ContactInfo from "./ContactInfo";
import ResumeButton from "./ResumeButton";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>&copy;2024 Owen Szymanski</p>
      <ContactInfo />
      <ResumeButton />
    </div>
  );
};

export default Footer;

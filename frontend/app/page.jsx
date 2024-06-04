import React from "react";

import Image from "next/image";

import styles from "./styles/Home.module.css";

import Link from "next/link";
import ContactInfo from "./components/ContactInfo";
import ResumeButton from "./components/ResumeButton";

import ProfileSection from "./components/HomePage/ProfileSection";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfileSection />

      <div className={styles.todo}>
        <h3>TO DO: Sections to implement</h3>
        <ul>
          <li>Skills</li>
          <li>Most Recent Project</li>
          <li>Most Recent Coursework</li>
          <li>Most Recent Research</li>
          <li>Recent Journal Entry</li>
        </ul>
      </div>

    </div>
  );
};

export default HomePage;

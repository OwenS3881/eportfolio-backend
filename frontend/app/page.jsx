import React from "react";

import styles from "./styles/Home.module.css";

import ProfileSection from "./components/HomePage/ProfileSection";

import SkillIcon from "./components/SkillIcon";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfileSection />

      <SkillIcon />

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

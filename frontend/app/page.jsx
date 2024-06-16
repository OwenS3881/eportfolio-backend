import React from "react";

import styles from "./styles/Home.module.css";

import ProfileSection from "./components/HomePage/ProfileSection";
import SkillIcon from "./components/SkillIcon";
import Tooltip from "./components/Tooltip";

//Home Page

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfileSection />

      <Tooltip text={"React JS"} fontSize={"12px"}>
        <SkillIcon
          href={"https://react.dev/"}
          src={"/react-icon.png"}
          size={50}
          className={styles.test}
        />
      </Tooltip>

      <Tooltip text={"Next JS"} fontSize={"12px"}>
        <SkillIcon
          href={"https://nextjs.org/"}
          src={"/next-icon.jpg"}
          size={50}
        />
      </Tooltip>

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

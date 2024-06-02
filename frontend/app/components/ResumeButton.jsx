import React from "react";

import Link from "next/link";

import styles from "@/app/styles/ResumeButton.module.css";

const ResumeButton = () => {
  return (
    <Link className={styles.button} href={"/api/resume"}>
      Download Resume
    </Link>
  );
};

export default ResumeButton;

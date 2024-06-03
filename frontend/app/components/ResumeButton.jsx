import React from "react";

import Link from "next/link";

import styles from "@/app/styles/ResumeButton.module.css";

const ResumeButton = ( {className}) => {
  return (
    <Link className={`${styles.button} ${className}`} href={"/api/resume"}>
      Download Resume
    </Link>
  );
};

export default ResumeButton;

import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "@/app/styles/SkillIcon.module.css";

//Icon that displays a skill that I have

const SkillIcon = ({ href, src, size, target, className }) => {
  return (
    <div className={className}>
      <Link href={href ? href : ""} target={target ? target : "_blank"}>
        <Image
          className={styles.image}
          src={src}
          width={size}
          height={size}
          alt={`skill_icon_${src}`}
        />
      </Link>
    </div>
  );
};

export default SkillIcon;

import Link from "next/link";
import React from "react";

//Icon that displays a skill that I have

const SkillIcon = ({ href }) => {
  return <Link href={href ? href : ""}>Test</Link>;
};

export default SkillIcon;

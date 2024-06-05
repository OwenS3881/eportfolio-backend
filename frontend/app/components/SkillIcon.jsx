import Link from "next/link";
import React from "react";

const SkillIcon = ({ href }) => {
  return <Link href={href ? href : ""}>Test</Link>;
};

export default SkillIcon;

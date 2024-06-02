import React from "react";

import Link from "next/link";

const ContactInfo = ({ divClassName }) => {
  return (
    <div className={divClassName}>
      <Link href={"mailto:owenski08@gmail.com"}>owenski08@gmail.com</Link>
      <Link href={"mailto:oszymanski@ufl.edu"}>oszymanski@ufl.edu</Link>
      <p>407-383-8500</p>
    </div>
  );
};

export default ContactInfo;

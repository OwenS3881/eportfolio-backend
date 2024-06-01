import React from "react";

import Image from "next/image";

import styles from "./styles/Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/ProfilePictureSquare.jpg"}
          width={1000}
          height={1000}
          alt="OwenProfile"
        />
      </div>

      <div>
        <h1>Hi, I'm Owen</h1>
        <h3>Computer Science Major at the University of Florida</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi
          cumque facere veniam quod perspiciatis veritatis velit dignissimos
          ipsam quaerat, ut voluptatem reprehenderit, recusandae dolore saepe
          commodi tempora facilis, sequi incidunt? Minus repellat officia minima
          quam corporis. Amet alias vero molestiae tenetur et suscipit
          temporibus, eligendi voluptate nisi ut nostrum.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

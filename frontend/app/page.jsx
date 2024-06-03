import React from "react";

import Image from "next/image";

import styles from "./styles/Home.module.css";

import Link from "next/link";
import ContactInfo from "./components/ContactInfo";
import ResumeButton from "./components/ResumeButton";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.imageContainer}>
          <Image
            src={"/ProfilePictureSquare.jpg"}
            width={1000}
            height={1000}
            alt="OwenProfile"
          />
        </div>

        <div className={styles.aboutContainer}>
          <h1>Hi, I'm Owen</h1>
          <h3>Computer Science Major at the University of Florida.</h3>
          <p>
            Hello, I'm Owen Szymanski and I am an incoming Freshmen at the University of Florida. I am really excited to be majoring in Computer Science with the goal of becoming a software engineer. In addition to my CS major, I also want to earn a minor in Digital Arts and Sciences and a certificate in AI. I have also been accepted into UF's Honors Program and Undergraduate Research Scholars Program (URSP). For more about my research, check out my <Link href={"/research/"}>research</Link> page!
          </p>
          <ContactInfo className={styles.contactContainer} />
          <ResumeButton />
        </div>
      </section>

      <section>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati, dicta libero sequi quo quae, quidem fuga, reiciendis eveniet esse possimus consectetur eius facilis fugit! Id minima cum eligendi porro dignissimos perferendis quo deserunt ipsam debitis itaque hic voluptatibus illo reiciendis, eos provident maiores veritatis sapiente adipisci blanditiis, iste officiis.</p>
        </div>
        <div>
          Skills
        </div>
      </section>

      <section>
        <div>
            Most Recent Project
          </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati, dicta libero sequi quo quae, quidem fuga, reiciendis eveniet esse possimus consectetur eius facilis fugit! Id minima cum eligendi porro dignissimos perferendis quo deserunt ipsam debitis itaque hic voluptatibus illo reiciendis, eos provident maiores veritatis sapiente adipisci blanditiis, iste officiis.</p>
        </div>
      </section>

      <section>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati, dicta libero sequi quo quae, quidem fuga, reiciendis eveniet esse possimus consectetur eius facilis fugit! Id minima cum eligendi porro dignissimos perferendis quo deserunt ipsam debitis itaque hic voluptatibus illo reiciendis, eos provident maiores veritatis sapiente adipisci blanditiis, iste officiis.</p>
        </div>
        <div>
          Most Recent Coursework
        </div>
      </section>

      <section>
        <div>
            Most Recent Research
          </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati, dicta libero sequi quo quae, quidem fuga, reiciendis eveniet esse possimus consectetur eius facilis fugit! Id minima cum eligendi porro dignissimos perferendis quo deserunt ipsam debitis itaque hic voluptatibus illo reiciendis, eos provident maiores veritatis sapiente adipisci blanditiis, iste officiis.</p>
        </div>
      </section>

      <section> 
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati, dicta libero sequi quo quae, quidem fuga, reiciendis eveniet esse possimus consectetur eius facilis fugit! Id minima cum eligendi porro dignissimos perferendis quo deserunt ipsam debitis itaque hic voluptatibus illo reiciendis, eos provident maiores veritatis sapiente adipisci blanditiis, iste officiis.</p>
        </div>
        <div>
          Recent Journal Entry
        </div>
      </section>

    </div>
  );
};

export default HomePage;

import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>안녕하세요! 저는 장채윤입니다.</h1>
        <p className={styles.description}>
          저는 끈기와 도전으로 성장하고, 함께하는 가치를 실천하는 사람으로써
          알엠소프트에서 함께 발전하고 성장하고 싶습니다.
        </p>
        <a href="mailto:zzangsally@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;

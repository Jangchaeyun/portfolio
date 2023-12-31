import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a laptop"
          className={styles.abouttImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                화사 사람들과의 끊임없이 원활한 소통을 통해 내 실력을 끌어올려
                실력 있는 웹 개발자가 되고자 합니다.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                저는 끊임없이 학습하고 노력하여 회사에 가치를 더하는 역량을 가진
                백엔드 개발자가 되고자 합니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

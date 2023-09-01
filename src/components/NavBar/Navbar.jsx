import React, { useState } from "react";
import styles from "./navbar.module.css";
import { getImageUrl } from "../../utils.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(false)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Experice</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.div0}>
      <div className={styles.div1}>
        <img src="/Rick-and-Morty.png" alt="" className={styles.img0} />
      </div>
      <div className={styles.div1}>
        <h1 className={styles.h1}>Olá, usuário!</h1>
      </div>
    </div>
  );
};

export default Header;

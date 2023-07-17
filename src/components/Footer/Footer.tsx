import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Desenvolvido por{" "}
        <a
          href="https://github.com/filipegallodev"
          target="_blank"
          rel="external"
          className={styles.link}
        >
          Filipe
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;

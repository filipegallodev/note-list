import React from "react";
import styles from "./Section.module.css";

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </section>
    </>
  );
};

export default Section;

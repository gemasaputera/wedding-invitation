import React from "react";
import { Link } from "react-scroll";
import styles from "../../../styles/MenuItem.module.css";

export default function MenuItem({ icon, title, url }) {
  return (
    <Link
      className={styles.menuItem}
      to={url}
      smooth="true"
      spy
      exact="true"
      offset={-80}
      duration={500}
    >
      <img src={icon} alt={title} />
      <p className="capitalize hidden lg:block">{title}</p>
    </Link>
  );
}

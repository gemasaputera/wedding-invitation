import React from "react";
import styles from "../../../styles/MenuItem.module.css";
import { useRouter } from "next/router";

export default function MenuItem({ icon, title, url }) {
  const Router = useRouter();
  const handleClick = () => {
    Router.push(url);
  };
  return (
    <button
      className={`${styles.menuItem} ${
        url === Router.pathname ? styles.active : ""
      } `}
      onClick={handleClick}
    >
      <img src={icon} alt={title} />
    </button>
  );
}

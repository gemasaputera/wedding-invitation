import React from "react";
import styles from "../../../styles/Footer.module.css";
import Menu from "../../json/Menu.json";
import MenuItem from "./MenuItem";

export default function Footer() {
  return (
    <div className={`${styles.container} flex items-center`}>
      {Menu.map((menu, i) => {
        return <MenuItem key={`menu-${i}`} {...menu} />;
      })}
    </div>
  );
}

import React from "react";
import { animateScroll as scroll } from "react-scroll";
import styles from "../../../styles/Footer.module.css";
import styleMenu from "../../../styles/MenuItem.module.css";
import Menu from "../../json/Menu.json";
import MenuItem from "./MenuItem";

export default function Footer() {
  const handleClick = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={`${styles.container} flex items-center`}>
      <button className={styleMenu.menuItem} onClick={handleClick}>
        <img src="/icons/ic_home.svg" alt="Home" />
        <p className="capitalize hidden lg:block">Home</p>
      </button>
      {Menu.map((menu, i) => {
        return <MenuItem key={`menu-${i}`} {...menu} />;
      })}
    </div>
  );
}

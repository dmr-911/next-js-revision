import Link from "next/link";
import React from "react";
import HeaderLogo from "../../assets/icons/meal.png";
import classes from "./main-header.module.css";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={HeaderLogo} alt="Meals logo" priority />
        <span>NEXTLEVEL FOOD</span>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share meal</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

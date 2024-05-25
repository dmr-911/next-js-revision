import Link from "next/link";
import React from "react";
import HeaderLogo from "../../assets/icons/meal.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./NavLink";

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
            <NavLink href={`/meals`}>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

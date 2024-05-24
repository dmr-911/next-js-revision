import Link from "next/link";
import React from "react";
import HeaderLogo from "@/assets/icons/meal.png";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={HeaderLogo.src} alt="Meals logo" />
      </Link>
      <nav>
      <ul>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/meals/share">
            Share meal
          </Link>
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

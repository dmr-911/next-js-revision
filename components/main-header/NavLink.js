"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-header.module.css";

const NavLink = ({ children, href }) => {
  const path = usePathname();

  console.log("path", path, href);
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;

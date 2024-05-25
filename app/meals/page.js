import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import sql from "better-sqlite3";

const db = sql("meals.db");

const Meals = async () => {
  const getMeals = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return db.prepare("SELECT * FROM meals").all();
  };

  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe, and have fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default Meals;

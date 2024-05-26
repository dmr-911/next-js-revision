import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import sql from "better-sqlite3";
import MealsLoading from "@/components/Loading/loading";

const db = sql("meals.db");

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  throw new Error ("Loading meals failed!")
  return db.prepare("SELECT * FROM meals").all();
};

const GetMeals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const Meals = async () => {
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
        <Suspense fallback={<MealsLoading />}>
          <GetMeals />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;

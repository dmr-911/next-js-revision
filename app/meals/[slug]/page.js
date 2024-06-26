import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/getMeals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  // this is how the function will be called to give dynamic meta data, this function will receive the same data as our page props
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.description,
  };
}

const DynamicMeal = async ({ params }) => {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound(); // find the closest not-found/error.js component, next js provides that function
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>"); // over write meal instructions for actual line break
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default DynamicMeal;

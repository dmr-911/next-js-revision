"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./getMeals";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // console.log("meal", meal);
  await saveMeal(meal);
  redirect("/meals");
};

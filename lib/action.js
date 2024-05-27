"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./getMeals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Field is not valid"); // destroy all data on page, but that's not how we works
    return {
      message: "Invalid input.",
    };
  }

  // console.log("meal", meal);
  await saveMeal(meal);

  revalidatePath("/meals", "layout"); // default only the direct path, as we send layout to 2nd param it revalidate all related paths

  redirect("/meals");
};

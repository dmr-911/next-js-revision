import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");
1;

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  throw new Error("Loading meals failed!");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = async (slug) => {
  // return db.prepare("SELECT * FROM meals WHERE slug = "+slug) // it opens vulnerability
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // it is more reliable
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferImage = await meal.image.arrayBuffer(); // array buffer is file property, returns a promise, should use await

  stream.write(Buffer.from(bufferImage), (err) => {
    if (err) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`; // don't use public

  // VALUES (?, ?, ?, ?, ?) YOU can insert like this too
  db.prepare(
    `
  INSERT INTO meals
  (title, summary, instructions, creator, creator_email, image, slug)
  VALUES (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
  )
  `
  ).run(meal);
};

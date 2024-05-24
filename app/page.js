import Link from "next/link";

export default function Home() {
  console.log("executing...");
  return (
    <main>
      <h1>Welcome to this NextJS Course!</h1>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/community">Community</Link></p>
      <p><Link href="/meals/meals-1">Meal 1</Link></p>
      <p><Link href="/meals/share">Meals Share</Link></p>
    </main>
  );
}

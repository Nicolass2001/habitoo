import type { MetaFunction } from "@remix-run/node";
import { HabitDisplay } from "~/components/HabitDisplay/HabitDisplay";

// test data ---------------------------------------
const habitsPerDay = Array.from({ length: 365 }, () =>
  Math.floor(Math.random() * 6)
);
const year = 2025;
// -------------------------------------------------

export const meta: MetaFunction = () => {
  return [
    { title: "Habitoo" },
    { name: "description", content: "Welcome to Habitoo!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Hello World!</h1>
      <HabitDisplay habitsPerDay={habitsPerDay} year={year} />
    </>
  );
}

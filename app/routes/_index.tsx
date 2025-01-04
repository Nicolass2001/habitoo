import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Habitoo" },
    { name: "description", content: "Welcome to Habitoo!" },
  ];
};

export default function Index() {
  return <h1>Hello World!</h1>;
}

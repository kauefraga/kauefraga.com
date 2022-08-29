import { useEffect, useState } from "react";
import { getName } from "../services/getName";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    getName().then((name) => {
      setName(name);
    });
  }, []);

  return (
    <>
      <h1 className="text-lg font-bold text-center">Hello {name}!</h1>
    </>
  );
}

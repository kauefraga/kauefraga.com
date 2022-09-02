import { useEffect, useState } from "react";
import { Icon } from "../components/Icon";
import { getName } from "../services/getName";

export default function Home() {
  const [name, setName] = useState("World");

  useEffect(() => {
    getName().then((name) => {
      setName(name);
    });
  }, []);

  return (
    <>
      <header className="flex justify-between m-3">
        <h1 className="hidden md:inline font-bold text-blue-700">
          Hello, {name}!
        </h1>
        <nav>
          <a className="px-2" href="#about">
            About
          </a>
          <a className="px-2" href="#contact">
            Contact
          </a>
          <a className="px-2" href="/projects">
            Projects
          </a>
        </nav>
      </header>

      <main className="flex flex-col mt-8 items-center">
        <section className="flex flex-col items-center space-y-4">
          <h2 className="text-center text-2xl font-semibold">
            Backend Developer
            {/* <h2 className="text-xs">almost fool stack rsrsrs</h2> */}
          </h2>
          <p className="text-lg">
            I design and code production-quality APIs, and i love what i do.
          </p>
          <Icon src="/kauefraga.png" alt="Kauê's Profile Image" />
        </section>

        <section className="flex flex-col justify-center items-center mt-8 w-full min-h-[15rem] bg-blue-700 text-gray-300">
          <h3 className="my-2 text-lg font-semibold">
            Hi, im Kauê. Nice to meet you.
          </h3>
          <p className="w-[25rem] text-sm break-words text-center my-2">
            Since beginning my journey as a backend developer over 1 year ago,
            Im quietly confident, naturally curious, and perpetually working on
            improving my skills at a time.
          </p>
        </section>
      </main>
    </>
  );
}

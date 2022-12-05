import { NavLink } from '../Links/NavLink';

export const Header: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <header className="flex justify-center text-lg m-3 p-4 md:justify-between md:text-xl">
      <h1 className="hidden md:inline md:font-bold md:text-blue-700">
        Hello {text ?? '👋'}!
      </h1>
      <nav>
        <NavLink href="/#about" text="About" />
        <NavLink href="mailto:kauefragarodrigues456@gmail.com" text="Contact" />
        <NavLink href="/projects" text="Projects" />
      </nav>
  </header>
  );
};

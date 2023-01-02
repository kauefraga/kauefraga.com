import { KaueSocialIcon } from '../Links/SocialLink';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bottom-0 left-0 w-full bg-blue-700 items-center">
      <header className="my-4 text-center">
        <h2 className="text-white font-semibold text-lg mb-4">
          Kauê Fraga Rodrigues
        </h2>
        <nav className="mt-4">
          <KaueSocialIcon url="https://twitter.com/__kauefraga" />
          <KaueSocialIcon url="https://www.linkedin.com/in/kauefraga" />
          <KaueSocialIcon url="https://github.com/kauefraga" />
          <KaueSocialIcon url="mailto:kauefragarodrigues456@gmail.com" />
        </nav>
      </header>
      <main className="mt-4 mb-4">
        <p className="text-white">Handcrafted by me © {new Date().getFullYear()}</p>
      </main>
    </footer>
  );
};

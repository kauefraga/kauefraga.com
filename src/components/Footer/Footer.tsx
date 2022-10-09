import React from 'react';
import { KaueSocialIcon } from '../Link/SocialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col absolute bottom-0 left-0 w-full bg-blue-700 items-center">
      <header className="m-4 text-center">
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
        <p className="text-white">Handcrafted by me © 2022</p>
      </main>
    </footer>
  );
};

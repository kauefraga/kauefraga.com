import NextLink from 'next/link';

interface LinkProps {
  text: string;
  href: string;
}

export const NavLink: React.FC<LinkProps> = ({ text, href }) => {
  return (
    <NextLink href={href}>
      <a className="mx-3 p-1 md:hover:border-b-2 md:hover:border-b-blue-700">
        {text}
      </a>
    </NextLink>
  );
};

import NextLink from "next/link";

interface LinkProps {
  anchor: string;
  href: string;
}

export const NavLink: React.FC<LinkProps> = ({ anchor, href }) => {
  return (
    <NextLink href={href}>
      <a className="mx-3 p-1 md:hover:border-b-2 md:hover:border-b-blue-700">
        {anchor}
      </a>
    </NextLink>
  );
};

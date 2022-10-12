/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';

/* Card Representation
  *-----Repo Link------*
  |   Card Image(img)  |
  |   Card Title(h3)   |
  |  ?Card Desc(p)     |
  *--------------------*
*/

interface ICardProps {
  id?: number;
  title: string;
  href: string;
  img_url: string;
}

export const Card: React.FC<ICardProps> = ({ id, title, href, img_url }) => {
  return (
    <NextLink key={id} href={href}>
      <a
        className="
          w-72 flex flex-col my-2 border-2 border-blue-700 overflow-hidden rounded-lg text-center
          md:mx-2
        "
      >
        <header className="rounded-lg">
          <img
            src={img_url}
            style={{
              width: '284px',
              height: '212px'
            }}
            alt="Some random image"
          />
        </header>
        <main className="p-4">
          {title}
        </main>
      </a>
    </NextLink>
  );
};

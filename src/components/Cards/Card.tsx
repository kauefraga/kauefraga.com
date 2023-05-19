/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { IRepo } from '../../services/getRepos';

/* Card Representation
  *-----Repo Link------*
  |   Card Image(img)  |
  |   Card Title(h3)   |
  |  ?Card Desc(p)     |
  *--------------------*
*/

const colors = [
  'red', 'tomato',
  'green', 'seagreen',
  'yellow',
  'blue', 'skyblue',
  'purple', 'blueviolet',
  'gray', 'slategray',
  'dimgray',
  'orange',
  'teal'
];


export const Card: React.FC<IRepo> = ({
  id,
  name,
  description,
  html_url,
  license,
}) => {
  if (!description) {
    description = '😥 There is no description. Probably deprecated.';
  }

  return (
    <NextLink key={id} href={html_url}>
      <a
        className="
          flex w-80 h-32 my-2 border-2 border-blue-700 rounded-lg
          md:w-96 md:mx-2 overflow-hidden
        "
      >
        <aside
          className="w-[2.5%] h-full"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)]
          }}
        ></aside>
        <main className="flex flex-col w-[95%] p-4">
          <h3
            className="font-bold text-lg"
          >
            {name}
            <span className='text-slate-600'>
              {' '}({license?.key ?? 'there is no license'})
            </span>
          </h3>
          <p
            className="w-60 flex-wrap md:w-80 md:text-base"
          >
            {description}
          </p>
        </main>
        <aside
          className="w-[2.5%] h-full"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)]
          }}
        ></aside>
      </a>
    </NextLink>
  );
};

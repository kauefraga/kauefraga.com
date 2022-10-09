import { useEffect, useState } from 'react';
import { getRandomUser } from '../../services/getUser';
import { IUserProps, User } from '../../components/User/User';
import { NavLink } from '../../components/Link/NavLink';
import Head from 'next/head';
import { Footer } from '../../components/Footer/Footer';

export default function RandomUser() {
  const [title, setTitle] = useState<string>();
  const [userImageHref, setUserImageHref] = useState<string>();
  const [user, setUserData] = useState([]);

  useEffect(() => {
    getRandomUser()
      .then(data => {
        setUserData(data);
        setTitle(`${data[0].name.first} ${data[0].name.last}`);
        setUserImageHref(data[0].picture.thumbnail);
      });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={userImageHref} />
      </Head>
      <header className="flex justify-center text-lg m-3 p-4 md:justify-between md:text-xl">
        <h1 className="hidden md:inline md:font-bold md:text-blue-700">
          Hello 👋!
        </h1>
        <nav>
          <NavLink href="/#about" anchor="About" />
          <NavLink href="/#contact" anchor="Contact" />
          <NavLink href="/projects" anchor="Projects" />
        </nav>
      </header>
      <main className="flex flex-col mt-8 items-center">
        <section className="flex flex-col items-center text-center space-y-4-items-center">
          {user.map((user: IUserProps, index: number) => {
            return (
              <User key={index} props={user} />
            );
          })}
        </section>
      </main>

      <Footer />
    </>
  );
}

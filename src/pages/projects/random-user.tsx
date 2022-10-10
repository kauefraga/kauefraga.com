import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getRandomUser } from '../../services/getUser';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { IUserProps, User } from '../../components/User/User';

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

      <Header />

      <main className="flex flex-col my-8 items-center">
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

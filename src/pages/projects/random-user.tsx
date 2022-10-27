import Head from 'next/head';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { User } from '../../components/User/User';
import { useFetch } from '../../hooks/useFetch';

interface IGetRandomUser {
  results: [
    {
      gender: string,
      name: {
        first: string,
        last: string
      },
      dob: {
        age: number,
      },
      picture: {
        large: string;
        thumbnail: string;
      },
      location: {
        city: string,
        country: string,
      }
    }
  ]
}

export default function RandomUser() {
  const { data } = useFetch<IGetRandomUser>('https://randomuser.me/api');

  if (!data) {
    return <Loading />;
  }

  const user = data.results[0];

  return (
    <>
      <Head>
        <title>{`${user.name.first} ${user.name.last}`}</title>
        <link rel="icon" type="image/png" href={user.picture.thumbnail} />
      </Head>

      <Header />

      <main className="flex flex-col my-8">
        <section className="flex flex-col items-center text-center space-y-4-items-center">
          <User props={user} />
        </section>
      </main>

      <Footer />
    </>
  );
}

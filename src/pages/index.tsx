import { Loading } from '../components/Loading';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Icon } from '../components/Icon';
import { useFetch } from '../hooks/useFetch';
import { baseApiURL } from '../providers/axios';

interface GetName {
  name: string;
}

export default function Home() {
  const { data } = useFetch<GetName>(`${baseApiURL}/hello`);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <Header text={data.name} />

      <main className="flex flex-col my-4 items-center">
        <section id="about" className="flex flex-col items-center space-y-4">
          <h2 className="text-center text-2xl font-semibold">
            Backend Developer
            {/* <h2 className="text-xs">almost fool stack rsrsrs</h2> */}
          </h2>
          <p className="text-base w-64 flex-wrap md:text-lg md:w-auto md:flex-nowrap">
            I design and code production-quality APIs, and i love what i do.
          </p>
          <Icon src="/kauefraga.png" alt="Kauê's Profile Image" />
        </section>

        <section className="flex flex-col justify-center items-center mt-4 w-full min-h-[15rem] bg-blue-700">
          <h3 className="my-2 text-lg font-semibold text-white">
            Hi, im Kauê. Nice to meet you.
          </h3>
          <p className="
          text-gray-200
            w-72 text-base flex-wrap text-justify my-2
            md:w-[25rem] md:text-lg md:text-center md:flex-nowrap
          ">
            Since beginning my journey as a backend developer over 1 year ago.
            Im quietly confident, naturally curious, and perpetually working on
            improving my skills at a time.
          </p>
        </section>

        { /* A card-based projects section */}
        <p className="my-4 text-gray-400">Projects section coming soon...</p>
      </main>

      <Footer />
    </>
  );
}

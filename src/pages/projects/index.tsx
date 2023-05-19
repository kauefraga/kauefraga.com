import type { InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import { getRepos } from '../../services/getRepos';
import { getRandomPhotos } from '../../services/getRandomPhotos';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SearchInput } from '../../components/Inputs/SearchInputs';
import { Card } from '../../components/Cards/Card';

export default function Projects({
  repos,
  photos
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState('');

  const filteredRepos = search.length > 0
    ? repos.filter(repo => repo.name.includes(search.toLowerCase()))
    : [];

  return (
    <>
      <Header />

      <main className="flex flex-col my-4 items-center 2xl:h-fit">

        <SearchInput
          placeholder="Search..."
          onChange={e => setSearch(e.target.value)}
          value={search}
        />

        <section className="flex flex-col flex-wrap my-8 md:flex-row justify-center">
          {search.length > 0
            ? (
                filteredRepos.map(repo => {
                  return (
                    <Card
                      key={repo.id}
                      name={repo.name.toLowerCase()}
                      description={repo.description}
                      html_url={repo.html_url}
                      license={repo.license}
                    />
                  );
                })
            )
            : repos.map(repo => {
              return (
                <Card
                  key={repo.id}
                  name={repo.name.toLowerCase()}
                  description={repo.description}
                  html_url={repo.html_url}
                  license={repo.license}
                />
              );
            })
          }
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const repos = await getRepos()
    .then(repos => repos);

  const photos = await getRandomPhotos()
    .then(photos => photos);

  return {
    props: {
      repos,
      photos
    },
    revalidate: 60 * 60 // 60 minutes
  };
};

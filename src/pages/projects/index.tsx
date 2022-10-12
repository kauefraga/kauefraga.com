import { useEffect, useState } from 'react';
import { getRepos } from '../../services/getRepos';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SearchInput } from '../../components/Inputs/SearchInputs';
import { Card } from '../../components/Cards/Card';
import { getRandomPhotos } from '../../services/getRandomPhotos';

interface IRepo {
  id: number;
  name: string,
  description: string,
  html_url: string,
}

interface IPhoto {
  id: number;
  author: string;
  width: number;
  height: number;
  download_url: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [search, setSearch] = useState('');
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    getRepos()
      .then(repos => setRepos(repos));

    getRandomPhotos()
      .then(photos => setPhotos(photos));
  }, []);

  const filteredRepos = search.length > 0
    ? repos.filter(repo => repo.name.includes(search))
    : [];

  return (
    <>
      <Header />

      <main className="flex flex-col my-4 items-center 2xl:h-screen">

        <SearchInput
          placeholder="Search..."
          onChange={e => setSearch(e.target.value)}
          value={search}
        />

        <section className="flex flex-col flex-wrap my-8 md:flex-row justify-center">
          {search.length > 0
            ? (
              <ul>
                {filteredRepos.map(repo => {
                  return (
                    <Card
                      key={repo.id}
                      title={repo.name}
                      href={repo.html_url}
                      img_url={
                        photos[Math.floor(Math.random() * photos.length)].download_url
                      }
                    />
                  );
                })}
              </ul>
            )
            : repos.map(repo => {
              return (
                <Card
                  key={repo.id}
                  title={repo.name}
                  href={repo.html_url}
                  img_url={
                    photos[Math.floor(Math.random() * photos.length)].download_url
                  }
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

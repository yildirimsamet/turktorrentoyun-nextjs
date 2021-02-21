import Head from "next/head";
import { useEffect } from "react";
import AdBanner from "../components/AdBanner/AdBanner";
import GamesContainer from "../components/GamesContainer/GamesContainer";
import RandomGames from "../components/RandomGames/RandomGames";
export default function Home({ gamesData, lang }) {
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "http://turktorrentoyunapi.herokuapp.com/api/links"
      );
      const links = await res.json();
      links.map((item, index) => {
        if (index > 1500 && index < 3500) {
          console.log(
            `<url><loc>https://turktorrentoyun.com/${item.url}/</loc></url>`
          );
        }
      });
    })();
  }, []);
  return (
    <div>
      <Head>
        <title>Turk Torrent Oyun, Full oyun, Tek Link Oyun Yükle Demo</title>
      </Head>
      <div className="container text-center mt-5">
        <AdBanner />
      </div>
      <RandomGames lang={lang} />
      <GamesContainer lang={lang} gamesData={gamesData} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res2 = await fetch(
    "https://turktorrentoyunapi.herokuapp.com/pagination/lastadded/0"
  );
  const gamesData = await res2.json();

  return {
    props: {
      gamesData,
    },
    revalidate: 300,
  };
};

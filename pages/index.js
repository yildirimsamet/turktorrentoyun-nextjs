import Head from "next/head";
import AdBanner from "../components/AdBanner/AdBanner";
import GamesContainer from "../components/GamesContainer/GamesContainer";
import RandomGames from "../components/RandomGames/RandomGames";
export default function Home({ gamesData, lang }) {
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
    "https://turktorrentoyun.herokuapp.com/api/pagination/lastadded/0"
  );
  const gamesData = await res2.json();

  return {
    props: {
      gamesData,
    },
    revalidate: 300,
  };
};

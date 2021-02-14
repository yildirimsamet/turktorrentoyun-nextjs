import Head from "next/head";
import GamesContainer from "../components/GamesContainer/GamesContainer";
import RandomGames from "../components/RandomGames/RandomGames";

export default function Home({ randomGames, gamesData }) {
  return (
    <div>
      <Head>
        <title>Turk Torrent Oyun, Full oyun, Tek Link Oyun Yükle Demo</title>
      </Head>
      <RandomGames randomGames={randomGames} />
      <GamesContainer gamesData={gamesData} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch("https://turktorrentoyunapi.herokuapp.com/randomsix");
  const randomGames = await res.json();
  const res2 = await fetch(
    "https://turktorrentoyunapi.herokuapp.com/pagination/lastadded/0"
  );
  const gamesData = await res2.json();

  return {
    props: {
      randomGames,
      gamesData,
    },
  };
};

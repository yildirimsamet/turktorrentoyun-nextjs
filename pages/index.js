import Head from "next/head";
import { useEffect } from "react";

import GamesContainer from "../components/GamesContainer/GamesContainer";
import RandomGames from "../components/RandomGames/RandomGames";

export default function Home({ gamesData, lang }) {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(err);
    }
  }, [typeof window]);
  return (
    <div>
      <Head>
        <title>Turk Torrent Oyun, Full oyun, Tek Link Oyun Yükle Demo</title>
      </Head>
      <div className="container text-center mt-5">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2743431608715099"
          data-ad-slot="8093814491"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <RandomGames lang={lang} />
      <GamesContainer lang={lang} gamesData={gamesData} />
    </div>
  );
}
// export const getServerSideProps = async () => {
//   const res = await fetch("https://turktorrentoyunapi.herokuapp.com/randomsix");
//   const randomGames = await res.json();
//   const res2 = await fetch(
//     "https://turktorrentoyunapi.herokuapp.com/pagination/lastadded/0"
//   );
//   const gamesData = await res2.json();

//   return {
//     props: {
//       randomGames,
//       gamesData,
//     },
//   };
// };
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

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
const searchPage = ({ searchGames }) => {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState("");
  const [searchGamesCount, setSearchGamesCount] = useState(0);
  useEffect(() => {
    setSearchResult(router.query.searchparam);
    setSearchGamesCount(searchGames.length);
  }, [router.query.searchparam, searchGames]);
  if (searchGames.length > 0) {
    return (
      <div>
        <div className="container mt-5 text-center">
          <h1>{"'" + searchResult + "'" + " arama sonuçları"}</h1>
          <p className="text-muted">{searchGamesCount + " sonuç bulundu"}</p>
        </div>

        <SearchContainer gamesData={searchGames} />
      </div>
    );
  } else {
    return (
      <div className="container mt-5 text-center">
        <h1>{"'" + searchResult + "'" + " arama sonucunuz bulunamadı."}</h1>
      </div>
    );
  }
};
export default searchPage;

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    `https://turktorrentoyunapi.herokuapp.com/api/search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchItem: ctx.params.searchparam }),
    }
  );
  const searchGames = await res.json();
  return {
    props: {
      searchGames,
    },
  };
};

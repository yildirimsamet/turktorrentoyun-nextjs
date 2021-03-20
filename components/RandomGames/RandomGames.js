import styles from "./RandomGames.module.css";
import { IoMdRefresh } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
const RandomGames = ({ lang }) => {
  const [randomGamesState, setRandomGamesState] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    fetch("https://turktorrentoyun.herokuapp.com/api/randomsix")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setRandomGamesState(res);
      });
  };
  useEffect(() => {
    fetch("https://turktorrentoyun.herokuapp.com/api/randomsix")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setRandomGamesState(res);
      });
  }, []);

  return (
    <div className={styles.randomGames + " mt-5"}>
      {loading && <Loader />}
      <span className={styles.randomGamesTag}>
        {lang === "TR" ? "Rastgele oyunlar" : "Random games"}
      </span>
      <span className={styles.randomGamesRefreshTag}>
        <IoMdRefresh
          size="22px"
          onClick={() => {
            setLoading(true);
            getData();
          }}
        />
      </span>
      {randomGamesState.map((item) => {
        return (
          <Link key={item.id} href={"/" + item.url}>
            <a draggable="true">
              <img
                className={styles.randomGamesImg}
                src={item.image}
                alt={item.title}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export default RandomGames;

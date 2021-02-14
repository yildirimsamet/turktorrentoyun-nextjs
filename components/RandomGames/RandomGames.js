import styles from "./RandomGames.module.css";
import { IoMdRefresh } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
const RandomGames = ({ randomGames }) => {
  const [randomGamesState, setRandomGamesState] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setRandomGamesState(randomGames);
  }, [randomGames]);

  return (
    <div className={styles.randomGames}>
      {loading && <Loader />}
      <span className={styles.randomGamesTag}>Rastgele oyunlar</span>
      <span className={styles.randomGamesRefreshTag}>
        <IoMdRefresh
          size="22px"
          onClick={() => {
            setLoading(true);
            fetch("https://turktorrentoyunapi.herokuapp.com/randomsix")
              .then((res) => res.json())
              .then((res) => {
                setLoading(false);
                setRandomGamesState(res);
              });
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

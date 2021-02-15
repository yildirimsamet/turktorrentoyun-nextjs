import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./SearchContainer.module.css";
const GamesContainer = ({ gamesData }) => {
  const [gamesDataState, setGamesDataState] = useState([]);

  useEffect(() => {
    setGamesDataState(gamesData);
  }, [gamesData]);

  return (
    <>
      <div className={styles.gamesContainer + " container"}>
        {gamesDataState.map((item) => {
          return (
            <Link href={"/" + item.url} key={item.id}>
              <a className={styles.cardLink}>
                <img className={styles.cardImage} src={item.image} alt="asd" />
                <p className={styles.cardTitle}>{item.title}</p>
                <div className={styles.cardViewCount}>
                  <img
                    className="mx-1"
                    src="https://img.icons8.com/android/18/ffffff/visible.png"
                    alt="eye"
                  />
                  <span>{item.viewCount + " görüntülenme"}</span>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default GamesContainer;

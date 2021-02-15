import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./GamesContainer.module.css";
import Loader from "../Loader/Loader";
const GamesContainer = ({ gamesData, lang }) => {
  const [gamesDataState, setGamesDataState] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentApi, setCurrentApi] = useState(
    "https://turktorrentoyunapi.herokuapp.com/pagination/lastadded"
  );
  const [currentTag, setCurrentTag] = useState("Most");

  useEffect(() => {
    setGamesDataState(gamesData);
    return () => {
      setLoading(false);
    };
  }, []);
  useEffect(() => {
    fetch(currentApi + "/" + currentPage.toString())
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setGamesDataState(res);
      });
  }, [gamesData, currentApi, currentPage]);

  return (
    <>
      <div className={styles.gamesContainer + " container"}>
        {loading && <Loader />}
        <span
          onClick={() => {
            setLoading(true);
            setCurrentTag("Last");
            setCurrentPage(0);
            setCurrentApi(
              "https://turktorrentoyunapi.herokuapp.com/pagination/mostviewed"
            );
          }}
          className={
            currentTag === "Last"
              ? "gamesContainerTagLast active"
              : "gamesContainerTagLast"
          }
        >
          {lang === "TR" ? "Çok indirilenler" : "Most populer..."}
        </span>
        <span
          onClick={() => {
            setLoading(true);
            setCurrentTag("Most");
            setCurrentPage(0);
            setCurrentApi(
              "https://turktorrentoyunapi.herokuapp.com/pagination/lastadded"
            );
          }}
          className={
            currentTag === "Most"
              ? "gamesContainerTagMost active"
              : "gamesContainerTagMost"
          }
        >
          {lang === "TR" ? "Son eklenen" : "Last added...   "}
        </span>
        {gamesDataState.map((item) => {
          return (
            <Link href={"/" + item.url} key={item.id}>
              <a
                onClick={() => {
                  setLoading(true);
                }}
                className={styles.cardLink}
              >
                <img className={styles.cardImage} src={item.image} alt="asd" />
                <p className={styles.cardTitle}>{item.title}</p>
                <div className={styles.cardViewCount}>
                  <img
                    className="mx-1"
                    src="https://img.icons8.com/android/18/ffffff/visible.png"
                  />
                  <span>{item.viewCount + " görüntülenme"}</span>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <div className="container d-flex justify-content-center my-2">
        <button
          disabled={loading === true || currentPage < 2 ? true : false}
          onClick={() => {
            setCurrentPage(currentPage - 8);
            setLoading(true);
          }}
          className={styles.paginationButton + " mx-1"}
        >
          {lang === "TR" ? "<< Geri" : "<< Prev"}
        </button>
        <button
          disabled={
            loading === true || gamesDataState.length < 8 ? true : false
          }
          onClick={() => {
            setCurrentPage(currentPage + 8);
            setLoading(true);
          }}
          className={styles.paginationButton + " mx-1"}
        >
          {lang === "TR" ? "İleri >>" : "Next >>"}
        </button>
      </div>
    </>
  );
};
export default GamesContainer;

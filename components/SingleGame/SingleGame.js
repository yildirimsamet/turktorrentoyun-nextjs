import styles from "./SingleGame.module.css";
import Link from "next/link";

const SingleGame = ({ data, lang }) => {
  if (data) {
    return (
      <div className={styles.singleGame + " container"}>
        <h1 className={styles.title}>
          {lang === "TR"
            ? data.title + " torrent oyun indir"
            : data.title + " torrent download"}
        </h1>
        <img className={styles.mainImage} src={data.image} alt={data.title} />
        <h2 className={styles.title}>
          {lang === "TR"
            ? data.title + " torrent oyun açıklaması "
            : data.title + " torrent game description"}
        </h2>
        <p className={styles.description + " w-75"}>
          {data.content
            ? data.content
            : lang === "TR"
            ? data.title + " torrent oyunu açıklaması henüz eklenmedi."
            : data.title + " torrent game currently has no description"}
        </p>
        <h3 className={styles.title}>
          {lang === "TR"
            ? "Oyunun yapımcısına destek olun"
            : "Support the producer of the game"}
        </h3>
        {lang === "TR" ? (
          <p className="w-75">
            {data.title} Oyunu beğendiyseniz{" "}
            <a
              className={styles.creatorUrl}
              target="_blank"
              href={data.creatorUrl ? data.creatorUrl : "/"}
            >
              BURADAN
            </a>{" "}
            oyunu satın alabilir, oyun yapımcısına destek olabilir ve yeni
            oyunların çıkmasının önünü açabilirsiniz.
          </p>
        ) : (
          <p className="w-75">
            {data.title} If you like the game you can purchase from{" "}
            <a
              className={styles.creatorUrl}
              target="_blank"
              href={data.creatorUrl ? data.creatorUrl : "/"}
            >
              HERE
            </a>{" "}
            and support the game maker so you can pave the way for more games to
            come out.
          </p>
        )}
        <h3 className={styles.title}>
          {lang === "TR" ? "Oyun İçi Görseller" : "In-game images"}
        </h3>
        {Array.from(data.inGameImages).map((item, index) => {
          return (
            <img
              key={index}
              className={styles.inGameImages}
              src={item}
              alt={data.title}
            />
          );
        })}
        <h4 className={styles.title}>
          {lang === "TR"
            ? "Minimum Sistem Gereksinimleri"
            : "Minimum system requirements"}
        </h4>
        <div className={styles.systemReq + " text-left w-75"}>
          <p>
            {lang === "TR" ? "İşletim sistemi:" : "OS:"}{" "}
            <span>
              {data.req
                ? data.req.system
                : lang === "TR"
                ? "Bilinmiyor"
                : "Unknown"}
            </span>
          </p>
          <p>
            {lang === "TR" ? "İşlemci:" : "CPU:"}{" "}
            <span>
              {data.req
                ? data.req.cpu
                : lang === "TR"
                ? "Bilinmiyor"
                : "Unknown"}
            </span>
          </p>
          <p>
            {lang === "TR" ? "Ekran Kartı:" : "GPU:"}{" "}
            <span>
              {data.req
                ? data.req.gpu
                : lang === "TR"
                ? "Bilinmiyor"
                : "Unknown"}
            </span>
          </p>
          <p>
            {lang === "TR" ? "Bellek:" : "RAM:"}{" "}
            <span>
              {data.req
                ? data.req.ram
                : lang === "TR"
                ? "Bilinmiyor"
                : "Unknown"}
            </span>
          </p>
          <p>
            {lang === "TR" ? "Boyut:" : "SIZE:"}{" "}
            <span>
              {data.siz ? data.size : lang === "TR" ? "Bilinmiyor" : "Unknown"}
            </span>
          </p>
        </div>
        <p>{lang === "TR" ? "İndirime Linki" : "Download link"}</p>
        <Link href={data.downloadLink}>
          <a className={styles.downloadLink}>
            {lang === "TR" ? data.title + " indir" : data.title + " download"}
          </a>
        </Link>
      </div>
    );
  } else {
    return (
      <h1>
        {lang === "TR"
          ? "Aradınığınız oyun bulunamadı."
          : "Couldnt find any result."}
      </h1>
    );
  }
};
export default SingleGame;

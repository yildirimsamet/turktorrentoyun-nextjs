import styles from "./SingleGame.module.css";
import Link from "next/link";
import Head from "next/head";

const SingleGame = ({ data, lang }) => {
  if (data) {
    return (
      <div className={styles.singleGame + " container mt-3"}>
        <Head>
          <meta
            name="description"
            content={`⭐⭐⭐⭐ ${data.title} torrentle indir. Reklamsız full torrent oyun torrentle oyun indir...`}
          />

          <title>{data.title} torrentle indir - Turk Torrent Oyun %100 ✔</title>
        </Head>
        <h1 className={styles.title}>
          {lang === "TR"
            ? data.title + " torrentle indir"
            : data.title + " torrent download"}
        </h1>
        <img className={styles.mainImage} src={data.image} alt={data.title} />
        <p className="w-75">
          Oyun sorunsuz çalışmakta. Alttaki linkten {data.title} torrentle
          indirip kurduktan sonra crack atıp oynayabilirsiniz. Kurulumu
          bilmiyorsanız{" "}
          <Link href="/utorrent-oyun-indirip-kurma">
            <a>utorrent oyun indirip kurma</a>
          </Link>{" "}
          kısmından öğrenebilirsiniz.
        </p>
        <h2 className={styles.title}>
          {lang === "TR" ? "Oyunun açıklaması" : "Game description"}
        </h2>
        <p className={styles.description + " w-75"}>
          {data.content
            ? data.content
            : lang === "TR"
            ? data.title +
              " torrentle indir açıklaması en kısa sürede eklenecektir."
            : data.title + "'s description will be added as soon as possible"}
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
              alt={data.title + " torrentle indir " + index}
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
              {data.size ? data.size : lang === "TR" ? "Bilinmiyor" : "Unknown"}
            </span>
          </p>
        </div>
        <p>{lang === "TR" ? "İndirime Linki" : "Download link"}</p>
        <Link href={data.downloadLink}>
          <a rel="nofollow" className={styles.downloadLink}>
            {lang === "TR"
              ? data.title + " torrentle indir"
              : data.title + " download"}
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

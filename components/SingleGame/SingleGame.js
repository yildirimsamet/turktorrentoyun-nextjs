import styles from "./SingleGame.module.css";
import Link from "next/link";

const SingleGame = ({ data }) => {
  if (data) {
    return (
      <div className={styles.singleGame + " container"}>
        <h1 className={styles.title}>{data.title + " torrent oyun indir"}</h1>
        <img className={styles.mainImage} src={data.image} alt={data.title} />
        <h2 className={styles.title}>
          {data.title + " torrent oyun açıklaması "}
        </h2>
        <p className={styles.description + " w-75"}>
          {data.content
            ? data.content
            : data.title + " torrent oyunu açıklaması henüz eklenmedi."}
        </p>
        <h3 className={styles.title}>Oyun Yapımcısına Destek Olun</h3>
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
        <h3 className={styles.title}>Oyun İçi Görseller</h3>
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
        <h4 className={styles.title}>Minimum Sistem Gereksinimleri</h4>
        <div className={styles.systemReq + " text-left w-75"}>
          <p>
            İşletim sistemi:{" "}
            <span>{data.req ? data.req.system : "Bilinmiyor"}</span>
          </p>
          <p>
            İşlemci: <span>{data.req ? data.req.cpu : "Bilinmiyor"}</span>
          </p>
          <p>
            Ekran Kartı: <span>{data.req ? data.req.gpu : "Bilinmiyor"}</span>
          </p>
          <p>
            Bellek: <span>{data.req ? data.req.ram : "Bilinmiyor"}</span>
          </p>
          <p>
            Boyut: <span>{data.siz ? data.size : "Bilinmiyor"}</span>
          </p>
        </div>
        <p>İndirime Linki</p>
        <Link href={data.downloadLink}>
          <a className={styles.downloadLink}>{data.title + " indir"}</a>
        </Link>
      </div>
    );
  } else {
    return <h1>Aradınığınız oyun bulunamadı.</h1>;
  }
};
export default SingleGame;

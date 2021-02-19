import styles from "../styles/Nasil-kurulur.module.css";
import Head from "next/head";
const howToSetup = ({ lang }) => {
  return (
    <div className={styles.howto + " container mt-5 text-center"}>
      <Head>
        <title>Utorrent oyun indirip kurma</title>
        <meta
          name="description"
          content="Torrent ile indirilen oyun deamontools aracılığıyla nasıl kurulur. Altı aşamada torrent oyununuzu yükleyin."
        />
      </Head>
      <h1 className={styles.title + " mb-5"}>
        {lang === "TR"
          ? "Utorrent oyun indirip kurma"
          : "How to download and setup torrent game"}
      </h1>
      <ul className={styles.list}>
        <li>
          <p>
            {lang === "TR"
              ? "1-İndirdigimiz torrent dosyasının klasörünü masaüstüne çıkaralım"
              : "1-Extract the document to the desktop"}
          </p>
          <img
            className={styles.image}
            src="/nasil-kurulur/1.png"
            alt="utorrent oyun indirip kurma 1"
          />
        </li>
        <li>
          <p>
            {lang === "TR"
              ? "2-Daha sonra deamontools programını açalım, hızlı bağlaya tıklayalım ve masaüstüne çıkardığımız oyunun klasörünün içerisindeki .iso adlı diski seçelim"
              : "2-Then open the deamontools program, click fast connect and select the disk named .iso in the folder of the game that we extracted to the desktop."}
          </p>
          <img
            className={styles.image}
            src="/nasil-kurulur/2.png"
            alt="utorrent oyun indirip kurma 2"
          />
        </li>
        <li>
          <p>
            {lang === "TR"
              ? "3-Artık sanal diskimiz bilgisayarımıza takıldı. Bilgisayarıma gidip oyun diskini açalım"
              : "3-Our virtual disk is now mounted on our computer. Let's go to my computer and open the game disc"}
          </p>
          <img
            className={styles.image}
            src="/nasil-kurulur/3.png"
            alt="utorrent oyun indirip kurma 3"
          />
        </li>
        <li>
          <p>
            {lang === "TR"
              ? "4-Setuptan oyunumuzu kuralım."
              : "4-Setup the game."}
          </p>
          <img
            className={styles.image}
            src="/nasil-kurulur/4.png"
            alt="utorrent oyun indirip kurma 4"
          />
        </li>
        <li>
          <p>
            {lang === "TR"
              ? "5-Oyun kurulduktan sonra crack atmamız gerekiyor. Masaüstüne çıkardıgımız dosyanın içerisinde crack dosyası bulunur."
              : "5-After installing the game, we need to crack. The file I extracted to the desktop contains the crack file."}
          </p>
          <img
            className={styles.image}
            src="/nasil-kurulur/5.png"
            alt="utorrent oyun indirip kurma 5"
          />
        </li>
        <li>
          <p>
            {lang === "TR"
              ? "6-Oyunu kurdugunuz yere gidin. Örneğin Bilgisarım/C:/Programfiles/AgeofEmpires. Crack dosyasının içindeki tüm dosyaları direk buraya atın."
              : "6-Go to where you installed the game. For example, Computer / C: / Programfiles / AgeofEmpires. Throw all the files in the crack file directly here."}
          </p>
          <img
            className={styles.image}
            src="/nasil-kurulur/6.png"
            alt="utorrent oyun indirip kurma 6"
          />
        </li>
        <li>
          <p>{lang === "TR" ? "İyi eğlenceler :)" : "Have fun :)"}</p>
        </li>
      </ul>
    </div>
  );
};
export default howToSetup;

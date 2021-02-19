import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Warning from "../Warning/Warning";
const Layout = ({ children, lang, setLang }) => {
  return (
    <div className="App">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="Tamamen ücretsiz ve reklamsız torrent oyun indir. Türk torrent oyun ile torrentten oyun indir. TTO , tto torrent"
        />
        <meta
          name="keywords"
          content="tto, tto torrent, torrent oyun indir, türk torrent, torrentten oyun indir, u torrentten oyun, u torrent oyun indir, fernbus simulator indir, oyun torrent, sniper elite 3 indir, dying light indir, sniper elite 4 indir"
        />
        <title>Turk Torrent Oyun</title>
      </Head>
      <Navbar lang={lang} setLang={setLang} />
      <main className="container main">{children}</main>
      <footer className="container d-flex footer mt-5">
        <Warning content='Sitemiz, hukuka, yasalara, telif haklarına ve kişilik haklarına saygılı olmayı amaç edinmiştir. Sitemiz, 5651 sayılı yasada tanımlanan "yer sağlayıcı" olarak hizmet vermektedir. İlgili yasaya göre, site yönetiminin hukuka aykırı içerikleri kontrol etme yükümlülüğü yoktur. Bu sebeple, sitemiz "uyar ve kaldır" prensibini benimsemiştir.' />
        <Warning content="Telif hakkına konu olan eserlerin yasal olmayan bir biçimde paylaşıldığını ve yasal haklarının çiğnendiğini düşünen hak sahipleri veya meslek birlikleri, turktorrentoyun@gmail.com mail adresinden bize ulaşabilirler. Bizle iletişime geçilmesi halinde ilgili kanunlar ve yönetmelikler çerçevesinde en geç 1 (Bir) Hafta içerisinde size dönüş yapılıp gerekli bilgi verilecektir." />
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};
export default Layout;

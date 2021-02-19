import { useEffect, useState } from "react";
import Head from "next/head";
import SingleGame from "../components/SingleGame/SingleGame";
const spesificGame = ({ data, lang }) => {
  const [metaTitle, setMetaTitle] = useState("");
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(err);
    }

    if (data.title) {
      setMetaTitle(data.title);
    }
    fetch(
      `https://turktorrentoyunapi.herokuapp.com/updateviewcount/${data.url}`
    );
  }, [data, typeof window]);
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`${metaTitle} turk torrent oyun indir. Tamamen ücretsiz ve reklamsız torrent oyun indir.`}
        />
        <meta
          name="keywords"
          content={`${metaTitle} torrent indir, ${metaTitle} indir, tto torrent, torrent oyun indir, turk torrent, torrentten oyun indir, u torrentten oyun, u torrent oyun indir, oyun torrent`}
        />
        <title>{metaTitle} - Turk Torrent Oyun</title>
      </Head>
      <div className="container text-center mt-5">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2743431608715099"
          data-ad-slot="8093814491"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <SingleGame lang={lang} data={data} />
    </>
  );
};
export default spesificGame;

export const getStaticPaths = async () => {
  const res = await fetch("https://turktorrentoyunapi.herokuapp.com/api/links");
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { url: item.url },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (ctx) => {
  const res = await fetch(
    `https://turktorrentoyunapi.herokuapp.com/api/singlegamebyurl/${ctx.params.url}`
  );
  const data = await res.json();
  return {
    props: { data: data[0] },
  };
};

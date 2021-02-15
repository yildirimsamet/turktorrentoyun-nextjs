import { useEffect, useState } from "react";
import Head from "next/head";
import SingleGame from "../components/SingleGame/SingleGame";
const spesificGame = ({ data, lang }) => {
  const [metaTitle, setMetaTitle] = useState("");
  useEffect(() => {
    if (data.title) {
      setMetaTitle(data.title);
    }
    fetch(
      `https://turktorrentoyunapi.herokuapp.com/updateviewcount/${data.url}`
    );
  }, [data]);
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

import { useEffect } from "react";
import SingleGame from "../components/SingleGame/SingleGame";
import AdBanner from "../components/AdBanner/AdBanner";
const spesificGame = ({ data, lang }) => {
  useEffect(() => {
    fetch(
      `https://turktorrentoyun.herokuapp.com/api/updateviewcount/${data.url}`
    );
  }, [data]);
  return (
    <>
      <div className="container text-center mt-5">
        <AdBanner />
      </div>
      <SingleGame lang={lang} data={data} />
    </>
  );
};
export default spesificGame;

export const getStaticPaths = async () => {
  const res = await fetch("https://turktorrentoyun.herokuapp.com/api/links");
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
    `https://turktorrentoyun.herokuapp.com/api/singlegamebyurl/${ctx.params.url}`
  );
  const data = await res.json();

  return {
    props: { data: data[0] },
  };
};

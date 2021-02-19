import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2743431608715099"
      data-ad-slot="8093814491"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;

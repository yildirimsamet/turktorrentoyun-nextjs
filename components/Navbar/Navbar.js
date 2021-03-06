import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "../Loader/Loader";

function Navbar({ lang, setLang }) {
  const [navOpen, setNavOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const translateWord = (text) => {
    var trMap = {
      çÇ: "c",
      ğĞ: "g",
      şŞ: "s",
      üÜ: "u",
      ıİ: "i",
      öÖ: "o",
    };
    for (let key in trMap) {
      text = text.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
    }
    return text
      .replace(/[^-a-zA-Z0-9\s]+/gi, "")
      .replace(/[-]+/gi, "-")
      .toLowerCase();
  };
  useEffect(() => {
    setLoading(false);
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    }
  }, [router, lang]);
  return (
    <div id="nav">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand"> TURKTORRENTOYUN</a>
          </Link>

          <button
            className="navbar-toggler nav-hamburger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            {navOpen ? (
              <img
                src="https://img.icons8.com/plasticine/40/000000/close-window.png"
                alt="close-icon"
              />
            ) : (
              <img src="/icons/menu.png" alt="bars-icon" />
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a aria-current="page" className="nav-link active">
                    <img
                      className="mx-1"
                      src="/icons/controller.png"
                      alt="computer-icon"
                    />
                    <span>{lang === "TR" ? "Anasayfa" : "Home"}</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/utorrent-oyun-indirip-kurma">
                  <a aria-current="page" className="nav-link active">
                    <img
                      className="mx-1"
                      alt="torrent oyun nasil kurulur"
                      src="/icons/gear.png"
                    />

                    <span>
                      {lang === "TR" ? "Nasıl kurulur" : "How to setup"}
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/hakkinda">
                  <a aria-current="page" className="nav-link active">
                    <img
                      className="mx-1"
                      src="/icons/about.png"
                      alt="hakkinda"
                    />
                    <span>{lang === "TR" ? "Hakkında" : "About"}</span>
                  </a>
                </Link>
              </li>

              <li className="nav-item switch-li">
                <span>
                  <strong>TR</strong>
                </span>
                <label className="switch">
                  <input
                    checked={lang === "ENG" ? true : false}
                    onChange={() => {
                      if (lang === "TR") {
                        setLang("ENG");
                        localStorage.setItem("lang", "ENG");
                      } else {
                        setLang("TR");
                        localStorage.setItem("lang", "TR");
                      }
                    }}
                    type="checkbox"
                  />
                  <span className="slider round"></span>
                </label>
                <span>
                  <strong>ENG</strong>
                </span>
              </li>
            </ul>

            <form
              className="d-flex search-form"
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                let hrefValue =
                  "/search/" + escape(searchInput.toLocaleLowerCase());
                router.push(hrefValue);
                setSearchInput("");
              }}
            >
              {loading && <Loader />}
              <input
                className="form-control"
                type="search"
                placeholder={lang === "TR" ? "Ara" : "Search"}
                aria-label="Search"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(translateWord(e.target.value));
                }}
              />
              <Link href={"/search/" + escape(searchInput)}>
                <a
                  onClick={() => {
                    setLoading(true);
                    setSearchInput("");
                  }}
                  className="btn btn-dark"
                >
                  {lang === "TR" ? "Ara" : "Search"}
                </a>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

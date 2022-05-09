import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library/Library.js";
import Feed from "../Feed/Feed.js";
import Favorites from "../Favorites/Favorites.js";
import Player from "../Player/Player.js";
import Trending from "../Trending/Trending.js";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Login from "../auth/Login.js";
import { setClientToken } from "../../spotify.js";

const Home = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  console.log(token);

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Router>
          <div className="main_div">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/player" element={<Player />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
};

export default Home;

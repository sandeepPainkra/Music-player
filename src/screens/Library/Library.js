import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
const Library = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response);
    });
  }, []);

  console.log(playlists);
  return <div className="screen_container">Library</div>;
};

export default Library;

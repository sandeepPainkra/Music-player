import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../spotify";

const Sidebar = () => {
  const [user, setUser] = useState([]);
  const [image, setImage] = useState(
    "https://scontent.fidr1-1.fna.fbcdn.net/v/t1.6435-9/79471106_101080374734128_7878052739169648640_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=dJ7Kt2JP7F0AX9UhBTy&_nc_ht=scontent.fidr1-1.fna&oh=00_AT_gy6Dk0gs8FLs0VhqHlQLdPNrCPhb_Esmr2LQmGrsRoQ&oe=629C0095"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      console.log(response.data.images[0].url);
      setImage(response.data.images[0].url);
      setUser(response);
    });
  }, []);
  console.log(user);

  return (
    <div className="sidebar_container">
      <img src={image} alt="profile image" className="profile_image" />
      <div className="sidebar_buttons">
        <SidebarButton title="feed" to="/feed" Icon={MdSpaceDashboard} />
        <SidebarButton title="trending" to="/trending" Icon={FaGripfire} />
        <SidebarButton title="player" to="/player" Icon={FaPlay} />
        <SidebarButton title="favorite" to="/favorites" Icon={MdFavorite} />
        <SidebarButton title="Library" to="/" Icon={IoLibrary} />
      </div>
      <SidebarButton title="Sign Out" to=" " Icon={FaSignOutAlt} />
    </div>
  );
};

export default Sidebar;

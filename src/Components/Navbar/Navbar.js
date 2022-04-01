import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      {/* Right */}
      <div className="Right">
        {/* Logo */}
        <img
          className="Logo"
          alt="Logo"
          src="https://res.cloudinary.com/dzhxsxpey/image/upload/v1648829853/Omnicell/Instagram_logo_lisigh.jpg"
        />
      </div>
      {/* Middle */}
      <div className="Middle">
        {/* Seach Box */}
        <input type="text" placeholder="Search"></input>
      </div>
      {/* Left */}
      <div className="Left">
        {/* Icons */}
        <HomeIcon />
        <ChatIcon />
        <AddCircleOutlineIcon />
        <ExploreIcon />
        <FavoriteBorderIcon />
        <Avatar
          alt="User"
          src="https://res.cloudinary.com/dzhxsxpey/image/upload/v1648840874/Omnicell/IMG_20211104_105731_pfvhlf.jpg"
        />
      </div>
    </div>
  );
}

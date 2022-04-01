import React from "react";
import Avatar from "@mui/material/Avatar";
import "./LeftMenu.css";

export default function LeftMenu() {
  return (
    <div className="LeftMenu">
      <Avatar
        alt="User"
        src="https://res.cloudinary.com/dzhxsxpey/image/upload/v1648840874/Omnicell/IMG_20211104_105731_pfvhlf.jpg"
      />
      <a>Arata Pradhan</a>
      <a href="#" className="BoldLink">
        <strong>Switch</strong>
      </a>
    </div>
  );
}

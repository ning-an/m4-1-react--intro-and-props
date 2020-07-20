import React from "react";
import "./img.css";

const Image = ({ user }) => {
  return (
    <img
      className="msg-avatar"
      src={user.avatar}
      alt={`${user.username}'s avatar`}
    ></img>
  );
};

export default Image;

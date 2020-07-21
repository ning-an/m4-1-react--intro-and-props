import React from "react";

import "./Header.css";
import Image from "./img";

const Header = ({ participants, currentUser }) => {
  return (
    <header>
      <div className="participants">
        {participants
          .filter((participant) => participant !== currentUser)
          .map((part, index) => {
            return (
              <div key={index}>
                <Image user={part} />
                <h3>{part.username}</h3>
              </div>
            );
          })}
      </div>
    </header>
  );
};

export default Header;

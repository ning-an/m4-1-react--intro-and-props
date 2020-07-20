import React from "react";

import "./Header.css";
import Image from "./img";

const Header = ({ participants, currentUser }) => {
  return (
    <header>
      <div className="participants">
        {participants
          .filter((participant) => participant !== currentUser)
          .map((part, index) => (
            <Image key={index} user={part} />
          ))}
      </div>
    </header>
  );
};

export default Header;

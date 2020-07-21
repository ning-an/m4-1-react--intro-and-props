import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";

import "./App.css";

const App = ({ users, conversation }) => {
  return (
    <div className="chatBox">
      <div className="wrapper">
        <Header
          participants={conversation.participants}
          currentUser={users.elaine}
        />
        <ChatStream
          messages={conversation.messages}
          currentUser={users.elaine}
        />
        <Footer />
      </div>
      <div className="wrapper">
        <Header
          participants={conversation.participants}
          currentUser={users.george}
        />
        <ChatStream
          messages={conversation.messages}
          currentUser={users.george}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;

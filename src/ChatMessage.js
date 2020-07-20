import React from "react";

import "./ChatMessage.css";
import Image from "./components/img";

const ReceiveMsg = ({ message }) => {
  const { user, body } = message;
  return (
    <div className="msg-box receive-box">
      <Image user={user} />
      <div>
        <h3 className="msg-name">{user.username}</h3>
        <p className="msg-body receive-msg">{body}</p>
        <img
          className="receive-tip"
          src="/assets/tip-received.svg"
          alt="tip"
        ></img>
      </div>
    </div>
  );
};

const SendMsg = ({ message }) => {
  return (
    <div className="msg-box send-box">
      <p className="msg-body send-msg">{message.body}</p>
      <img className="sent-tip" src="/assets/tip-sent.svg" alt="tip"></img>
    </div>
  );
};

const ChatMessage = ({ message, messageType }) => {
  if (messageType === "sent") {
    return <SendMsg message={message} />;
  } else {
    return <ReceiveMsg message={message} />;
  }
};

export default ChatMessage;

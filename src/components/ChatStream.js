import React from "react";

import "./ChatStream.css";
import ChatMessage from "../ChatMessage";

const ChatStream = (props) => {
  return (
    <section className="chat-stream">
      {props.messages.map((message, index) => {
        return (
          <ChatMessage
            key={"msgKey: " + index}
            message={message}
            messageType={
              message.user === props.currentUser ? "sent" : "received"
            }
          />
        );
      })}
    </section>
  );
};

export default ChatStream;

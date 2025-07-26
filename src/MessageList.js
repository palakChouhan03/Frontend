// src/components/MessageList.js
import React from "react";
import Message from "./Message";

export default function MessageList({ messages }) {
  return (
    <div>
      {messages.map((msg) => (
        <Message key={msg.id} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}

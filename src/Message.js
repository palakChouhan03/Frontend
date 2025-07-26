// src/components/Message.js
import React from "react";

export default function Message({ text, sender }) {
  return (
    <div style={{ textAlign: sender === "user" ? "right" : "left", margin: 4 }}>
      <span>
        <b>{sender === "user" ? "You: " : "AI: "}</b>
        {text}
      </span>
    </div>
  );
}

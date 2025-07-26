import React from "react";
import { useChat } from "../context/ChatContext";

function ChatBox() {
  const { messages, input, setInput, sendMessage, loading } = useChat();

  return (
    <div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={msg.sender === "user" ? "user-msg" : "ai-msg"}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
      />
      <button onClick={() => sendMessage(input)}>Send</button>
    </div>
  );
}

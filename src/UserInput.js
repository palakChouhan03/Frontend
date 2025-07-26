import React from "react";
import { useChat } from "../context/ChatContext";

export default function UserInput() {
  const { input, setInput, sendMessage, loading } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input, "user");
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        aria-label="User message"
        disabled={loading}
      />
      <button type="submit" disabled={loading || !input.trim()}>
        Send
      </button>
    </form>
  );
}

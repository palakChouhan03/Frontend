export default function ChatWindow() {
  const { messages } = useChat();

  return (
    <div style={{ border: "1px solid gray", padding: 8, width: 350 }}>
      <h4>Chat</h4>
      <div style={{ maxHeight: 300, overflowY: "auto" }}>
        <MessageList messages={messages} />
      </div>
      <UserInput />
    </div>
  );
}

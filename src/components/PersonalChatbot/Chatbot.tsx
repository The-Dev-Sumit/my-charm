"use client";


import { useState, useEffect } from "react";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" as const }];
    setMessages(newMessages);

    try {
      // Call API
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const { reply, error } = await res.json();

      if (error) {
        setMessages([...newMessages, { text: "Error: Try again!", sender: "bot" as const }]);
      } else {
        setMessages([...newMessages, { text: reply, sender: "bot" }]);
      }
    } catch (error) {
      setMessages([...newMessages, { text: "Oops, something went wrong!", sender: "bot" }]);
    }

    setInput("");
  };

  // Persist chat history in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("chatHistory");
    if (saved) {
      const parsed: Message[] = JSON.parse(saved).map((msg: any) => ({
        text: msg.text,
        sender: msg.sender === "user" ? "user" : "bot",
      }));
      setMessages(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg z-50"
      >
        {isOpen ? "Close" : "Chat"}
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <div className="h-80 overflow-y-auto p-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 m-1 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white text-right"
                    : "bg-gray-100 text-black text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-3 border-t border-gray-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
              placeholder="Ask me something..."
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
import React from "react";

function ChatBubble({ isChatStart = false, children }) {
  return (
    <div
      className={`chat ${
        isChatStart ? "chat-start" : "chat-end"
      }`}>
      <div className={`chat-bubble  ${isChatStart ? "bg-[#8ddec7] text-gray-950" : "bg-[#bfded5] text-gray-950"}`}>{children}</div>
    </div>
  );
}

export default ChatBubble;

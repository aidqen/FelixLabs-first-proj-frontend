import { useEffect, useRef } from 'react';
import { MessagePreview } from './MessagePreview'

export function MessageList({ chats }) {
  console.log('chatData:', chats)
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chats]);

  return (
    <div className="messages flex flex-col gap-10 pt-7 px-4 py-[1rem 0] h-full overflow-auto" ref={chatContainerRef}>
      {chats?.map((message, idx) => {
        return <MessagePreview key={idx} message={message} />
      })}
      {/* <div ref={messagesEndRef} /> */}
    </div>
  )
}

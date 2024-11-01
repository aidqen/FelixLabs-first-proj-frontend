import { BsPinAngle, BsPlusLg } from 'react-icons/bs'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { ChatPreview } from './ChatPreview'

export function ChatHistorySidebar() {
  const chatHistory = [
    {
      id: 1,
      title: 'Welcome Message',
      text: 'Hello! How can I assist you today?',
    },
    {
      id: 2,
      title: 'User Inquiry',
      text: 'What is the status of my order?',
    },
    {
      id: 3,
      title: 'Support Response',
      text: 'Your order is on its way and should arrive in 3 days.',
    },
    {
      id: 4,
      title: 'User Feedback',
      text: "Thank you! That's great news.",
    },
    {
      id: 5,
      title: 'Final Message',
      text: "You're welcome! Have a great day.",
    },
  ]

  return (
    <div className="settings-sidebar col-start-1 row-start-1 row-end-1 h-screen bg-[#FFFFFF] border-x-[#E5E5E5] px-6 border-r-[0.3px] border-[#E5E5E5] shadow-[4px_2px_41.4px_rgba(0,0,0,0.04)]">
      <div className="flex flex-row items-center justify-between light:text-black text-black h-[4.375em]">
        <h2 className="text-[24px]">Chats</h2>
        <RxMagnifyingGlass className="h-[34px] w-[34px]" />
      </div>
      <button className="gap-2 flex flex-row text-black items-center justify-center w-full mt-5 mb-8 py-2 rounded-[15px] shadow-[2px_4px_15px_rgba(0,0,0,0.09),_-2px_2px_15px_rgba(0,0,0,0.05)] button-hover">
        <BsPlusLg />
        <h3>New Chat</h3>
      </button>

      <div className="flex flex-row items-center gap-2 text-[#535353] text-[1em] pb-2">
        <BsPinAngle className="h-[19.5px] w-[19.5px]" />
        <h4 className="font-normal">Pinned Conversations</h4>
      </div>

      <ul className="chat-history col-start-2 col-end-2 border-b border-gray-300">
        {chatHistory.map((chat) => (
          <ChatPreview key={chat.id} chat={chat} />
        ))}
      </ul>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { UserInput } from '../cmps/ChatDetails/UserInput'
import { ChatHistorySidebar } from '../cmps/ChatDetails/ChatHistorySidebar'
import { MessageList } from '../cmps/ChatDetails/MessageList'
import { ChatHeader } from '../cmps/ChatDetails/ChatHeader'

export function ChatDetails() {
  const params = useParams()
  const [chats, setChats] = useState(null);
  
useEffect(() => {
  setChats(chatData)
}, [])


const chatData = [
  {
    id: 1,
    text: "Hey, how are you?",
    owner: "user",
  },
  {
    id: 2,
    text: "Hello! I'm doing great, thank you for asking. How can I assist you today?",
    owner: "bot",
  },
  {
    id: 3,
    text: "I'm curious, what can you help me with?",
    owner: "user",
  },
  {
    id: 4,
    text: "I can help with a variety of tasks such as answering questions, helping you with coding, providing information, and much more.",
    owner: "bot",
  },
  {
    id: 5,
    text: "That's awesome! Can you explain what machine learning is?",
    owner: "user",
  },
  {
    id: 6,
    text: "Sure! Machine learning is a subset of artificial intelligence that gives systems the ability to learn and improve from experience without being explicitly programmed.",
    owner: "bot",
  },
  {
    id: 7,
    text: "So it's like teaching a computer to recognize patterns?",
    owner: "user",
  },
  {
    id: 8,
    text: "Exactly! It’s all about identifying patterns in data, which allows the machine to make predictions or decisions based on the data it has processed.",
    owner: "bot",
  },
  {
    id: 9,
    text: "Got it! Can you help me write a simple JavaScript function?",
    owner: "user",
  },
  {
    id: 10,
    text: "Absolutely! What kind of function do you need help with?",
    owner: "bot",
  },
  {
    id: 11,
    text: "Just a basic one that adds two numbers together.",
    owner: "user",
  },
  {
    id: 12,
    text: "Here’s a simple JavaScript function for adding two numbers:\n```js\nfunction add(a, b) {\n  return a + b;\n}\n``` Exactly! It’s all about identifying patterns in data, which allows the machine to make predictions or decisions based on the data it has processed Exactly! It’s all about identifying patterns in data, which allows the machine to make predictions or decisions based on the data it has processed.",
    owner: "bot",
  },
  {
    id: 13,
    text: "Thank you! That was super helpful.",
    owner: "user",
  },
  {
    id: 14,
    text: "You’re welcome! Feel free to ask me anything else.",
    owner: "bot",
  }
];



  return (
    <div className="h-full w-full grid grid-cols-[18.75em,1fr] grid-rows-[4.375em,1fr]">
      <ChatHeader />
      <ChatHistorySidebar />
      <main className="h-[calc(100vh-5em)] w-full flex flex-col justify-between col-start-2  row-start-2 custom-scrollbar">
          <MessageList chats={chats}/>
        <div className="footer h-auto p-4 flex justify-center items-start">
          <UserInput
            chats={chats}
            setChats={setChats}
          />
        </div>
      </main>
    </div>
  )
}

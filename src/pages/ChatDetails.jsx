import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from '../svgs/Link'
import { FiArrowUp, FiMic } from 'react-icons/fi'
import { UserInput } from '../cmps/ChatDetails/UserInput'

export function ChatDetails() {
  const params = useParams()
  const [userInput, setUserInput] = useState()

  function handleChange({ target }) {
    setUserInput(target.value)
  }

  const chatHistory = [
    {
      id: '1',
      title: 'When do you close?',
      messages: ['Hello', 'How are you?'],
    },
    { id: '2', title: 'Who are you?', messages: ['Hi', 'I am good, you?'] },
    {
      id: '3',
      title: 'What about weekends?',
      messages: ['Hey', 'I am good too'],
    },
  ]
  return (
    <div className="h-full w-full">
      {/* <ul className='chat-history border-r border-gray-700 p-1 pt-[5.5rem]'>
        {chatHistory.map(chat => <li key={chat.id} className={` ${chat.id === '1' ? 'bg-[#1f1f1f]' : ''} flex items-center justify-between py-2 px-1 rounded-lg text-white hover:bg-hoverInSidebar text-[0.8rem] w-full h-10 transition-all overflow-hidden whitespace-nowrap text-ellipsis`}>{chat.title}</li>)}
      </ul> */}
      <main className="h-full w-full grid grid-rows-[93%,7%]">
        <div className="footer row-start-2 w-full h-full flex justify-center items-start">
          <UserInput userInput={userInput} handleChange={handleChange} />
        </div>
      </main>
    </div>
  )
}

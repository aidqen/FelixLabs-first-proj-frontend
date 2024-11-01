import { FiArrowUp, FiMic } from 'react-icons/fi'
import { Link } from '../../svgs/Link'
import { useRef, useState } from 'react'
import { makeId } from '../../services/util.service'

export function UserInput({ chats, setChats }) {
  console.log('chatData:', chats)
  const [userInput, setUserInput] = useState(null)
  console.log('userInput:', userInput)
  const textareaRef = useRef(null)

  function handleChange({ target }) {
    setUserInput(target.value)

    adjustHeight()
  }

  function adjustHeight() {
    const textarea = textareaRef.current

    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`

    const textLines = textarea.value.split('\n')

    let totalLines = textLines.length
    console.log('totalLines:', totalLines)

    if (totalLines === 1) textarea.style.height = '74px'
  }

  function handleKeyDown(ev) {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      ev.preventDefault()
      handleSubmit(ev)
    }
  }

  function handleSubmit(ev) {
    if (userInput) {
      setChats(items => [
        ...items,
        { id: makeId(4), text: userInput, owner: 'user' },
      ])
      setUserInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="user-input flex relative">
      <Link className="absolute bottom-[25px] left-3 text-[#535353]" />
      <textarea
        ref={textareaRef}
        type="text"
        name="text"
        className="flex items-center shadow-[0px_4px_13px_rgba(0,0,0,0.11)] rounded-[26px] text-black bg-[#ffffff] resize-none w-[35rem] focus:ring-0 focus:outline-none p-[1.5rem] px-10 text-[1rem] h-[74px]"
        value={userInput}        
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className={`flex items-center absolute bottom-[20px] right-2 justify-center shadow-[0_4px_13px_rgba(0,0,0,0.11)]
              bg-[#E4E4E4] text-black
               w-10 h-10 rounded-full transition-all duration-[350ms] ease-in-out`}
      >
        <div
          className={`transform transition-transform duration-300 ${
            userInput ? 'opacity-0 scale-[.75]' : 'opacity-100 scale-100'
          }`}
        >
          <FiMic className="text-xl" />
        </div>
        <div
          className={`absolute transform transition-transform duration-300 ${
            userInput ? 'opacity-100 scale-100' : 'opacity-0 scale-[.75]'
          }`}
        >
          <FiArrowUp className="text-xl" />
        </div>
      </button>
    </form>
  )
}

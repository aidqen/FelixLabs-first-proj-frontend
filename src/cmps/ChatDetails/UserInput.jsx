import { FiArrowUp, FiMic } from 'react-icons/fi'
import { Link } from '../../svgs/Link'

export function UserInput({ userInput, handleChange, textareaRef }) {

  function sendBtnClasses() {
    return userInput
      ? 'bg-[#E4E4E4] text-black hover:bg-[#aeaeae]'
      : 'bg-darkSidebar hover:bg-[#1f1f1f]'
  }

  return (
    <div className="user-input flex relative">
      <Link className="absolute bottom-[25px] left-3 text-[#535353]"/>
      <textarea
        ref={textareaRef}
        type="text"
        name="text"
        className="flex items-center rounded-[26px] bg-[#fffff] resize-none w-[35rem] focus:ring-0 focus:outline-none p-[1.5rem] px-10 text-[1rem] h-[74px]"
        value={userInput}
        onChange={handleChange}
      />
      <button
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
    </div>
  )
}

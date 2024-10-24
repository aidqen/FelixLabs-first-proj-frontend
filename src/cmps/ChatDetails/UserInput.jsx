import { FiArrowUp, FiMic } from "react-icons/fi";
import { Link } from "../../svgs/Link";

export function UserInput({userInput, handleChange}) {
     
    return (
        <div className="user-input flex w-max relative">
            <Link className="absolute top-1/2 left-3 transform -translate-y-1/2" />
            <textarea
              type="text"
              name="text"
              className="flex items-center rounded-full bg-[rgb(47,47,47)] resize-none h-14 w-[40rem] focus:ring-0 focus:outline-none p-[1rem] px-10 text-[1rem]"
              value={userInput}
              onChange={handleChange}
            />
            <button className={`flex items-center absolute top-1/2 right-2 transform -translate-y-1/2 justify-center 
              ${userInput ? 'bg-gray-200 text-black hover:bg-[#aeaeae] ': 'bg-darkSidebar hover:bg-[#1f1f1f]'}
               w-10 h-10 rounded-full transition-all duration-[350ms] ease-in-out`}>
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
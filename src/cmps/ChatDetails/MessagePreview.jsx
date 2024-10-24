import { useState } from "react";

export function MessagePreview({message}) {
    const [onHover, setOnHover] = useState(false);

    const {owner, text} = message;
    
  console.log('message:', message)
  return (
    <div className="flex flex-row items-start gap-2.5" onMouseOver={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <img
        className="w-8 h-8 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg"
        alt="Jese image"
      />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        {/* <div className="flex items-center space-x-2 rtl:space-x-reverse"> */}
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {owner}
          </span>
          {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            11:46
          </span> */}
        {/* </div> */}
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {text}
        </p>
      </div>
      {onHover && <button
        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        type="button"
      >
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>}
    </div>
  )
}

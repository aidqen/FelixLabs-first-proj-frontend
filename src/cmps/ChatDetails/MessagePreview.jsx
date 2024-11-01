import { useState } from "react";

export function MessagePreview({message}) {
    const [onHover, setOnHover] = useState(false);

    const {owner, text} = message;
    
  console.log('message:', message)
  return (
    <div className={`flex flex-row items-start justify-start ${owner !== 'bot' ? 'flex-row-reverse ' :'flex-row'} gap-2.5`} onMouseOver={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <img
        className="mt-1 w-10 h-10 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg"
        alt="Jese image"
      />
      <div className={`flex flex-col w-auto leading-1.5 border-gray-200 p-4 ${owner === 'user' ? 'bg-white' : 'bg-[#E8D8FF] border border-[#e5e5e5]/50 shadow-[0px_4px_13px_rgba(0,0,0,0.11)]'}
       rounded-xl `}>
        <p disabled className="text-sm font-normal py-2.5 dark:text-gray-900 text-black bg-transparent w-full resize-none whitespace-pre-wrap">
          {text}
        </p>
      </div>
    </div>
  )
}

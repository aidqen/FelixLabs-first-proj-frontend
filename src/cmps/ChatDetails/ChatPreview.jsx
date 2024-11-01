export function ChatPreview({ chat }) {
     
    return (
        <li
            key={chat.id}
            className={` ${chat.id === 1 ? 'bg-[#E8D8FF]' : ''}
            flex flex-col items-start py-[10px] px-[20px] cursor-pointer rounded-lg text-black text-[0.8rem] h-[5.812em] gap-[5px] w-full transition-all overflow-hidden whitespace-nowrap text-ellipsis button-hover`}
          >
            <h3 className="text-[1.1em] font-semibold">{chat.title}</h3>
            <p className="text-[1em]">{chat.text}</p>
          </li>
    )
}
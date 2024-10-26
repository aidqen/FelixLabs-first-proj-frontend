import { BiArchive, BiShareAlt, BiTrash } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'

export function ChatHeader() {
  return (
    <div className="col-start-2 col-end-2 row-start-1 row-end-1 chat-header flex flex-row items-center justify-between h-[4.375em] w-full bg-[#FFFFFF]">
      <div className="flex flex-row justify-between items-center h-[2.5em] w-[12em]">
        <img src="" alt="" className="h-full" />
        <div className="flex flex-col items-start">
          <h3 className="text-[1em] font-semibold text-black">Idan Markin</h3>
          <p className="flex flex-row items-center gap-2 text-[0.812em] text-[#535353] font-light">
            <MdOutlineEmail />
            <span>idanmarkin8@gmail.com</span>
          </p>
        </div>
      </div>

      <div className="buttons flex flex-row items-center space-x-4">
        <button className="p-2 rounded-full shadow-md">
          <BiArchive size={24} />
        </button>
        <button className="p-2 rounded-full shadow-md flex items-center space-x-1">
          <BiShareAlt size={24} />
          <span>Share</span>
        </button>
        <button className="p-2 rounded-full shadow-md flex items-center space-x-1 text-red-500">
          <BiTrash size={24} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  )
}

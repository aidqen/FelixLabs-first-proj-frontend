import { BiArchive, BiBox, BiShareAlt, BiTrash } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { ProfilePreview } from './ProfilePreview'

export function ChatHeader() {
  return (
    <div className="col-start-2 col-end-2 row-start-1 row-end-1 chat-header flex flex-row items-center justify-between h-[4.375em] w-full bg-[#FFFFFF]">
      <ProfilePreview />

      <div className="buttons flex flex-row items-center space-x-4 pr-10 text-black">
        <button className="p-2 rounded-full shadow-[0px_4px_13px_rgba(0,0,0,0.11)] hover:bg-gray-200 transition-colors">
          <BiBox  size={24} />
        </button>
        <button className="p-2 rounded-full shadow-[0px_4px_13px_rgba(0,0,0,0.11)] flex items-center space-x-2 hover:bg-gray-200 transition-colors">
          <BiShareAlt size={24} />
          <span>Share</span>
        </button>
        <button className="p-2 rounded-full shadow-[0px_4px_13px_rgba(0,0,0,0.11)] flex items-center space-x-1 text-red-500 hover:bg-gray-200 transition-colors">
          <BiTrash size={24} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  )
}

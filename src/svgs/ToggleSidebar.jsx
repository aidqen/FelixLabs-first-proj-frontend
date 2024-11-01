import { IoExitOutline } from "react-icons/io5";

export function ToggleSidebar({ onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-center w-[3em] h-12 ms-4 mb-5 text-black bg-white shadow-[6px_10px_15px_rgba(0,0,0,0.11)] hover:bg-gray-200 rounded-lg transition-colors"
    >
      <IoExitOutline className="h-6 w-6"/>
    </button>
  )
}

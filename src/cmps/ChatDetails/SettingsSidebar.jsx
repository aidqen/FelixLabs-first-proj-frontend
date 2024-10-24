import { useState } from 'react'
import { CgArrowsV } from 'react-icons/cg'
import { IoMdChatboxes, IoMdSettings } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuChevronsUpDown, LuHistory } from 'react-icons/lu'

export function SettingsSidebar() {
  const [sidebarView, setSidebarView] = useState('settings')

  function toggleSidebarView() {
    setSidebarView(prev => (prev === 'settings' ? 'chatHistory' : 'settings'))
  }



  const options = [
    { label: 'Settings', value: 'settings', icon: IoMdSettings },
    { label: 'Chat History', value: 'chatHistory', icon: IoMdChatboxes },
  ]

  return (
    <div className="settings-sidebar col-start-2 col-end-2 bg-[#131316] border-x-[#292929] border-l">
      <div className="flex flex-row relative items-center gap-2 justify-center w-full h-16  shadow-[5px_2px_14px_0px_rgb(0,0,0,69%)]">
        {sidebarView === 'settings' ? (
          <>
            <IoSettingsOutline className="w-[0.90rem] h-[0.90rem]" />
            <h2 className="text-sm font-semibold">Settings</h2>
          </>
        ) : (
          <>
            <LuHistory className="w-[0.90rem] h-[0.90rem]" />
            <h2 className="text-sm font-semibold">Chat History</h2>
          </>
        )}
        <LuChevronsUpDown className="absolute right-2 cursor-pointer" onClick={toggleSidebarView}/>
      </div>
      {/* //     <ul className='chat-history border-r border-gray-700 p-1 pt-[5.5rem] col-start-2 col-end-2'>
    //     {chatHistory.map(chat => <li key={chat.id} className={` ${chat.id === '1' ? 'bg-[#1f1f1f]' : ''} flex items-center justify-between py-2 px-1 rounded-lg text-white hover:bg-hoverInSidebar text-[0.8rem] w-full h-10 transition-all overflow-hidden whitespace-nowrap text-ellipsis`}>{chat.title}</li>)}
    //   </ul> */}
    </div>
  )
}

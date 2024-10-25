import { BsChatSquareDots } from 'react-icons/bs'
import { FaChartSimple } from 'react-icons/fa6'
import { IoChatbubbleEllipsesOutline, IoChatbubblesOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuPen } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

export function Navigation({ isOpen }) {

    const navigationLinks = [
        {label: 'Chatbot', icon: IoChatbubbleEllipsesOutline, path: '/chat'}, 
        {label: 'Manage Prompts', icon: IoSettingsOutline, path: '/prompts'}, 
        {label: 'Analytics Board', icon: FaChartSimple, path: '/analytics'}, 
        {label: 'Data Management', icon: LuPen, path: '/data'}
    ]

  return (
    <nav className="h-full  pb-4 overflow-y-auto ">
      <ul className={`space-y-5 px-[1.1rem] pt-5 font-medium overflow-hidden ${isOpen ? 'open' : 'close'}`}>
        {navigationLinks.map(link => {
            return (
                <li key={link.label} className='shadow-[4px_4px_13px_rgba(0,0,0,0.11)] bg-white hover:bg-gray-200 rounded-lg'>
                    <NavLink to={link.path} className="sidebar-link flex items-center justify-between  py-2 px-1   text-black dark:hover:bg-hoverInSidebar  text-[0.9rem] w-full h-10 transition-all">
                        <div className="flex align-center">
                            <link.icon className="ms-2 me-3 w-5 h-5 my-auto" />
                            {isOpen && <span className="flex items-center flex-1 text-xs font-semibold text-[rgb(83,83,83)] whitespace-nowrap">{link.label}</span>}
                        </div>
                    </NavLink>
                </li>
            )
        })}

      </ul>
    </nav>
  )
}

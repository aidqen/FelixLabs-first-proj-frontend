import { BsChatSquareDots } from 'react-icons/bs'
import { FaChartSimple } from 'react-icons/fa6'
import { IoChatbubblesOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuPen } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

export function Navigation({ isOpen }) {

    const navigationLinks = [
        {label: 'Chatbot', icon: BsChatSquareDots, path: '/chat'}, 
        {label: 'Manage Prompts', icon: IoSettingsOutline, path: '/prompts'}, 
        {label: 'Analytics Board', icon: FaChartSimple, path: '/analytics'}, 
        {label: 'Data Management', icon: LuPen, path: '/data'}
    ]

  return (
    <nav className="h-full px-3 pb-4 overflow-y-auto ">
      <ul className={`space-y-2 font-medium ${isOpen ? 'open' : 'close'}`}>
        {navigationLinks.map(link => {
            return (
                <li key={link.label}>
                    <NavLink to={link.path} className="sidebar-link flex items-center justify-between py-2 px-1 rounded-lg text-white hover:bg-hoverInSidebar text-[0.9rem] w-full h-10 transition-all">
                        <div className="flex align-center">
                            <link.icon className="ms-2 me-3 w-4 h-4 my-auto" />
                            {isOpen && <span className="flex-1  whitespace-nowrap">{link.label}</span>}
                        </div>
                    </NavLink>
                </li>
            )
        })}

      </ul>
    </nav>
  )
}

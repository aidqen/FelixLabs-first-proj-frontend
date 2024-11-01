import { BsChatSquareDots } from 'react-icons/bs'
import { FaChartSimple } from 'react-icons/fa6'
import { IoAnalyticsOutline, IoChatbubbleEllipsesOutline} from 'react-icons/io5'
import { LuPen, LuPenSquare } from 'react-icons/lu'
import { SlDrawer } from 'react-icons/sl'
import { TbSettings } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

export function Navigation({ isOpen }) {

    const navigationLinks = [
        {label: 'Chatbot', icon: IoChatbubbleEllipsesOutline, path: '/chat'}, 
        {label: 'Prompts', icon: LuPenSquare, path: '/prompts'}, 
        {label: 'Analytics', icon: IoAnalyticsOutline, path: '/analytics'}, 
        {label: 'Files', icon: SlDrawer, path: '/data'},
        {label: 'Settings', icon: TbSettings, path: '/settings'}, 
    ]

  return (
    <nav className="h-full  pb-4 overflow-y-auto ">
      <ul className={`space-y-7 px-[1.1rem] pt-5 pb-5 font-medium overflow-hidden ${isOpen ? 'open' : 'close'}`}>
        {navigationLinks.map(link => {
            return (
                <li key={link.label} className='shadow-[6px_10px_15px_rgba(0,0,0,0.11)] bg-white hover:bg-gray-200 rounded-lg transition-colors'>
                    <NavLink to={link.path} className="sidebar-link flex items-center justify-start py-2 px-1 text-black text-[0.9rem] w-full h-10 transition-all">
                        <div className="flex align-center justify-center">
                            <link.icon className="ms-1.5 me-3 w-6 h-7 my-auto" />
                            {isOpen && <span className="flex items-center flex-1 text-lg font-normal text-black whitespace-nowrap">{link.label}</span>}
                        </div>
                    </NavLink>
                </li>
            )
        })}

      </ul>
    </nav>
  )
}

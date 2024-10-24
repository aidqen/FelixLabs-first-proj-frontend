import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navigation } from './Navigation'
import { ToggleSidebar } from './ToggleSidebar'

export function MenuSidebar({}) {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleSidebar = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <>
      <aside
        className={`flex flex-col justify-between fixed top-0 left-0 z-40 bg-darkSidebar h-screen pt-5 border-r transition-all border-x-gray-700  ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div>
          <ToggleSidebar onToggle={toggleSidebar} />
          <Navigation isOpen={isOpen} />
        </div>
        <div className="mini-profile flex flex-row items-center justify-between">
            <img src="" alt="" />
            <div className="flex flex-col justify-start">
                <h3>Personal</h3> 
                <p>idanmarkin8@gmail.com</p>
            </div>
        </div>
      </aside>
    </>
  )
}

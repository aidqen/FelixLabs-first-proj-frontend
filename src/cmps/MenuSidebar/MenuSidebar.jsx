import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navigation } from './Navigation'
import { ToggleSidebar } from '../../svgs/ToggleSidebar'
import { ProfilePreview } from './ProfilePreview'

export function MenuSidebar({isOpen, setIsOpen}) {

  function toggleSidebar(){
    setIsOpen(!isOpen)
  }

  return (
    <>
      <aside
        className={`flex flex-col justify-between z-40 bg-darkSidebar h-screen pt-5 border-r transition-all border-x-[#292929] col-start-1 col-end-1`}
      >
        <div>
          <ToggleSidebar onToggle={toggleSidebar} />
          <Navigation isOpen={isOpen} />
        </div>
        <div className="mini-profile flex flex-row items-center justify-start ps-4 gap-[0.75rem] h-8 w-full mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg" className='rounded-full min-w-8 min-h-8 max-w-8 max-h-8' />
            {isOpen && <ProfilePreview />}
        </div>
      </aside>
    </>
  )
}

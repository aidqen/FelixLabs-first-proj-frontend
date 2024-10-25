import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navigation } from './Navigation'
import { ToggleSidebar } from '../../svgs/ToggleSidebar'
import { ProfilePreview } from './ProfilePreview'

export function MenuSidebar({ isOpen, setIsOpen }) {
  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <aside
        className={`flex flex-col justify-start z-40 bg-mainBg h-screen pt-5 transition-all border-0 col-start-1 col-end-1`}
      >
        <div>
          <ToggleSidebar onToggle={toggleSidebar} />
          <Navigation isOpen={isOpen} />
        </div>
      </aside>
    </>
  )
}

import { Outlet } from 'react-router'
import { MenuSidebar } from '../cmps/MenuSidebar'
import { useState } from 'react'

export function AppIndex() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`app h-screen w-screen grid ${
        isOpen ? 'grid-cols-[16rem,1fr]' : 'grid-cols-[4rem,1fr]'
      } transition-all`}
    >
      <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`main-section  w-full h-full col-start-2`}>
        <Outlet />
      </div>
    </div>
  )
}

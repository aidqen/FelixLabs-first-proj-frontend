import { Outlet } from 'react-router'
import { MenuSidebar } from '../cmps/MenuSidebar/MenuSidebar'
import { useState } from 'react'

export function AppIndex() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`app h-screen w-screen grid ${
        isOpen ? 'grid-cols-[14rem,1fr]' : 'grid-cols-[5rem,1fr]'
      } transition-all`}
    >
      <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`main-section w-full h-full col-start-2 bg-mainBg`}>
        <Outlet />
      </div>
    </div>
  )
}

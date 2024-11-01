import { Navigation } from './Navigation'
import { ToggleSidebar } from '../../svgs/ToggleSidebar'

export function MenuSidebar({ isOpen, setIsOpen }) {
  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <aside
        className={`flex flex-col justify-start z-40 bg-mainBg h-screen pt-5 transition-all border-0 col-start-1 col-end-1`}
      >
        <Navigation isOpen={isOpen} />
        <div className="w-full flex justify-start">
          <ToggleSidebar onToggle={toggleSidebar} />
        </div>
      </aside>
    </>
  )
}

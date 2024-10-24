import { Outlet } from "react-router";

export function AppIndex() {
     
    return (
        <div className="main-section w-50 h-50 bg-purple-400">
            <Outlet />
        </div>
    )
}
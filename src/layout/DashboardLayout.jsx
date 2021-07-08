import React from 'react'
import Navbar from '../nav/Navbar'
import Sidebar from '../nav/Sidebar'
import { useStateValue } from '../StateContext/StateProvider'

function DashboardLayout({children}) {

    const [{view}] = useStateValue()

    return (
        <div className={`${view === "on" ? " grid-cols-6 " : "grid-cols-1 "} md:static absolute bg-gray-100 min-h-screen grid w-full`}>
            <div className={`${view === "on" ? "w-5/6 " : "hidden"} transition duration-500 ease-in-out col-span-1 h-full bg-white top-0 left-0 md:static absolute md:w-full`}>
                <Sidebar />
            </div>
            <div className={`body col-span-5 flex flex-col w-full`}>
                <div className="nav ">
                    <Navbar />
                </div>
                <div className="mainbody ">{children}</div>
            </div>
        </div>
    )
}

export default DashboardLayout

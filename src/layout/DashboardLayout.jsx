import React from 'react'
import Navbar from '../nav/Navbar'
import Sidebar from '../nav/Sidebar'

function DashboardLayout({children}) {
    return (
        <div className="bg-gray-100 min-h-screen grid grid-cols-6 w-full">
            <div className="col-span-1 h-full bg-white top-0 left-0">
                <Sidebar />
            </div>
            <div className="body col-span-5 flex flex-col w-full">
                <div className="nav">
                    <Navbar />
                </div>
                <div className="mainbody">{children}</div>
            </div>
        </div>
    )
}

export default DashboardLayout

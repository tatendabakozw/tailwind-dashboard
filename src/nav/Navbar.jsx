import React from 'react'
import {MenuAlt1Icon} from '@heroicons/react/outline'
import DashboardIcon from '@material-ui/icons/Dashboard';

function Navbar() {
    return (
        <nav className="py-4 px-8 flex flex-row items-center">
            <div className="search bg-white p-3 rounded-lg">
                <MenuAlt1Icon height={20} width={20} />
            </div>
            <div className="flex-grow"></div>
            <span className="bg-white p-3 rounded mx-2">
                <DashboardIcon height={20} width={20} fontSize="small" className="text-gray-700" />
            </span>
            <span className="bg-blue-300 p-3 rounded mx-2">
                <p className="text-gray-700 text-sm">AD</p>
            </span>
            <div className="p-3 rounded mx-2 md:flex hidden flex-col">
                <p className="text-gray-900">Admin Dashboard</p>
                <p className="text-xs text-gray-500">dashboard@gmail.com</p>
            </div>
        </nav>

    )
}

export default Navbar

import React from 'react'
import {ClipboardListIcon} from '@heroicons/react/outline'
import {Link, useHistory, useLocation} from 'react-router-dom'

function Sidebar() {

    const location = useLocation()
    const history = useHistory()

    const sidebar_links = [
        {
            title:"home",
            location: "/",
            icon: <ClipboardListIcon height={24} width={24} className="text-gray-700" />,
            id:1
        }
    ]

    return (
        <div class="bg-white">
            <div className="flex flex-col">
                <div className="top flex flex-col items-center px-8 py-16">
                    <p className="text-6xl text-black font-bold">D</p>
                </div>
                <div className="links">
                    {
                        sidebar_links.map(option =>(
                            <span key={option.id} onClick={() => history.push(`${option.location}`)} className={`${option.location === location.pathname ? "border-r-4 border-black" : "border-none" } text-gray-700 p-3 hover:bg-gray-100 cursor-pointer font-semibold flex flex-row items-center`}>
                                {option.icon}
                                <p className="ml-2">{option.title}</p>
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar

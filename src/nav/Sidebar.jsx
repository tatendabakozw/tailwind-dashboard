import React from 'react'
import {ClipboardListIcon,  ChevronDoubleLeftIcon, XIcon} from '@heroicons/react/outline'
import {useHistory, useLocation} from 'react-router-dom'
import { useStateValue } from '../StateContext/StateProvider'

function Sidebar() {

    const location = useLocation()
    const history = useHistory()
    const [{}, dispatch] = useStateValue()

    const setMobileSidebar = (e) =>{
        e.preventDefault()
        dispatch({
            type: 'SET_NAVBAR',
            view: "off"
        })
    }

    const sidebar_links = [
        {
            title:"home",
            location: "/",
            icon: <ClipboardListIcon height={24} width={24} className="text-gray-700" />,
            id:1
        },
        {
            title:"Page 1",
            location: "/page1",
            icon: <ClipboardListIcon height={24} width={24} className="text-gray-700" />,
            id:2
        }
    ]

    return (
        <div className="z-50 transition duration-500 ease-in-out bg-white">
            <div className="transition duration-500 ease-in-out flex flex-col">
                <span onClick={setMobileSidebar} className="md:hidden flex flex-row items-center justify-between p-2 m-2 rounded-lg">
                    <ChevronDoubleLeftIcon height={24} width={24} className="text-gray-700" />
                    <XIcon height={24} width={24} className="text-gray-700" />
                </span>
                <div className="top flex flex-col items-center px-8 py-16">
                    <p className="text-6xl text-black font-bold">D</p>
                </div>
                <div className="links">
                    {
                        sidebar_links.map(option =>(
                            <>
                                <span 
                                key={option.id} 
                                onClick={() => {
                                    history.push(`${option.location}`)
                                    dispatch({
                                        type: 'SET_NAVBAR',
                                        view: "off"
                                    })
                                }} 
                                className={`${option.location === location.pathname ? "border-r-4 border-black " : "border-none " } transition duration-500 ease-in-out text-gray-700 p-3 hover:bg-gray-100 cursor-pointer font-semibold md:hidden flex flex-row items-center`}>
                                {option.icon}
                                <p className="ml-2">{option.title}</p>
                            </span>
                            <span 
                                key={option.id} 
                                onClick={() => {
                                    history.push(`${option.location}`)
                                }} 
                                className={`${option.location === location.pathname ? "border-r-4 border-black " : "border-none " } transition duration-500 ease-in-out text-gray-700 p-3 hover:bg-gray-100 cursor-pointer font-semibold md:flex hidden flex-row items-center`}>
                                {option.icon}
                                <p className="ml-2">{option.title}</p>
                            </span>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar

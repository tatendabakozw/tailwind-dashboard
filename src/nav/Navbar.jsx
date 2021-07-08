import React from 'react'
import {MenuAlt1Icon, ChevronDownIcon} from '@heroicons/react/outline'
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useStateValue } from '../StateContext/StateProvider';
import Select from '../components/Select';

function Navbar() {
    // eslint-disable-next-line 
    const [{view}, dispatch] = useStateValue()

    const setMobileSidebar = (e) =>{
        e.preventDefault()
        dispatch({
            type: 'SET_NAVBAR',
            view: view === "off" ? 'on' : 'off'
        })
    }

    console.log(view)

    return (
        <nav className="transition duration-500 ease-in-out py-4 md:px-8 px-4 flex flex-row items-center">
            <div onClick={setMobileSidebar} className="search md:hidden flex bg-white p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
                <MenuAlt1Icon height={20} width={20} />
            </div>
            <div onClick={setMobileSidebar} className="search md:flex hidden bg-white p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
                <MenuAlt1Icon height={20} width={20} />
            </div>
            <div className="flex-grow"></div>
            <span className="bg-white p-3 rounded mx-2">
                <DashboardIcon height={20} width={20} fontSize="small" className="text-gray-700" />
            </span>
            <Select
                title={(<span className="flex flex-row items-center cursor-pointer">
                            <span className="bg-blue-300 p-3 rounded mx-2">
                                <p className="text-gray-700 text-sm">AD</p>
                            </span>
                            <div className="p-3 rounded ml-2 md:flex hidden flex-col">
                                <p className="text-gray-900">Admin Dashboard</p>
                                <p className="text-xs text-gray-500">dashboard@gmail.com</p>
                            </div>
                            <ChevronDownIcon height={16} width={16} />
                        </span>)}
            />
        </nav>

    )
}

export default Navbar

import React from 'react'
import {SearchIcon} from '@heroicons/react/outline'

function Navbar() {
    return (
        <nav className="py-4 px-8 flex flex-row items-center">
            <div className="search bg-white p-4 rounded-lg">
                <SearchIcon height={20} width={20} />
            </div>
            <div className="flex-grow"></div>
            <div className="ri">a;skfh</div>
        </nav>

    )
}

export default Navbar

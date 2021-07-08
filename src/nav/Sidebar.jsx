import React from 'react'
import {ClipboardListIcon} from '@heroicons/react/outline'

function Sidebar() {
    return (
        <div class="bg-white">
            <div className="flex flex-col">
                <div className="top flex flex-col items-center px-8 py-16">
                    <p className="text-6xl text-black font-bold">D</p>
                </div>
                <div className="links">
                    <span className="text-gray-700 p-3 hover:bg-gray-100 cursor-pointer font-semibold flex flex-row items-center border-r-4 border-black">
                        <ClipboardListIcon height={24} width={24} className="text-gray-700" />
                        <p>Link item</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

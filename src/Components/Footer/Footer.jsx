import { faClock, faGlobe, faHourglass, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <nav className='flex justify-between px-8 py-2 bg-white border-t border-gray-400'>
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `text-[11px]  font-medium ${isActive ? "text-black" : "text-gray-500"} duration-200 flex flex-col gap-y-1`}
                    >
                        <FontAwesomeIcon icon={faClock} className='text-xl'/>
                        Alarm
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/wrold"
                        className={({ isActive }) => `text-[11px] font-medium ${isActive ? "text-black" : "text-gray-500"} duration-200 flex flex-col gap-y-1`}
                    >
                        <FontAwesomeIcon icon={faGlobe} className='text-xl'/>
                        Wrold Clock
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/stopwatch"
                        className={({ isActive }) => `text-[11px]  font-medium ${isActive ? "text-black" : "text-gray-500"} duration-200 flex flex-col gap-y-1`}
                    >
                        <FontAwesomeIcon icon={faStopwatch} className='text-xl'/>
                        StopWatch
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/timer"
                        className={({ isActive }) => `text-[11px]  font-medium ${isActive ? "text-black" : "text-gray-500"} duration-200 flex flex-col gap-y-1`}
                    >
                        <FontAwesomeIcon icon={faHourglass} className='text-xl'/>
                        Timer
                    </NavLink>
                </div>
            </nav>
        </footer>
    )
}

export default Footer

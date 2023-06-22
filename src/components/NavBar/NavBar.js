import React from 'react'
import './navbarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {



    return (
        <div>
            <nav className='navbar'>
                <h2>RD</h2>
                <ul className='links'>
                    <li>About Me</li>
                    <li>Services</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Activities</li>
                    <li>Contact Me</li>
                </ul>

                <div className='toggle-btn'>
                    <FontAwesomeIcon icon={faBars} shake />
                </div>
            </nav>

            <div className='dropdown_menu'>
                <li>About Me</li>
                <li>Services</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Activities</li>
                <li>Contact Me</li>
            </div>
        </div>
    )
}

export default NavBar
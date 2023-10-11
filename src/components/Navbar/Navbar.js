import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Navbar/scopelogobird.png';
import './Navbar.css';


function Navbar() {
    const navstyle = ({ isActive }) => {
        return {
            color: isActive ? 'green' : 'white'
        }
    }
    return (
        <div className='Navbar' id='topbar'>
            <div className='container'>
                <div className='NavbarLeftSide'>
                    <ul className='Navbarul'>
                        <li>
                            <NavLink style={navstyle} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink style={navstyle} to='/Courses'>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink style={navstyle} to='/Placement'>Placement Cell</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='logo'>
                    <NavLink to='/'>
                        <img src={logo} alt='Scope Logo' className='NavbarLogo' />
                    </NavLink>
                </div>
                <div className='NavbarRightSide'>
                    <ul>
                        <li>
                            <NavLink style={navstyle} to='/About'>Know SCOPE India</NavLink>
                        </li>
                        <li>
                            <NavLink style={navstyle} to='/Contact'>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Register'><button className='NavbarButton'>Register Now</button> </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

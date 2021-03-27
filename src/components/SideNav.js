import React from 'react'
import './sidenav.css';
import {Link} from 'react-router-dom'

const SideNav = () => {
    return (
        <div className='sidenav-div'>
            <div className='sidenav-logo'>
                Agri-Purchase Management
            </div>
            
            <ul className='sidenav-element'>
                <li><Link to='/'>Agri-Input Master Management</Link></li>
                <li><Link to='/'>Supplier Master Management</Link></li>
                <li><Link to='/purchase'>Agri-Input Purchase Management</Link></li>
            </ul>
        </div>
    )
}

export default SideNav

import React from 'react'
import './sidenav.css';
import {Link, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {changeTitle} from '../actions/mainActions'

const SideNav = () => {
    const location = useLocation();
    const dispatch = useDispatch()

    return (
        <div className='sidenav-div'>
            <div className='sidenav-logo'>
                Agri-Purchase Management
            </div>
            
            <ul className='sidenav-element'>
                <li><Link onClick={() => dispatch(changeTitle('Agri-Input Master Management'))} to='/'>Agri-Input Master Management</Link></li>
                <li><Link onClick={() => dispatch(changeTitle('Supplier Master Management'))} to='/'>Supplier Master Management</Link></li>
                <li className={location.pathname === '/purchase' ? `sidenav-active` : ''}><Link onClick={() => dispatch(changeTitle('Agri-Input Purchase Request'))} to='/purchase'>Agri-Input Purchase Request</Link></li>

                <div className='sidenav-bottom'><li>Tax Master Maintenance</li></div>
            </ul>
        </div>
    )
}

export default SideNav

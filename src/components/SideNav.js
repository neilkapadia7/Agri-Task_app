import React from 'react'
import './sidenav.css';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {changeTitle} from '../actions/mainActions'

const SideNav = () => {

    const dispatch = useDispatch()

    return (
        <div className='sidenav-div'>
            <div className='sidenav-logo'>
                Agri-Purchase Management
            </div>
            
            <ul className='sidenav-element'>
                <li onClick={() => dispatch(changeTitle('Agri-Input Master Management'))}><Link to='/'>Agri-Input Master Management</Link></li>
                <li onClick={() => dispatch(changeTitle('Supplier Master Management'))}><Link to='/'>Supplier Master Management</Link></li>
                <li onClick={() => dispatch(changeTitle('Agri-Input Purchase Request'))}><Link to='/purchase'>Agri-Input Purchase Request</Link></li>

                <div className='sidenav-bottom'><li>Tax Master Maintenance</li></div>
            </ul>
        </div>
    )
}

export default SideNav

import React from 'react'
import { CSVLink, CSVDownload } from 'react-csv'
import {useDispatch} from 'react-redux'

const Box3 = ({title, icon, image, data, headers}) => {
    const dispatch = useDispatch()
    
    return (
        <div className='box3'>
            {image && (
                <img src={image} className='box3-image3' alt='image'/>
            )}
            <p className={`box3-title ${!icon ? 'no-icon' : ''} ${!image ? 'no-image' : ''}`}>{title}</p>
            {icon && data && (
                <CSVLink data={data} headers={headers}><img src={icon} className='box3-icon' alt='icon'/></CSVLink>
            )}
            {icon && !data && (
                <img src={icon} className='box3-icon' alt='icon' onClick={() => dispatch({type: 'TOGGLE_ROW'})}/>
            )}
        </div>
    )
}

export default Box3

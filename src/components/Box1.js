import React from 'react'
import {useDispatch} from 'react-redux'

const Box1 = ({title}) => {
    const dispatch = useDispatch()
    return (
        <>
        {title === 'Executing' ? (
        <div className='box1' onClick={() => dispatch({type: 'SHOW_ROWS'})}>
            <p className='box1-title'>{title}</p>
        </div>
        ) : (
            <div className='box1' onClick={() => dispatch({type: 'HIDE_ROWS'})}>
                <p className='box1-title'>{title}</p>
            </div>
        )}
        </>
    )
}

export default Box1

import React from 'react'
import {useSelector} from 'react-redux'

const Details = () => {
    const main = useSelector(state => state.main)
    const {row} = main

    return (
        <>
        {row &&
            <div className='row-details'>
                Details will go here
            </div>
        }
        </>
    )
}

export default Details

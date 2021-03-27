import React from 'react'
import Box1 from './Box1'

const Row1 = () => {
    return (
        <div className='row1'>
            <Box1 title='Pending'/>
            <Box1 title='Executing'/>
            <Box1 title='Executed'/>
            <Box1 title='Completed'/>
        </div>
    )
}

export default Row1

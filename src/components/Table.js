import React from 'react'
import TableRow from './TableRow';
import TableHeading from './TableHeading';

const Table = ({heading, data}) => {
    return (
        <div>
            <table>
                <thead>
                   <TableHeading heading={heading}/> 
                </thead>
                <tbody>
                    {data.map(d => (
                        <TableRow data={d} key={d.id}/>
                    ))}    
                </tbody>            
            </table>
        </div>
    )
}

export default Table
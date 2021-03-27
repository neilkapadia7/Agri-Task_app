import React from 'react'

const TableHeading = ({heading}) => {
    return (
        <tr>
            <th>{heading.sr}</th>
            <th>{heading.category}</th>
            <th>{heading.product_image}</th>
            <th>{heading.product_description}</th>
            <th>{heading.quantity}</th>
        </tr>
    )
}

export default TableHeading

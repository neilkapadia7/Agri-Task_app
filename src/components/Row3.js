import React from 'react'
import Box3 from './Box3'
import {useSelector} from 'react-redux'

const Row2 = ({data}) => {

    const main = useSelector(state => state.main);
    const {row} = main

    const headers = [
        { label: "SR.", key: "id" },
        { label: "Agri-Input Category", key: "category" },
        { label: "Product Image", key: "product_image" },
        { label: "Product Description", key: "product_description" },
        { label: "Quantity", key: "quantity" }
    ];

    return (
        <div className='row3'>
            <Box3 title='ASJHBHJ_hbjha_12' icon={row ? 'https://www.flaticon.com/svg/vstatic/svg/959/959159.svg?token=exp=1617003469~hmac=60f90adb283cf62dda3821cea65a7283' : 'https://image.flaticon.com/icons/png/128/626/626078.png'}/>
            <Box3 title='Alex Lee' image='https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg'/>
            <Box3 title='Generate PO' icon='https://image.flaticon.com/icons/png/128/724/724933.png'  image='https://img.icons8.com/color/452/microsoft-excel-2019--v1.png' data={data} headers={headers} />
        </div>
    )
}

export default Row2

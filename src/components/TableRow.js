import React, {useState} from 'react'
import './modal.scss'


const TableRow = ({data}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);

    return (
        <>
        <tr className='border_top'>
            <td>{data.id}</td>
            <td>{data.category}</td>
            <td><img src={data.product_image} alt='product'/></td>
            <td>{data.product_description}</td>
            <td>{data.quantity}</td>
            <td><img src='https://image.flaticon.com/icons/png/128/106/106900.png' className='td-display' alt='redirect' onClick={showModal}/></td>
        </tr>
       
        {isModalVisible ? (
        <center>
        <div class="modal" id="modal">
            <h2>{data.category}</h2>
            <div class="content"><br /><strong>Description :</strong> {data.product_description} <br /><br /><br /> <strong>Quantity :</strong> {data.quantity}<br /></div>
            <div class="actions">
                <button class="toggle-button" onClick={() => setIsModalVisible(false)}>Close</button>
            </div>
        </div>
        </center>
        ) : null}
        </>
    )
}

export default TableRow
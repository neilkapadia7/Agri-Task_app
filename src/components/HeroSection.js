import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import Table from './Table'
import { useLocation } from 'react-router-dom'

const HeroSection = () => {
    const location = useLocation()

    const heading = {sr: 'SR.', category: 'Agri-Input Category', product_image: 'Product Image', product_description: 'Product Description', quantity: 'Quantity'}

    const data = [
        {id: 1, category: 'Seeds/Seedling', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Chili Sakata', quantity: 26}, 
        {id: 2, category: 'Nutrients/Fertilizers', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Acme Brand Fert', quantity: 114}, 
        {id: 3, category: 'Pesticide/Fungicide', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Valiants ME', quantity: 40}, 
        {id: 4, category: 'Growing Medium', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Acme Brand Cocopeat', quantity: 20}, 
        {id: 5, category: 'Growing Medium', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Acme Brand Cocohusk', quantity: 50}, 
        {id: 6, category: 'Pesticide/Fungicide', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Decis', quantity: 4}, 
    ]

    return (
        <div className='hero-section-div'>
            <div className='hero-section-padding'>
                <h2 className='page-title'>Agri-Input Master Maintenance</h2>
                {location.pathname === '/purchase' && <Row1 /> }
                <Row2 />
                <Row3 heading={heading} data={data}/>
                <Table heading={heading} data={data} />
            </div>
        </div>
    )
}

export default HeroSection

import React, {useEffect} from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import Table from './Table'
import { useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {changeTitle} from '../actions/mainActions'
const HeroSection = () => {
    const location = useLocation();
    const dispatch = useDispatch()

    useEffect(() => {
        if(location.pathname === '/purchase') {
            dispatch(changeTitle('Agri-Input Purchase Request'))
        }
    }, [dispatch, location]);

    const state = useSelector(state => state);
    const {main: {page_title, rows}, main2: {heading, data}} = state;

    return (
        <div className='hero-section-div'>
            <div className='hero-section-padding'>
                <h2 className='page-title'>{page_title}</h2>
                {location.pathname === '/purchase' && <Row1 /> }
                {rows &&
                    <>
                        <Row2 />
                        <Row3 heading={heading} data={data}/>
                        <Table heading={heading} data={data} />
                    </>
                }
            </div>
        </div>
    )
}

export default HeroSection
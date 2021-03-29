import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {mainReducer, mainReducer2} from './reducers/mainReducers'

const reducer = combineReducers({
    main: mainReducer,
    main2: mainReducer2
})

const heading = {
    sr: 'SR.', category: 'Agri-Input Category', product_image: 'Product Image', product_description: 'Product Description', quantity: 'Quantity'
}

const data = [
    {id: 1, category: 'Seeds/Seedling', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Chili Sakata', quantity: 26}, 
    {id: 2, category: 'Nutrients/Fertilizers', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Acme Brand Fert', quantity: 114}, 
    {id: 3, category: 'Pesticide/Fungicide', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Valiants ME', quantity: 40}, 
    {id: 4, category: 'Growing Medium', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Acme Brand Cocopeat', quantity: 20}, 
    {id: 5, category: 'Growing Medium', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Acme Brand Cocohusk', quantity: 50}, 
    {id: 6, category: 'Pesticide/Fungicide', product_image: 'https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg', product_description: 'Decis', quantity: 4}, 
]

const initialSate = {
    main2 : {
        data: data,
        heading: heading
    }
};

const middleWare = [thunk];

const store = createStore(reducer, initialSate, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
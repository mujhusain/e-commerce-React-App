
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './prodComponents';
import { useDispatch } from 'react-redux';
import {setProducts} from '../actions/productAction'

import axios from 'axios';
const ProductListing =()=>{
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.productReducer.products)
    
    const fetchProductsList=async ()=>{
        const response=  await axios.get('https://fakestoreapi.com/products')
        .catch(err=>console.log(err))
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProductsList();
    },[])
    console.log("pr",products);
    
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;
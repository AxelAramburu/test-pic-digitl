import React from 'react'
import { Product } from '../components/Products';

const getProducts = async () => {
    let products: Product[];
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        products = await res.json();

        return products;
    } catch (error) {
        console.log(error);
        return(
            <h1> Error: No data</h1>
        )
    }
}

export default getProducts
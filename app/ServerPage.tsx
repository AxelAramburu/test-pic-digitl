// @ts-nocheck
import React, { Suspense } from 'react'
import getProducts from './libs/getProducts';
import Products, { Product } from './components/Products';
import Loading from './components/Loading';

const ServerPage = async () => {
  const products = await getProducts();
  return (
    <>
        <Suspense fallback={<Loading />}>
            <Products products={products}/> 
        </Suspense>
    </>
  )
}

export default ServerPage


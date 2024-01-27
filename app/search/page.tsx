//@ts-nocheck
import React, { Suspense } from 'react'
import getProducts from '../libs/getProducts';
import SearchClient from './SearchClient';
import Loading from '../components/Loading';

const ServerSearchPage = async () => {
  const products = await getProducts();

  return (
    <Suspense fallback={<Loading />}>
      <SearchClient products={products}/>
    </Suspense>
  )
}

export default ServerSearchPage


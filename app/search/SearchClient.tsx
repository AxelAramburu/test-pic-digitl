'use client'
import React, { Suspense } from 'react'
import Products, { Product } from '../components/Products'
import Loading from '../components/Loading';
import { useSearchParams } from 'next/navigation'

export default function SearchClient({products}: {products: Product[]}) {

    const searchParamsz = useSearchParams()
    const searchQuery = searchParamsz.get('q');
    console.log(searchQuery);
    const sortedArray = products.filter(product => typeof searchQuery === 'string' && product.title.includes(searchQuery));

  return (
    <>
        <Suspense fallback={<Loading />}>
            {sortedArray.length == 0 ? <div className='flex justify-center pt-10'>
                    <h1>Nothing here...</h1>
                </div> : <Products products={sortedArray}/> }
        </Suspense>
    </>
  )
}

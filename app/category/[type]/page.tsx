
import React from 'react'
import Link from 'next/link';

import ProductCard from '@/app/components/ProductCard';
import { Product } from "../../components/Products";


const Category = async ({params}: {params: any}) => {
  
  let products: Product[] | undefined;
  try {
    const url = `https://fakestoreapi.com/products/category/${params.type}`;
    const res = await fetch(url);
    products = await res.json();    
  } catch (error) {
    console.log(error);
  }

  if (!products) {
    return <p>Loading...</p>;
  }
  return (
    <>
    <div className="p-10 space-y-16">
        {products.map(product => 
        <Link key={product.id} 
              href={`/category/${product.category}/${product.id}`} 
              className="card lg:card-side bg-base-100 shadow-xl">
                <ProductCard product={product} />
        </Link>)}
    </div>
    </>
  );
}

export default Category
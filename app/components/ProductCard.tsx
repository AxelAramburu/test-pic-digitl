import React from 'react'
import Image from "next/image";

const ProductCard = ({product}: {product: any}) => {
  return (
    <>
      <div className="image-container p-16 max-w-xs">
        <Image src={product.image} fill alt="Product" sizes="max-w-xl" className="image relative"/>       
      </div>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="font-light pb-6">{product.description.length > 250 ? `${product.description.substring(0, 150)}...` : product.description}</p>
        <div className="card-actions justify-end">
            <button className="p-2 rounded-xl bg-black text-white">{product.price} $</button>
        </div>
      </div> 
    </>
  )
}

export default ProductCard
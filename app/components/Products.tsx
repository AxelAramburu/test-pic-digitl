'use client'
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useState } from "react";

import Loading from "./Loading";

export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  image?: string,
  rating: {
    rate: number,
    count: number
  },
  category: string,
}

const Products = ({products}: {products: Product[]}) => {

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(5);

  const handleClick = async (e: any) => {
      setLoading(true);
      e.preventDefault();
      setVisible(prevVisisible => prevVisisible + 5);
      setLoading(false);
      console.log("trigger");
  }

  return (
    <>
      <div className="p-10 space-y-16">
          {products.slice(0, visible).map(product => 
          <Link key={product.id} 
                href={`/category/${product.category}/${product.id}`} 
                className="card lg:card-side bg-base-100 shadow-xl">
                  <ProductCard product={product} />
          </Link>)}
      </div>
      <div className="flex justify-center items-center pb-6">
        {visible < products.length
             ? loading ? <Loading /> : <button className="btn btn-outline border-2" onClick={handleClick}>Load More</button>
             : <></>
        }
      </div>
    </>
  );
}

export default Products


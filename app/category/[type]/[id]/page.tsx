import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Product } from "../../../components/Products";

const Page = async ({params}: {params: any}) => {
  let product: Product | undefined;
  try {
    const url = `https://fakestoreapi.com/products/${params.id}/`;
    const res = await fetch(url);
    product = await res.json();
    
  } catch (error) {
    console.log(error);
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  const rate = product.rating.rate;
  
  return (
    <>
      <Link className='w-1/6 flex' href='/'>
        <IoMdArrowRoundBack className='size-16 pl-6 pt-6'/>
      </Link>
      <div className="image-container p-12 max-w-xs">
      < Image src={product.image!} fill alt="Product" sizes="max-w-xl" className="image relative"/>       
      </div>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="font-light">{product.description}</p>
        <div className='flex flex-col'>
          <div className='flex'>
            <p>{rate}</p>  
            <div className="flex">
              <FaStar className='text-orange-400 size-6'/>
              {rate < 2 
              ? <FaRegStar className='text-orange-400 size-6'/> 
              : <FaStar className='text-orange-400 size-6'/>
              }
              {rate < 3
              ? <FaRegStar className='text-orange-400 size-6'/> 
              : <FaStar className='text-orange-400 size-6'/>
              }
              {rate < 4 
              ? <FaRegStar className='text-orange-400 size-6'/> 
              : <FaStar className='text-orange-400 size-6'/>
              }
              {rate < 5
              ? <FaRegStar className='text-orange-400 size-6'/> 
              : <FaStar className='text-orange-400 size-6'/>
              }                 
            </div>
          </div>
          <p>{product.rating.count} Ratings</p>
        </div>
        <div className="card-actions justify-end">
            <button className="p-2 rounded-xl bg-black text-white">{product.price} $</button>
        </div>
      </div> 
    </>
  );
}

export default Page
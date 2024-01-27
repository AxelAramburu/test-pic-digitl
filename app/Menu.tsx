import Link from 'next/link'
import React, { Suspense } from 'react'
import Image from "next/image";
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';

const Menu = async () => {
  let categories;
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    categories = await res.json();  
  } catch (error) {
    console.log(error);
    return(
      <h1> Error: No data</h1>
    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <Link className='image-container flex justify-center items-center size-20 p-4' href="/">
        <Image src="/Logo.png" fill alt="Product" sizes="max-w-xl" className="image max-w-11 "/> 
      </Link>
      <nav className="form-control px-6 py-2">
        <SearchBar />
      </nav>
      <ul className='flex space-x-8 p-2 overflow-hidden overflow-x-scroll'>
      <Link className=' flex justify-center items-center whitespace-nowrap rounded-full border-2 border-black py-2 px-6 min-w-14 hover:text-white hover:bg-black' href="/">All</Link>
        {categories.map((category: string) => <Link className='flex whitespace-nowrap justify-center items-center rounded-full border-2 border-black px-6 hover:text-white hover:bg-black' key={category} href={`/category/${category}`}>{category}</Link>)}
      </ul>
    </Suspense>
  )
}

export default Menu
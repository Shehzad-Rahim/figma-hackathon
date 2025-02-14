'use client'
import React , { useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'; 


interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  slug: { current: string };
}

const ProductSearch = () => {
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (searchTerm: string) => {
    setQuery(searchTerm);
    if (searchTerm.length < 2) {
      setProducts([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/search?query=${searchTerm}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };


 
  
  return (
    <div className="">
        <input className='p-2 text-xs  border border-gray-400 outline-none'
         type="text"
          placeholder='search product'
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
           />
    <div className="relative w-full">
    {loading && <p className="absolute mt-4 text-center text-gray-500">Loading...</p>}
     {products.length > 0 &&  (
        <div className="absolute w-[300px] bg-white shadow-lg rounded-lg mt-4 max-h-60 overflow-y-auto z-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex items-center p-3 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => router.push(`/productsListing/${product.slug.current}`)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className="ml-3">
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

export default ProductSearch
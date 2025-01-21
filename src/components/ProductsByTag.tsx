"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ProductsCardType } from "@/sanity/schemaTypes/productType";
import Link from "next/link";
import ProductsProp from "./ProductsProp";


const fetchProductsByTag = async (tag: string) => {
  const query = `
    *[_type == "product" && "${tag}" in tags] {
      _id,
      name,
      slug,
      "image": image.asset->url,
      price,
      tags,
      description,
      dimensions
    }
  `;
  return await client.fetch(query, {}, {cache: "no-store"});
};

const ProductsByTag = ({ tag }: { tag: string }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProductsByTag(tag);
      setProducts(fetchedProducts);
    };
    fetchData();
  }, [tag]);

  if (products.length === 0) {
    return <p className="text-center text-4xl text-[#2a254b] my-32">No products found for {tag}</p>;
  }

  return (
    <div className="flex flex-col gap-10 my-20 sm:mx-20">
      <h1 className="text-[32px] leading-[39.36px] lg:text-start text-center capitalize">{tag}</h1>
        <div  className="flex gap-6 lg:flex-nowrap flex-wrap lg:justify-start justify-center">
      {products.map((product: ProductsCardType) => (
        <Link key={product._id} href={`/productsListing/${product.slug.current}`}>
        <ProductsProp
        image={product.image}
        title={product.name}
        price={product.price}
        />
        </Link>
      ))}
      </div>
      
      <Link className="flex justify-center items-center mx-auto my-5 sm:w-[170px] w-full h-[56px] bg-[#f9f9f9]" href={'/productsListing'}>View collection</Link>
    </div>
  );
};

export default ProductsByTag;

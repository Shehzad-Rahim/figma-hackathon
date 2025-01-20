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
  return await client.fetch(query);
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
    return <p>No products found for {tag}</p>;
  }

  return (
    <div className="flex flex-col gap-10 my-20 sm:mx-20">
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
    </div>
  );
};

export default ProductsByTag;

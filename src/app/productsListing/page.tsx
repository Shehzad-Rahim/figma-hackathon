import ProductsProp from "@/components/ProductsProp";
import Link from "next/link"
import Image from "next/image";
import productbanner from '../../../public/images/products.png'
import { client } from '../../sanity/lib/client';
import { allProductsQuery } from "@/sanity/fetchQueries";
import { ProductsCardType } from "@/sanity/schemaTypes/productType";

export async function generateStaticParams() {
  const query = `*[_type == "product"] { "slug": slug.current }`;
  const products = await client.fetch(query);
  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}
export default async function Products() {
  
  const products = await client.fetch(allProductsQuery, {}, {cache: "no-store"})
 
    return (
    <>
      <Image className="w-full" src={productbanner} alt="product banner"></Image>
        
      <div className="flex flex-col gap-5 md:mx-20 sm:mx-10">
      
      <div className="flex  gap-6 my-10">
        <div  className="flex flex-wrap sm:justify-start justify-center gap-6">
        {products.map((product:ProductsCardType)=>(

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
    </div>
    </>
    );
  }
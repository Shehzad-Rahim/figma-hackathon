import ProductsProp from "@/components/ProductsProp";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { ProductsCardType } from "@/sanity/schemaTypes/productType";

// Fetch data for the category page
async function getCategoryData(slug: string) {
  const query = `
    *[_type == "category" && slug.current == $slug][0] {
      name,
      slug,
      "products": *[_type == "product" && references(^._id)] {
        name,
        slug,
        price,
        "image": image.asset->url
      }
    }
  `;
  const data = await client.fetch(query, { slug });
  return data;
}



interface Category {
  name: string;
  products: ProductsCardType[];
}

interface Props {
  params: { slug: string };
}

// Dynamic category page
const CategoryPage = async ({ params }: Props) => {
  const { slug } = params;

  // Fetch category data
  const category: Category | null = await getCategoryData(slug);

  if (!category) {
    return <div className="container mx-auto p-4">Category not found.</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-semibold uppercase mb-5 text-center">{category.name}</h1>
      <div  className="flex flex-wrap sm:justify-start justify-center gap-6">
        {category.products.map((product) => (
          <Link href={`/productsListing/${product.slug.current}`} key={product.slug.current} className="border rounded p-4 shadow-md">
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

export default CategoryPage;

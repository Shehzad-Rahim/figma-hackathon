"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { catSlugQuery } from "@/sanity/fetchQueries";
import { usePathname } from "next/navigation";


interface Category {
  name: string;
  slug: string;
}

const CategoriesNav = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname()

  useEffect(() => {
    // Fetch slugs and category names from Sanity
    const fetchCategories = async () => {
      try {
        const data = await client.fetch(catSlugQuery);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className=" flex items-center justify-center gap-3 text-2xl text-[#2a254b] mt-5 capitalize">Loading <div className="w-[30px] h-[30px] border-t-2 border-b-2 border-l-2 border-blue-500 rounded-full animate-spin"></div> </div>;
  }

  return (
    <ul
    className='sm:flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4  md:py-4 sm:py-3 sm:gap-1 md:gap-5 lg:gap-10 sm:bg-none bg-white sm:bg-opacity-100 bg-opacity-90 '
  >
    {categories.map((category)=> {
      const isActive = pathname.startsWith(`/category/${category.slug}`)
    return (
      <li key={category.slug} className='border-b sm:border-none border-gray-400 sm:p-0  sm:pb-0 hover:bg-white'>
      <Link className={isActive ? "underline underline-offset-4 flex p-3" : "flex p-3"} href={`/category/${category.slug}`}>{category.name}</Link>
    </li>
    )
})}
  </ul>
  );
};

export default CategoriesNav;

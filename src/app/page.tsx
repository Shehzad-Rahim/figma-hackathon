import GetinTouch from "@/components/GetinTouch";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import JoinClub from "@/components/JoinClub";
import NewCaramics from "@/components/NewCaramics";
import PopularProducts from "@/components/PopularProducts";
// import ProductsByTag from "@/components/ProductsByTag";



export default function Home() {
  return (
    <div className="">
      <Hero />
      <BrandIntro />
      {/* <ProductsByTag tag="popular products"/> Still Testing */}
      <NewCaramics />
      <PopularProducts />
      <JoinClub />
      <GetinTouch />
    </div>
  );
}

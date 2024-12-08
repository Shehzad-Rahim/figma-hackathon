import GetinTouch from "@/components/GetinTouch";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import JoinClub from "@/components/JoinClub";
import NewCaramics from "@/components/NewCaramics";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
   <div className="">
    <Hero />
    <HomeIntro />
    <NewCaramics />
    <PopularProducts />
    <JoinClub />
    <GetinTouch />
   </div>
  );
}

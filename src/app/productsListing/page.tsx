import ProductsProp from "@/components/ProductsProp";
import Link from "next/link"
import Image from "next/image";
import p1 from '../../../public/New Caramics/1.png'
import p2 from '../../../public/New Caramics/2.png'
import p3 from '../../../public/New Caramics/3.png'
import p4 from '../../../public/New Caramics/4.png'
import p5 from '../../../public/New Caramics/5.png'
import p6 from '../../../public/New Caramics/6.png'
import p7 from '../../../public/New Caramics/7.png'
import p8 from '../../../public/New Caramics/8.png'
import productbanner from '../../../public/images/products.png'
export default function Products() {
    return (
    <>
        <Image src={productbanner} alt="product banner"></Image>
        
      <div className="flex flex-col gap-5 mx-20">
      <div className="flex  gap-6 my-10">
      <div className="flex flex-wrap sm:justify-start justify-center gap-6">
        <Link href={''}>
        <ProductsProp
        image={p1}
        P_alt="chair"
        title="The Dandy Chair"
        price={250}
        
        />
        </Link>
        <Link href={''}>
        <ProductsProp
        image={p2}
        P_alt="Rustic Vase Set"
        title="Rustic Vase Set"
        price={155}
       
        />
        </Link>
        <Link href={''}>
        <ProductsProp
        image={p3}
        P_alt="The Silky Vase"
        title="The Silky Vase"
        price={125}
        
        />
        </Link>

        <Link href={''}>
        <ProductsProp
        image={p4}
        P_alt="The Lucy Lamp"
        title="The Lucy Lamp"
        price={250}
       
        />
        </Link>
        </div>
        
      
    </div>
   <div className="flex  gap-6 my-10">
    <div className="flex flex-wrap sm:justify-start justify-center gap-6">
        <Link href={''}>
        <ProductsProp
        image={p5}
        P_alt="chair"
        title="The Dandy Chair"
        price={250}
       
        />
        </Link>
        <Link href={''}>
        <ProductsProp
        image={p6}
        P_alt="Rustic Vase Set"
        title="Rustic Vase Set"
        price={155}
        
        />
        </Link>
        <Link href={''}>
        <ProductsProp
        image={p7}
        P_alt="The Silky Vase"
        title="The Silky Vase"
        price={125}
        
        />
        </Link>

        <Link href={''}>
        <ProductsProp
        image={p8}
        P_alt="The Lucy Lamp"
        title="The Lucy Lamp"
        price={250}
        
        />
        </Link>
        </div>
        
      
    </div>
    <div className="flex  gap-6 my-10">
    <div className="flex flex-wrap sm:justify-start justify-center gap-6">
        <Link href={''}>
        <ProductsProp
        image={p1}
        P_alt="chair"
        title="The Dandy Chair"
        price={250}
       
        />
        </Link>
        <Link href={''}>
        <ProductsProp
        image={p2}
        P_alt="Rustic Vase Set"
        title="Rustic Vase Set"
        price={155}
       
        />
        </Link>
        <Link href={''}>
        <ProductsProp
        image={p3}
        P_alt="The Silky Vase"
        title="The Silky Vase"
        price={125}
       
        />
        </Link>

        <Link href={''}>
        <ProductsProp
        image={p4}
        P_alt="The Lucy Lamp"
        title="The Lucy Lamp"
        price={250}
       
        />
        </Link>
        </div>
        
      
    </div>
    <Link className="flex justify-center items-center mx-auto mb-10 w-[170px] h-[56px] bg-[#f9f9f9]" href={'/productsListing'}>View collection</Link>
    </div>
    </>
    );
  }
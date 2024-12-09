import Link from "next/link"
import p1 from '../../public/New Caramics/1.png'
import p2 from '../../public/New Caramics/2.png'
import p3 from '../../public/New Caramics/3.png'
import p4 from '../../public/New Caramics/4.png'
import ProductsProp from "./ProductsProp"
function NewCaramics() {
  return (
    <div className="flex flex-col gap-10 my-20 sm:mx-20">
        <h1 className="text-[32px] leading-[39.36px] lg:text-start text-center">New ceramics</h1>
        <div className="flex gap-6 lg:flex-nowrap flex-wrap lg:justify-start justify-center">

        <Link href={'/productsListing/product1'}>
        <ProductsProp
        image={p1}
        P_alt="chair"
        title="The Dandy Chair"
        price={250}
        
        />
        </Link>

        <Link href={'/productsListing/product2'}>
        <ProductsProp
        image={p2}
        P_alt="Rustic Vase Set"
        title="Rustic Vase Set"
        price={155}
       
        />
        </Link>
        <Link href={'/productsListing/product3'}>
        <ProductsProp
        image={p3}
        P_alt="The Silky Vase"
        title="The Silky Vase"
        price={125}
       
        />
        </Link>

        <Link href={'/productsListing/product3'}>
        <ProductsProp
        image={p4}
        P_alt="The Lucy Lamp"
        title="The Lucy Lamp"
        price={250}
        
        />
        </Link>

        </div>
        <Link className="flex justify-center items-center mx-auto sm:w-[170px] w-full h-[56px] bg-[#f9f9f9]" href={'/productsListing'}>View collection</Link>
    </div>
  )
}

export default NewCaramics
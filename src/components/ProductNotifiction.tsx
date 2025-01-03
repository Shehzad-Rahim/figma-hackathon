import { products } from "@/app/productsdata/data";
import Image from "next/image";
function ProductNotifiction() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          {product.content.map((content, i) => {
            if (content.type === "image") {
              return (
                <div key={i}>
                  <Image className="w-10 h-10 rounded-sm" src={content.value} alt="product image" />
                </div>
              );
            }
          })};
          
        </div>
      ))}
    </div>
  );
}

export default ProductNotifiction;

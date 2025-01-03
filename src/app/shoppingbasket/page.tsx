
// 'use client'
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { MdDeleteForever } from "react-icons/md";
// import { LuPlus , LuMinus } from "react-icons/lu";

// export interface CartItem {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   price: number;
//   quantity: number;
// }

// function CartPage() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [subtotal, setSubtotal] = useState<number>(0);

//   useEffect(() => {
//     // Fetch cart items from localStorage
//     const storedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(storedCart);

//     // Calculate initial subtotal
//     calculateSubtotal(storedCart);
//   }, []);

//   const calculateSubtotal = (items: CartItem[]) => {
//     const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     setSubtotal(total);
//   };

//   const removeItem = (index: number) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     calculateSubtotal(updatedCart);
//   };

//   const increaseQuantity = (index: number) => {
//     const updatedCart = cartItems.map((item, i) => {
//       if (i === index) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     calculateSubtotal(updatedCart);
//   };

//   const decreaseQuantity = (index: number) => {
//     const updatedCart = cartItems.map((item, i) => {
//       if (i === index && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     calculateSubtotal(updatedCart);
//   };

//   return (
//     <div className="bg-[#f9f9f9] px-4 py-10 md:px-20 lg:px-28">
//       <h1 className="text-2xl md:text-4xl mb-6">Your shopping cart</h1>

//       {/* Header */}
//       <div className="flex flex-wrap items-center justify-between py-2 border-b">
//         <p className="text-sm">Product</p>
//         <div className="sm:flex hidden gap-10">
//           <p className="text-sm">Quantity</p>
//           <p className="text-sm">Total</p>
//           <p></p>
//           <p></p>
//         </div>
        
//       </div>

//       {/* Cart Items */}
//       {cartItems.map((item, index) => (
//         <div
//           key={index}
//           className="flex sm:flex-row flex-col justify-between my-5 gap-6 pb-10 border-b"
//         >
//           <div className="flex gap-4 items-center">
//             <Image
//               className="w-[133px] h-[166px] md:w-[109px] md:h-[134px]"
//               src={item.image}
//               alt={item.name}
//               width={109}
//               height={134}
//             />
//             <div className="flex flex-col gap-2">
//               <h2 className="text-lg md:text-xl">{item.name}</h2>
//               <p className="text-sm md:text-base w-[200px]">{item.description}</p>
//               <p className="text-sm md:text-base">${item.price}</p>
//             </div>
//           </div>
//           <div className="flex gap-10 items-center">
//             <div className="flex items-center gap-3 text-xl">
//             <p className="text-sm sm:hidden">Quantity:</p>
//               <button
//                 className="px-3 py-1 bg-gray-200 "
//                 onClick={() => decreaseQuantity(index)}
//               >
//                 <LuMinus className="text-sm"/>
//               </button>
//               <p className="text-lg md:text-base">{item.quantity}</p>
//               <button
//                 className={"px-3 py-1 bg-gray-200 "}
//                 onClick={() => increaseQuantity(index)}
//               >
//                 <LuPlus className="text-sm" />
//               </button>
//             </div>
//             <div className="flex gap-6">
//             <p className="text-sm sm:hidden">Total:</p>
//             <p className="text-sm md:text-base">${item.price * item.quantity}</p>
//             </div>
          
//           <button
//             className="text-red-500 text-sm mt-2"
//             onClick={() => removeItem(index)}
//           >
//             <MdDeleteForever className="text-2xl" />
//           </button>
//           </div>
//         </div>
//       ))}

//       {/* Subtotal Section */}
//       <div className="flex justify-end mt-6">
//         <div className="flex flex-col items-end gap-4">
//           <div className="flex items-center gap-10">
//             <h2 className="text-lg md:text-2xl">Subtotal</h2>
//             <p className="text-lg md:text-2xl">${subtotal}</p>
//           </div>
//           <p className="text-sm md:text-base ">
//             Taxes and shipping are calculated at checkout
//           </p>
//           <button className="px-8 py-4 bg-[#2a254b] text-white">
//             Go to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";
import { LuPlus , LuMinus } from "react-icons/lu";
import { toast } from "sonner";

export interface CartItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });
  const router = useRouter();

  useEffect(() => {
    // Fetch cart items from localStorage
    const storedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);

    // Calculate initial subtotal
    calculateSubtotal(storedCart);
  }, []);

  const calculateSubtotal = (items: CartItem[]) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const increaseQuantity = (index: number) => {
    const updatedCart = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const decreaseQuantity = (index: number) => {
    const updatedCart = cartItems.map((item, i) => {
      if (i === index && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleOrderCompletion = () => {
    toast.success(`Order Successfully Submitted\n Order Details:\nName: ${formData.name}\nAddress: 
      ${formData.address}\nContact: ${formData.contact}\nTotal Price: $${subtotal + 10}`);
    setCartItems([]);
    localStorage.removeItem("cart");
    setShowCheckout(false);
    router.push("/");
  };

  return (
    <div className="bg-[#f9f9f9] px-4 py-10 md:px-20 lg:px-28">
      <h1 className="text-2xl md:text-4xl mb-6">Your shopping cart</h1>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between py-2 border-b">
        <p className="text-sm">Product</p>
        <div className="sm:flex hidden gap-10">
          <p className="text-sm">Quantity</p>
          <p className="text-sm">Total</p>
          <p></p>
          <p></p>
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex sm:flex-row flex-col justify-between my-5 gap-6 pb-10 border-b"
        >
          <div className="flex gap-4 items-center">
            <Image
              className="w-[133px] h-[166px] md:w-[109px] md:h-[134px]"
              src={item.image}
              alt={item.name}
              width={109}
              height={134}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl">{item.name}</h2>
              <p className="text-sm md:text-base w-[200px]">{item.description}</p>
              <p className="text-sm md:text-base">${item.price}</p>
            </div>
          </div>
          <div className="flex sm:gap-10 gap-8 items-center">
            <div className="flex items-center gap-3 sm:text-xl text-sm">
            <p className="text-sm sm:hidden">Quantity:</p>
              <button
                className="px-3 py-1 bg-gray-200 "
                onClick={() => decreaseQuantity(index)}
              >
                <LuMinus className="text-sm"/>
              </button>
              <p className="text-lg md:text-base">{item.quantity}</p>
              <button
                className={"px-3 py-1 bg-gray-200 "}
                onClick={() => increaseQuantity(index)}
              >
                <LuPlus className="text-sm" />
              </button>
            </div>
            <div className="flex gap-6">
            <p className="text-sm sm:hidden">Total:</p>
            <p className="text-sm md:text-base">${item.price * item.quantity}</p>
            </div>
          
          <button
            className=" text-sm mt-2"
            onClick={() => removeItem(index)}
          >
            <MdDeleteForever className="sm:text-2xl text-xl" />
          </button>
          </div>
        </div>
      ))}

      {/* Subtotal Section */}
      <div className="flex justify-end mt-6">
        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-10">
            <h2 className="text-lg md:text-2xl">Subtotal</h2>
            <p className="text-lg md:text-2xl">${subtotal}</p>
          </div>
          <p className="text-sm md:text-base ">
            Taxes and shipping are calculated at checkout
          </p>
          <button
            className="px-8 py-4 bg-[#2a254b] text-white"
            onClick={handleCheckout}
          >
            Go to Checkout
          </button>
        </div>
      </div>

      {/* Checkout Section */}
      {showCheckout && (
        <div className=" py-5 rounded shadow">
          <h2 className="text-xl mb-4">Checkout</h2>
          <form className="flex flex-col gap-4 ">
            <input
              className=" outline-none py-2 px-4"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <input
              className="outline-none py-2 px-4"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleFormChange}
            />
            <input
              className="outline-none py-2 px-4"
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleFormChange}
            />
            <div className="flex justify-between items-center">
              <p className="text-lg">Shipping Fee: $10</p>
              <p className="text-lg">Total: ${subtotal + 10}</p>
            </div>
            
          <button
            className="w-[300px] sm:mx-auto"
            onClick={handleOrderCompletion}
            type="button"
          >
            <p className="w-[100%] px-8 py-4 bg-[#2a254b] text-white">Complet Order</p>
          </button>
            
          </form>
        </div>
      )}
    </div>
  );
}

export default CartPage;

export interface BillingDetails {
    fullName: string;
    phoneNumber: string;
    email: string;
    addressLine1: string;
    addressLine2?: string; 
    city: string;
    paymentMethod: "cashOnDelivery" | "stripe"; 
  }
  
  export interface Billing{
    fullName: string;
    email: string;
    phoneNumber: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
  }

  export interface Product {
    imageUrl: string;
    rating: {
      count: number;
      rate: number;
    };
    tags: string[];
    price: number;
    discount: number;
    originalPrice: number;
    slug: string;
    categoryName: string;
    name: string;
    stock: number;
    dimensions: {
      depth: number;
      width: number;
      height: number;
    };
    id: number;
    description: string;
    Quantity: number;
    Finalprice: number;
  }
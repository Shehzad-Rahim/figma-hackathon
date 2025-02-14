export interface ProductType{
    name:string;
    discription: string;
    image:string;
    _id:string;
    features:string[];
    dimensions: {
        height: string;
        width: string;
        depth: string;
    };
    category:{
        name:string;
        slug:string;
    }
    price:number,
    tags: string[];
    quantity : number
}

export interface ProductsCardType {
    _id: string;
    image: string;
    name: string;
    price: number;
    slug: {
      current: string;
    };
  }
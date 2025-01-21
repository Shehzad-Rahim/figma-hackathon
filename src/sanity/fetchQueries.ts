
export const catSlugQuery = `*[_type == "category"] {
name,
"slug": slug.current}`



export const categoryQuery = `
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
    `
    export const allProductsQuery = `*[_type == 'product']{
      _id,
       "image": image.asset->url,
      name,
      price,
      slug}`

    export const productQuery = `*[_type == 'product' && slug.current == $slug][0]{
      _id,
      "image": image.asset->url,
      name,
      price,
      "slug" : slug.current,
      "description": description,
      "features": features,
      "dimensions": dimensions,
      "category": category.name,
      "tags": tags
    }`

    export const searchQuery = `*[_type == 'product' && (
      name match $search || description match $search
    )]{
      _id,
      "image": image.asset->url,
      name,
      price,
      slug
    }`

    export const cartQuery = `*[_type == 'cartItem' && references(^._id)] {
      _id,
      quantity,
      "product": product._id,
      "productName": product.name,
      "productPrice": product.price
    }`

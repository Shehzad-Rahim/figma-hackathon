interface Products {
    slug : string
    title : string
    content: Content[]
}
interface Content {
    type: string
    value: string
    
}

export const products : Products[] = [
    {
        slug : 'product1',
        title: 'The Dandy Chair',
        content: [
            
            {type: 'mainImage' , value: '/New Caramics/1.png'},
            {type: 'heading' , value : 'The Dandy Chair'},
            {type: 'price' , value : '$250'},
            {type: 'desc' , value : 'Description' },
            {type: 'paragraph' , value : 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.' },
            {type: 'list' , value : 'Premium material'},
            {type: 'list' , value : 'Handmade upholstery'},
            {type: 'list' , value : 'Quality timeless classic'},
            
        ]
    },
    {
        slug : 'product2',
        title: 'Rustic Vase Set',
        content: [
            
            {type: 'mainImage' , value: '/New Caramics/2.png'},
            {type: 'heading' , value : 'Rustic Vase Set'},
            {type: 'price' , value : '$155'},
            {type: 'desc' , value : 'Description' },
            {type: 'paragraph' , value : 'A Trio Pots set of ceramics, with premium materials features and clean clay' },
            {type: 'list' , value : 'Premium material'},
            {type: 'list' , value : 'Handmade upholstery'},
            {type: 'list' , value : 'Quality timeless classic'},
            
        ]
    },
    {
        slug : 'product3',
        title: 'The Silky Vase',
        content: [
            
            {type: 'mainImage' , value: '/New Caramics/3.png'},
            {type: 'heading' , value : 'The Silky Vase'},
            {type: 'price' , value : '$250'},
            {type: 'desc' , value : 'Description' },
            {type: 'paragraph' , value : 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.' },
            {type: 'list' , value : 'Premium material'},
            {type: 'list' , value : 'Handmade upholstery'},
            {type: 'list' , value : 'Quality timeless classic'},
            
        ]
    },
    {
        slug : 'product4',
        title: 'The Lucky Lamp',
        content: [
            
            {type: 'mainImage' , value: '/New Caramics/4.png'},
            {type: 'heading' , value : 'The Lucky Lamp'},
            {type: 'price' , value : '$250'},
            {type: 'desc' , value : 'Description' },
            {type: 'paragraph' , value : 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.' },
            {type: 'list' , value : 'Premium material'},
            {type: 'list' , value : 'Handmade upholstery'},
            {type: 'list' , value : 'Quality timeless classic'},
            
        ]
    },
]
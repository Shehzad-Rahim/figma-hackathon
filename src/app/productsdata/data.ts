
interface Products {
    id : number
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
        id : 1,
        slug : 'the-dandy-chair',
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
        id : 2,
        slug : 'rustic-vase-set',
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
        id : 3,
        slug : 'the-silky-vase',
        title: 'The Silky Vase',
        content: [
            
            {type: 'mainImage' , value: '/New Caramics/3.png'},
            {type: 'heading' , value : 'The Silky Vase'},
            {type: 'price' , value : '$125'},
            {type: 'desc' , value : 'Description' },
            {type: 'paragraph' , value : 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.' },
            {type: 'list' , value : 'Premium material'},
            {type: 'list' , value : 'Handmade upholstery'},
            {type: 'list' , value : 'Quality timeless classic'},
            
        ]
    },
    {
        id : 4,
        slug : 'the-lucy-lamp',
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
    {
        id : 5,
        slug : 'sofa-suede',
        title: 'Sofa Suede',
        content: [
            
            {type: 'mainImage' , value: '/popular products/1.png'},
            {type: 'heading' , value : 'Sofa Suede'},
            {type: 'price' , value : '$1200'},
            {type: 'desc' , value : 'Description' },
            {type: 'paragraph' , value : 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The Sofa Suede is perfect for any stylish living space with beech legs and lambskin leather upholstery.' },
            {type: 'list' , value : 'Premium material'},
            {type: 'list' , value : 'Handmade upholstery'},
            {type: 'list' , value : 'Quality timeless classic'},
            
        ]
    },
    {
        id : 6,
        slug : 'the-dandy-chair-grey',
        title: 'The Dandy Chair',
        content: [
            
            {type: 'mainImage' , value: '/popular products/2.png'},
            {type: 'heading' , value : 'The Dandy Chair'},
            {type: 'price' , value : '$300'},
            {type: 'desc' , value : 'Description' },
            {type: 'paragraph' , value : 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.' },
            {type: 'list' , value : 'Premium material'},
            {type: 'list' , value : 'Handmade upholstery'},
            {type: 'list' , value : 'Quality timeless classic'},
            
        ]
    },
]



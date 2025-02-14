
export const orders = {
    name : 'orders',
    type : 'document',
    title : 'Orders',
    fields : [
        {
            name : 'firstName',
            title : 'First Name',
            type :'string'
        },
        {
            name : 'lastName',
            title : 'Last Name',
            type :'string'
        },
        {
            name : 'address',
            title : 'Address',
            type :'string'
        },
        {
            name : 'city',
            title : 'City',
            type :'string'
        },
        {
            name : 'zipCode',
            title : 'Zip Code',
            type :'string'
        },
        {
            name : 'phone',
            title : 'Phone',
            type :'string'
        },
        {
            name : 'email',
            title : 'Email',
            type :'string'
        },
        {
            name : 'discount',
            type : 'number', 
            title : 'Discount',
           },
        {
            name : 'cartItems',
            title : 'Cart Items',
            type : 'array',
            of : [{ type : 'reference', to : { type : 'product' } }]
        },
        {
            name : 'total',
            title : 'Total',
            type : 'number'
        },
        {
            name : 'status',
            title : 'Order Status',
            type :'string',
            options : {
                list : [
                    { title : 'Pending', value : 'pending' },
                    { title : 'Success', value :'success' },
                    { title : 'Dispatch', value : 'dispatch' },
                ],
                layout : 'radio' // Optionally, change to 'dropdown' if you prefer a dropdown
            },
            initialValue : 'pending' // Default value
        },
        {
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
            description: 'The date and time when the order was placed',
            options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm:ss',
              calendarTodayLabel: 'Today',
            },
          },
    ]
}
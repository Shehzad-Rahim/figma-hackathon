import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './category'
import { order } from './order'
import { orderItem } from './orderItem'
import { user } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , Category, user, order, orderItem],
}

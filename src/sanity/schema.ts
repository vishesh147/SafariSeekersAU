import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import product from './schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, blockContent],
}

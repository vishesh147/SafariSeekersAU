import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import product from './schemas/product'
import testimonials from './schemas/testimonials'
import galleryImage from './schemas/gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, galleryImage, testimonials, blockContent],
}

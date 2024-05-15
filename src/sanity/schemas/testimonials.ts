import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        defineField({
          name: 'author',
          title: 'Author',
          type: 'string'
        }),
        defineField({
            name: 'product',
            title: 'Product',
            type: 'string'
        }),
        defineField({
            name: 'stars',
            title: 'Star Rating',
            type: 'number'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text'
        }),
    ],
    preview: {
        select: {
          title: 'author',
        },
    },
})
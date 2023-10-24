import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'galleryImage',
    title: 'Gallery Images',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image'
        }),
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image',
        },
    }
})
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug'
    }),
    defineField({
      name: 'isAccessory',
      title: 'Is this an Accessory ?',
      type: 'boolean'
    }),
    defineField({
      name: 'shopifyLink',
      title: 'Shopify Link',
      type: 'url'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    }),
    defineField({
      name: 'subTagline',
      title: 'Sub Tagline',
      type: 'string'
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text'
        }
      ]
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text'
        }
      ]
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Feature Category Title',
            type: 'string'
          },
          {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                  },
                  {
                    name: 'description',
                    title: 'Feature Description',
                    type: 'text'
                  }
                ]
              }
            ]
          }
        ],
      }]
    }),
    defineField({
      name: 'includedAccessories',
      title: 'Included Accessories',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string'
        },
        {
          name: 'accessories',
          title: 'Accessories',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text'
              }
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'optionalAccessories',
      title: 'Optional Accessories',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string'
        },
        {
          name: 'accessories',
          title: 'Accessories',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text'
              }
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'compactSpecs',
      title: 'Compact Specifications',
      type: 'object',
      fields: [
        {
          name: 'specList',
          title: 'Specification List',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'spec',
                title: 'Specification',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text'
              }
            ]
          }]
        },
        {
          name: 'includedAccessoryList',
          title: 'Included Accessory List',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
          name: 'optionalAccessoryList',
          title: 'Optional Accessory List',
          type: 'array',
          of: [{type: 'string'}]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})

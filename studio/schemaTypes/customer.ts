import {defineField, defineType} from 'sanity'
import { MdSentimentSatisfiedAlt } from 'react-icons/md'

export default defineType({
  name: 'customer',
  type: 'document',
  title: 'Customer',
  icon: MdSentimentSatisfiedAlt,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name'
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo'
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description'
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured'
    })
  ]
})

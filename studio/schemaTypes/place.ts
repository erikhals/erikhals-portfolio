import {defineField, defineType} from 'sanity'
import { MdStore } from 'react-icons/md'

export default defineType( {
  name: 'place',
  type: 'document',
  title: 'Place',
  icon: MdStore,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
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
    })
  ]
})

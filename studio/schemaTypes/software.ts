import {defineField, defineType} from 'sanity'
import { MdComputer } from 'react-icons/md'

export default defineType( {
  name: 'software',
  type: 'document',
  title: 'Software',
  icon: MdComputer,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'developer',
      type: 'string',
      title: 'Developer'
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
      name: 'link',
      type: 'url',
      title: 'Url'
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
    })
  ]
})

import { MdComputer } from 'react-icons/md'

export default {
  name: 'software',
  type: 'document',
  title: 'Software',
  icon: MdComputer,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'developer',
      type: 'string',
      title: 'Developer'
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'link',
      type: 'url',
      title: 'Url'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' }
    },
    { name: 'featured', title: 'Featured', type: 'boolean' }
  ]
}

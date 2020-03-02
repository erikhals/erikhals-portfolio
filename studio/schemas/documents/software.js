import MdComputer from 'react-icons/lib/md/computer'

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
      name: 'logo',
      type: 'image',
      title: 'Logo'
    }
  ]
}

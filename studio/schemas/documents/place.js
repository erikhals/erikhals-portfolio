import MdStore from 'react-icons/lib/md/store'

export default {
  name: 'place',
  type: 'document',
  title: 'Place',
  icon: MdStore,
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
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}

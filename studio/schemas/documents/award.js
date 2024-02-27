import { MdOutlineEmojiEvents } from 'react-icons/md'

export default {
  name: 'award',
  type: 'document',
  title: 'Award',
  icon: MdOutlineEmojiEvents,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'award',
      type: 'string',
      title: 'Award'
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Symbol'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}

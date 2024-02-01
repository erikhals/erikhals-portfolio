import { MdOutlineEmojiEmotions } from "react-icons/md"

export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    icon: MdStore,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
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
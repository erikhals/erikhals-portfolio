import {defineField, defineType} from 'sanity'
import { MdOutlineEmojiEvents } from 'react-icons/md'

export default defineType({
  name: 'award',
  type: 'document',
  title: 'Award',
  icon: MdOutlineEmojiEvents,
  fields: [
    defineField ({
        name: 'name',
        type: 'string',
        title: 'Name'
      }
    ),
    defineField({
      name: 'award',
      type: 'string',
      title: 'Award'
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Symbol'
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description'
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}) 

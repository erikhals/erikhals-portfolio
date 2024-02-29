import {defineField, defineType} from 'sanity'
import { MdLightbulb } from 'react-icons/md'

export default defineType( {
  name: 'skill',
  type: 'document',
  title: 'Skill',
  icon: MdLightbulb,
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

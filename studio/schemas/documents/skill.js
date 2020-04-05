import MdLightbulb from 'react-icons/lib/md/lightbulb-outline'

export default {
  name: 'skill',
  type: 'document',
  title: 'Skill',
  icon: MdLightbulb,
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

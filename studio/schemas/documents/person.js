import MdPerson from 'react-icons/lib/md/person'

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bioPortableText'
    },
    {
      name: 'showreel',
      title: 'Showreel',
      type: 'mux.video'
    },
    {
      name: 'homeImage',
      type: 'image',
      title: 'Home Background',
      options: { metadata: ['lqip'] }
    },
    {
      name: 'workImage',
      type: 'image',
      title: 'Work Background',
      options: { metadata: ['lqip'] }
    },
    {
      name: 'aboutImage',
      type: 'image',
      title: 'About Background',
      options: { metadata: ['lqip'] }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}

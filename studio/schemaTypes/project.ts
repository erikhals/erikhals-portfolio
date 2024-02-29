import {defineField, defineType} from 'sanity'
import { format, parseISO } from 'date-fns'
import { MdInsertDriveFile } from 'react-icons/md'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: MdInsertDriveFile,
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: Rule => Rule.error('You have to choose a category.').required()
    }),
    defineField({
      name: 'forClient',
      title: 'Client',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'customer' } }]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simplePortableText'
    }),
    /*     {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{type: 'projectMember'}]
    }, */
    defineField({
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime'
    }),
    defineField({
      name: 'endedAt',
      title: 'Ended at',
      type: 'datetime'
    }),
    defineField({
      name: 'videoLink',
      title: 'Video Link',
      type: 'url'
    }),
    defineField({
      title: 'Video file',
      name: 'video',
      type: 'mux.video'
    }),
    defineField({
      name: 'places',
      title: 'Places',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'place' } }]
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    }),
    defineField({
      name: 'softwares',
      title: 'Softwares',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'software' } }]
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'award' } }]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }]
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(parseISO(publishedAt), 'yyyy/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
})

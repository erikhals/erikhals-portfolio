import {defineField, defineType} from 'sanity'
import { format } from 'date-fns'
import { MdSchool } from 'react-icons/md'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: MdSchool,
  fields: [
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
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    }),
    defineField({
      name: 'places',
      title: 'Institutions',
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
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
})

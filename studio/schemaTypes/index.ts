// Document types
import place from './place'
import skill from './skill'
import person from './person'
import project from './project'
import education from './education'
import siteSettings from './siteSettings'
import category from './category'
import software from './software'
import customer from './customer'
import award from './award'

// Object types
import bioPortableText from './bioPortableText'
import figure from './figure'
import projectMember from './projectMember'
import projectPortableText from './projectPortableText'
import simplePortableText from './simplePortableText'
import youtube from './youtube'

import blockContent from './blockContent'
import post from './post'

export const schemaTypes = [
   // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  bioPortableText,
  figure,
  projectMember,
  projectPortableText,
  simplePortableText,
  youtube,
  // The following are document types which will appear
  // in the studio.
  place,
  skill,
  person,
  project,
  education,
  siteSettings,
  category,
  software,
  customer,
  award
]

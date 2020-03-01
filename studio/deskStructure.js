import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'

const hiddenDocTypes = listItem =>
  !['place', 'person', 'project', 'siteSettings', 'skill'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Bio')
        .schemaType('person')
        .child(S.editor()
          .id('181f87e2-d4bf-45d6-afdb-9ce2b3afccdf')
          .schemaType('person')
          .documentId('181f87e2-d4bf-45d6-afdb-9ce2b3afccdf')
        ),
      S.listItem()
        .title('Places')
        .schemaType('place')
        .child(S.documentTypeList('place').title('Places')),
      S.listItem()
        .title('Skills')
        .schemaType('skill')
        .child(S.documentTypeList('skill').title('Skills')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

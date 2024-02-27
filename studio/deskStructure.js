import { MdSettings } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  ![
    'place',
    'person',
    'project',
    'education',
    'siteSettings',
    'skill',
    'category',
    'software',
    'customer',
    'award'
  ].includes(listItem.getId())

export default S =>
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
        .title('Bio')
        .schemaType('person')
        .child(
          S.editor()
            .id('181f87e2-d4bf-45d6-afdb-9ce2b3afccdf')
            .schemaType('person')
            .documentId('181f87e2-d4bf-45d6-afdb-9ce2b3afccdf')
        ),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Education')
        .schemaType('education')
        .child(S.documentTypeList('education').title('Education')),
      S.listItem()
        .title('Places')
        .schemaType('place')
        .child(S.documentTypeList('place').title('Places')),
      S.listItem()
        .title('Skills')
        .schemaType('skill')
        .child(S.documentTypeList('skill').title('Skills')),
      S.listItem()
        .title('Softwares')
        .schemaType('software')
        .child(S.documentTypeList('software').title('Softwares')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Customers')
        .schemaType('customer')
        .child(S.documentTypeList('customer').title('Customers')),
      S.listItem()
        .title('Awards')
        .schemaType('award')
        .child(S.documentTypeList('award').title('Awards')),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

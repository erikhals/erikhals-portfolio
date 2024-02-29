import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { muxInput } from 'sanity-plugin-mux-input'
import {schemaTypes} from './schemaTypes'
import deskStructure from './deskStructure'
import { dashboardTool, projectInfoWidget, projectUsersWidget } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'

export default defineConfig({
  name: 'default',
  title: 'Erik Hals Portfolio',

  projectId: 'oxkz69uk',
  dataset: 'production',

  plugins: [
    visionTool(), 
    muxInput(),
    dashboardTool({
      widgets: [
        projectUsersWidget({
          layout: { height: 'auto' }
        }),
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              buildHookId: '5e5b8c9f87d36e9c97fe63e6',
              title: 'Sanity Studio',
              name: 'erikhals-portfolio-studio',
              apiId: 'c9a91bb3-1ccd-40b8-b6c3-49e7a77fe5dc'
            },
            {
              buildHookId: '5e5b8c9fd2a604d803094bd2',
              title: 'Portfolio Website',
              name: 'erikhals-portfolio',
              apiId: 'f959a6b3-43f0-42f5-beca-93d055b0aaf4'
            }
          ]
        })
      ]
    }),
    structureTool({
      structure: deskStructure
    }),
    ],

  schema: {
    types: schemaTypes,
  }
})

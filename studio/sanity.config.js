import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { muxInput } from 'sanity-plugin-mux-input'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { Logo } from '/plugins/my-studio-logo/Logo'
import { dashboardTool, projectInfoWidget, projectUsersWidget } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'

export default defineConfig({
  title: 'Erik Hals Portfolio',
  projectId: 'oxkz69uk',
  dataset: 'production',
  plugins: [
    dashboardTool({
      widgets: [
        projectInfoWidget({
          data: [
            {
              title: 'GitHub repo',
              value: 'https://github.com/erikhals/erikhals-portfolio',
              category: 'Code'
            },
            {
              title: 'Frontend',
              value: 'https://erikhals-portfolio.netlify.com',
              category: 'apps'
            }
          ]
        }),
        projectUsersWidget({
          layout: { height: 'auto' }
        }),
        documentListWidget({
          name: 'document-list',
          options: { title: 'Recent projects', order: '_createdAt desc', types: ['project'] },
          layout: { width: 'medium' }
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
    visionTool(),
    muxInput()
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas
  },
  studio: {
    components: {
      logo: Logo
    }
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(templateItem => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action))
      }
      return prev
    }
  }
})

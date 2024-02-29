export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
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
            }
          }
        ],
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
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent projects', order: '_createdAt desc', types: ['project'] },
      layout: { width: 'medium' }
    }
  ]
}

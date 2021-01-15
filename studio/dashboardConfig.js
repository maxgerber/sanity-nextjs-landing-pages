export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '600177ca0c48c3fab902db72',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ygdhepbc',
                  apiId: 'a091bafc-d9df-4408-b006-4b731adeda13'
                },
                {
                  buildHookId: '600177cb14eaf3f136ab8093',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q26xbncu',
                  apiId: '4c2e554a-a00b-4860-bd1d-9b1239f5721f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxgerber/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q26xbncu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

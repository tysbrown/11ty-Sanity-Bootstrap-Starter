export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f9b4efd44768d46cf4152aa',
                  title: 'Sanity Studio',
                  name: 'blog-with-eleventy-studio',
                  apiId: '44ea3218-212d-4392-8945-c4ed2bbdb42b'
                },
                {
                  buildHookId: '5f9b4efd962ce635b07cf0d3',
                  title: 'Blog Website',
                  name: 'blog-with-eleventy',
                  apiId: '27f4c5c5-ca4c-4e88-a818-dcf410062da4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tysbrown/blog-with-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-with-eleventy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

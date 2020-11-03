export default {
  title: 'About Page',
  name: 'about',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      type: 'pagePortableText',
      title: 'Body',
      validation: Rule => Rule.required()
    },
    {
      name: 'image1',
      type: 'mainImage',
      title: 'Image 1'
    }
  ]
}

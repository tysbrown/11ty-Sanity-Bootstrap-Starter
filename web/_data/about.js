const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePage (about) {
  return {
    ...about,
    body: BlocksToMarkdown(about.body, { serializers, ...client.config() })
  }
}

async function getAbout () {
  const filter = groq`*[_type == "about"]`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const abouts = docs.map(generatePage)
  const reducedPage = overlayDrafts(hasToken, abouts)
  console.log(reducedPage, reducedPage.body)
  return reducedPage[0]
}

module.exports = getAbout

# 11ty-Sanity-Bootstrap-Starter
Barebones starter template for 11ty, Sanity Studio, and Bootstrap 4. Requires Node to get set up with npm.

## About
- 11ty frontend lives in the /web directory
- Sanity Studio lives in the /studio directory
- Sass/Bootstrap overrides are in /web/custom.scss
- Interior pages are added to the /web directory in .njk format (or whichever templating language you prefer).
- GROQ queries live in the /web/\_data directory, to pass data into a page simply name it after the page: `pagename.js`

## Installation
You'll need to paste your Sanity Studio's `projectId` and `dataset` (available in your project at [`manage.sanity.io`](https://manage.sanity.io)) in two locations:

1) studio/sanity.json
2) web/src/util/client.js

To install dependencies run `npm install` on the root directory.

To develop locally, run `npm run dev` on the root directory. The starter uses Lerna to run both the frontend and the studio simultaneously for local development. You can also run `npm run dev` on either the /web or /studio directories to run one without the other.

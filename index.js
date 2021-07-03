const Metalsmith  = require('metalsmith');
const markdown    = require('metalsmith-markdown');
const layouts     = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const makebook    = require('./custom_modules/metalsmith-ebook')

Metalsmith(__dirname)
  .metadata({
    title: "File-Name"
  })
  .source('./src/blinkist/en/daily/')
  .destination('./src/blinkist/en/daily/format/')
  .clean(true)
  .use(collections({
    chapters: {
      pattern: '*.md'
    }
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(makebook({
    title: "Book Title",
    author: "Author Name",
    pdf: {
      "format": "letter",
      "orientation": "portrait"
    }
  }))
  .build(function(err) {
      if (err) {
	      console.log(err)
        throw err;
      }
  });

const Metalsmith  = require('metalsmith');
const markdown    = require('metalsmith-markdown');
const layouts     = require('metalsmith-layouts');
const makebook    = require('./custom_modules/metalsmith-ebook')

Metalsmith(__dirname)
  .metadata({
    title: "file name"
  })
  .source('./src/blinkist/en/daily/')
  .destination('./src/blinkist/en/daily/format/')
  .clean(true)
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

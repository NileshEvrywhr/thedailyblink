const Metalsmith  = require('metalsmith');
const markdown    = require('metalsmith-markdown');
const layouts     = require('metalsmith-layouts');
const pdf         = require('metalsmith-pdf');

Metalsmith(__dirname)
  .source('src')
  .destination('dst')
  .clean(true)
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(pdf({
    pattern: "**/*.html",
    printMediaType: true,
    pageSize: "letter"
  }))
  .build(function(err, files) {
      if (err) { 
        throw err; 
      }
  });
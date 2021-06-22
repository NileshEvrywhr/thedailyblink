const Metalsmith  = require('metalsmith');
const markdown    = require('metalsmith-markdown');
const layouts     = require('metalsmith-layouts');
const pdf         = require('metalsmith-pdf');

Metalsmith(__dirname)
  .source('/home/ubuntu/blinkist/en/daily/')
  .destination('/home/ubuntu/legendary-literate/static/en/daily/')
  .clean(false)
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
	console.log(err)
        throw err;
      }
  });

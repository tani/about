module.exports = function(eleventyConfig) {
  const md = require("markdown-it")({
    html: true,
    typographer: true
  }).use(require('markdown-it-pfm'))
  eleventyConfig.setLibrary("md", md)
}

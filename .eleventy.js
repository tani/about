module.exports = function(eleventyConfig) {
  const md = require("markdown-it")({
    html: true,
    typographer: true
  })
  eleventyConfig.setLibrary("md", md)
}

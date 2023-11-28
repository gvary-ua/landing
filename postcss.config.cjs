/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./*.html']
    })
  ]
}

module.exports = config
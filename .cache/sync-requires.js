const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/zhouwei/githubnew/Gatsby-Violin-School/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/zhouwei/githubnew/Gatsby-Violin-School/src/pages/404.jsx"))),
  "component---src-pages-contact-jsx": hot(preferDefault(require("/Users/zhouwei/githubnew/Gatsby-Violin-School/src/pages/contact.jsx"))),
  "component---src-pages-course-jsx": hot(preferDefault(require("/Users/zhouwei/githubnew/Gatsby-Violin-School/src/pages/course.jsx"))),
  "component---src-pages-gallery-jsx": hot(preferDefault(require("/Users/zhouwei/githubnew/Gatsby-Violin-School/src/pages/gallery.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/zhouwei/githubnew/Gatsby-Violin-School/src/pages/index.jsx")))
}


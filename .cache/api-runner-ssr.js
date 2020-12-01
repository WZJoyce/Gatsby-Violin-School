var plugins = [{
      plugin: require('/Users/zhouwei/githubnew/Gatsby-Violin-School/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[],"maxWidth":1000,"linkImagesToOriginal":false},
    },{
      plugin: require('/Users/zhouwei/githubnew/Gatsby-Violin-School/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  filter: { frontmatter: { type: { eq: \"post\" } } published: { eq: true }}\n                  sort: { order: DESC, fields: [frontmatter___date] }\n                ) {\n                  edges {\n                    node {\n                      fields { slug }\n                      html\n                      frontmatter {\n                        title\n                        author\n                        date\n                        \n                        excerpt\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"RSS Feed"}]},
    },{
      plugin: require('/Users/zhouwei/githubnew/Gatsby-Violin-School/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/zhouwei/githubnew/Gatsby-Violin-School/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/zhouwei/githubnew/Gatsby-Violin-School/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Gatsby Violin School","short_name":"Voyager","start_url":"/","background_color":"#fff","theme_color":"#9c7c38","display":"minimal-ui","icon":"static/images/logo.jpg","include_favicon":false},
    },{
      plugin: require('/Users/zhouwei/githubnew/Gatsby-Violin-School/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"precachePages":["","/blog","/about"]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

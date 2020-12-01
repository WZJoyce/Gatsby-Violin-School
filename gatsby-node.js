const path = require("path")

const { GraphQLBoolean } = require("gatsby/graphql")

// Add `published` property to MarkdownRemark nodes to indicate if this markdown is to be published.
module.exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if ("MarkdownRemark" === type.name) {
    return {
      published: {
        type: GraphQLBoolean,
        resolve: ({ frontmatter }) => {
          // Always set `published` field to true when not in production mode
          // or if frontmatter.draft is not set.
          if (
            process.env.NODE_ENV !== "production" ||
            frontmatter.draft == undefined
          ) {
            return true
          }

          return !frontmatter.draft
        },
      },
    }
  }
  return {}
}

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // For all "MarkdownRemark" nodes of type "post", add a slug to the node based
  // on the filename
  if (node.internal.type === "MarkdownRemark") {
    if (node.frontmatter.type === "post") {
      const slug = path.basename(node.fileAbsolutePath, ".md")

      createNodeField({
        node,
        name: "slug",
        value: slug,
      })
    }
  }
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SiteSiteMetadata implements Node {
      social: String
    }
  `
  createTypes(typeDefs)
}

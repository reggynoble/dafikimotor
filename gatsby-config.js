require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Entire Motors",
    description:
        "Quality Pre-owned auto at affordable prices",
    author: "@reggynoble",
    data: {
      name: "Dan and Mike",
      email: "reggy@noble",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["spaceId", "accessToken"]
      },
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
  ],
}

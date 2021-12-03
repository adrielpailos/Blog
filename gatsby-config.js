module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blog",
  },
  plugins: ["gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "blogdata",
        fieldName: "blogdata",
        url:
          "https://api-us-east-1.graphcms.com/v2/ckwdmhdtc078d01xp24uo6bto/master"
      }
    }
  ],
};

module.exports = {
    siteMetadata: {
        title: `Pandas eating lots`,
        description: 'Pandas are pandas'
      },    
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-netlify-cms`,
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }
module.exports = {
    siteMetadata: {
        title: `Oliver Meredith`,
        description: 'A front-end developer that’s curious about user experiences. ',
        github: `https://github.com/OajMeredith23`
      },    
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src`,
        },
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 560,
              },
            },
          ],
        },
      },
      `gatsby-plugin-emotion`,
      `gatsby-plugin-netlify-cms`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }
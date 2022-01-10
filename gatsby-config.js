module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.thebasicsproject.com',
    title: 'the-basics-project',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-XB9CMXQPHZ',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Archivo:400,700'],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'socialImages',
        path: `${__dirname}/src/images/social`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};

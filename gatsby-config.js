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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Basics Project Foundation',
        short_name: 'TBP',
        start_url: '/',
        icon: 'src/images/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
  ],
};

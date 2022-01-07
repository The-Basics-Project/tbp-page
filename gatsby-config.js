module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "the-basics-project",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-XB9CMXQPHZ",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};

module.exports = {
  siteMetadata: {
    title: "Team Horizon",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/icon.png`,
      },
    },
  ],
};

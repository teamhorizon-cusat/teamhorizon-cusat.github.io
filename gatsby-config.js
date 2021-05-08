module.exports = {
  siteMetadata: {
    title: "Team Horizon",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,// Needed for dynamic images
    `gatsby-plugin-fontawesome-css`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-plugin-smoothscroll`
  ],
};

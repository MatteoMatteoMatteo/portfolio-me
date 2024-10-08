module.exports = {
  siteMetadata: {
    title: `Canvai's Portfolio`,
    description: `A portfolio for my apps, games, videos and music`,
    author: `Canvai`,
  },
  plugins: [
    'gatsby-plugin-emotion',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ' ',
        short_name: 'mp',
        start_url: `/`,
        background_color: `#88bdbc`,
        theme_color: `#88bdbc`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};

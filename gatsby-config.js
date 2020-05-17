module.exports = {
  siteMetadata: {
    title: "Maxime Bonin | Homepage",
    author: "Maxime Bonin",
    description: "page perso développée en empruntant un thème HTML5"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Maxime Bonin Homepage',
        short_name: 'homepage',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-preload-fonts'
  ],
}

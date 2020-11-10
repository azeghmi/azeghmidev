module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // {
    //   plugins: [
    //     {
    //       resolve: `gatsby-plugin-manifest`,
    //       options: {
    //         name: 'GatsbyJS',
    //         short_name: 'GatsbyJS',
    //         start_url: '/',
    //         background_color: '#6b37bf',
    //         theme_color: '#6b37bf',
    //         // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //         // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //         display: 'standalone',
    //         icon: 'src/images/icon.png', // This path is relative to the root of the site.
    //         // An optional attribute which provides support for CORS check.
    //         // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    //         // Any invalid keyword or empty string defaults to `anonymous`
    //         crossOrigin: `use-credentials`,
    //       },
    //     },
    //   ],
    // },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // whitelist: ['whitelist'], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //     // printRejected: true
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    // `gatsby-plugin-no-javascript`,
  ],
};

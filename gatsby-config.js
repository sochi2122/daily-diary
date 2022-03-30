
module.exports = {
  siteMetadata: {
    title: `Daily Diary`,
    siteUrl: `https://dailydiarymaster.gatsbyjs.io/'`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      }, 
      {
        name:'work',
        link:'/work'
      },
      {
        name:'freebies',
        link:'/freebies'
      },

      {
        name:'mining',
        link:'/mining'
     },
                 ]
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "oYzE-gDP1t4NAwjQKWOzyq7L2NOUzKYRpnDSWFOLlDI",
      "spaceId": "bkxacgeooq0l"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
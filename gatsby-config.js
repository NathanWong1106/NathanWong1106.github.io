module.exports = {
  siteMetadata: {
    siteUrl: "https://nathanwong1106.github.io/",
    title: "Nathan-Portfolio",
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/mdx-sections/",
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Nathan Wong',
        icon: "src/images/Logo.png"
      }
    },
  ],
};

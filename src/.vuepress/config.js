const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: "Pixels & Bits – Kamicrafted Blog",
  dest: "./public",
  themeConfig: {
    // repo: 'https://wwww.github.com',
    // repoLabel: 'Repo',
    editLinks: false,
    editLinkText: "Found a bug? Help me improve this page!",
    nav: [
      // { text: 'Home', link: '/' },
      // { text: "Posts", link: "/blog/" },
      // { text: "Photos", link: "/photos/" },
      { text: "Archive", link: "/archive/" },
      { text: "RSS", link: "/rss.xml" }
    ],
    logo: "/logo-pixelsnbits.svg",
    docsDir: "src",
    pageSize: 2,
    startPage: 0
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-179348-4" // UA-00000000-0
      }
    ],
    [
      "vuepress-plugin-rss",
      {
        base_url: "/",
        site_url: "https://blog.kamicrafted.com",
        filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
        count: 20
      }
    ],
    "vuepress-plugin-reading-time",
    "vuepress-plugin-janitor",
    "feather-icons"
  ],
  head: [
    [
      "link",
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon.png" }
    ],
    ["link", { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#FF3E6C" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#FF3E6C" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ]
};

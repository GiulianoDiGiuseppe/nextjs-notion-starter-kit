import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '0eb12f40390c431797a9d6263fe7ac74',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Giuliano Di Giuseppe',
  domain: 'digigiu.it',
  author: 'Giuliano Di Giuseppe & Travis Fischer',

  // open graph metadata (optional)
  description: 'This is my personal website',

  // social usernames (optional)
  //twitter: 'transitive_bs',
  github: 'GiulianoDiGiuseppe',
  linkedin: 'giuliano-di-giuseppe-10005a1ba',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': 'f63d6e41d3054861998ad3e7840403f3&pvs'
  // }
  pageUrlOverrides: null,


  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '0eb12f40390c431797a9d6263fe7ac74'
    },
    {
      title: 'Projects',
      pageId: '4a9eff6ddd6546e6b08801556d7db2fd'
    },
    {
      title: 'CV',
      pageId: '4708821e1c8f462e858e374076d3e18c'
    },
    {
      title: 'Contact',
      pageId: 'a38ae3d61a7d4cf5a6442615f37f0538'
    }
  ]
})

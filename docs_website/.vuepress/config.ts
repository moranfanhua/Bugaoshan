import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

import { genNavigationComponents } from './navigation/genNavigationComponents'

// 自动扫描内容目录生成导航栏与侧边栏
const { navbar, collections } = genNavigationComponents()

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '不高山上 · Bugaoshan',
  description: '川大学生专属校园助手',

  locales: {
    // 默认（中文）语言。以后要加其他语言，仿照此项添加 /en-us/ 等条目，
    // 并把对应内容放到 en-us/ 目录，然后调整 genNavigationComponents 的 baseDir。
    '/': {
      lang: 'zh-CN',
      title: '不高山上 · Bugaoshan',
      description: '川大学生专属校园助手',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  shouldPrefetch: false,

  theme: plumeTheme({
    // 站点地址，用于 editLink / sitemap 等
    hostname: 'https://github.com/The-Brotherhood-of-SCU/Bugaoshan',

    // 编辑此页链接，指向 Bugaoshan 仓库的 docs_website 目录
    docsRepo: 'The-Brotherhood-of-SCU/Bugaoshan',
    docsDir: '/docs_website',
    docsBranch: 'main',

    editLink: true,
    lastUpdated: false,
    contributors: false,
    changelog: false,

    cache: 'filesystem',

    logo: '/images/logo.png',
    appearance: true,

    aside: true,
    copyright: false,
    prevPage: true,
    nextPage: true,
    createTime: false,
    footer: false,

    autoFrontmatter: false,

    // 自动生成的导航（放 locale 配置里，与 MAA 的做法一致）
    locales: {
      '/': {
        navbar,
        collections,
      },
    },

    // 代码高亮：明亮/暗色双主题
    codeHighlighter: {
      themes: { light: 'snazzy-light', dark: 'night-owl' },
    },

    // Markdown 能力扩展
    markdown: {
      annotation: true,
      image: {
        lazyload: true,
        mark: true,
        size: true,
      },
      icon: { provider: 'iconify' },
      math: { type: 'katex' },
      // mermaid 图：代码块语言写 mermaid 即可渲染（需安装 mermaid 依赖）
      mermaid: true,
      bilibili: true,
    },

    // 站点搜索：Plume 主题默认自带本地搜索，无需额外配置。
    // 若需要改用 Algolia DocSearch，参考 MAA 的做法配置 search: { provider: 'algolia', appId, apiKey, indexName }。

    // 评论区：需配置 GitHub Discussions（Giscus）。目前保持关闭，需要时参考 MAA 配置：
    // comment: {
    //   provider: 'Giscus',
    //   repo: 'The-Brotherhood-of-SCU/Bugaoshan',
    //   repoId: '...',
    //   category: 'Comments',
    //   categoryId: '...',
    //   mapping: 'pathname',
    //   strict: false,
    //   lazyLoading: true,
    // },
  }),
})

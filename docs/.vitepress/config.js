import { defineConfig } from 'vitepress';
import { configLocalePtBr } from './locales/pt-br/config.js';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ORCSS',
  locales: {
    root: configLocalePtBr,
    // en: {
    //   label: 'English',
    //   lang: 'en',
    //   link: '/en/',
    //   themeConfig: {
    //     nav: [
    //       { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
    //       { text: 'Settings', link: '/settings/', activeMatch: '^/settings/' },
    //       { text: 'Help', link: '/help/', activeMatch: '^/help/' },
    //     ],
    //   },
    // },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/Hai-San/orcss/edit/main/docs/:path',
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Hai-San/orcss' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Samuel Martinenghi',
    },
  },
});

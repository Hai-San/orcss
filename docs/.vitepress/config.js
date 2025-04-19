import { defineConfig } from 'vitepress';

const globalHead = [
  ['meta', { name: 'author', content: 'Samuel Martinenghi' }],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' },
  ],
  [
    'link',
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' },
  ],
  [
    'link',
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' },
  ],
  ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
  ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
  ['meta', { name: 'msapplication-TileColor', content: '#f8f8f2' }],
  ['meta', { name: 'theme-color', content: '#282936' }],
  ['meta', { property: 'og:image', content: '/assets/og_image.jpg' }],
  [
    'script',
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-HJJJME2HLG',
      crossorigin: 'anonymous',
      async: true,
    },
  ],
  [
    'script',
    {},
    `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-HJJJME2HLG');
	`,
  ],
  [
    'script',
    {},
    `
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-NSSDFJC');
	`,
  ],
];

const descriptionPt =
  'ORCSS é um guia de CSS que mostra boas práticas para ter um CSS simples, organizado e escalável. Também mostra como preparar o CSS para funcionar com um Design System.';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ORCSS',
  description: descriptionPt,
  locales: {
    root: {
      label: 'Português',
      lang: 'pt-br',
      head: [
        ...globalHead,
        ['meta', { property: 'og:description', content: descriptionPt }],
        ['meta', { name: 'keywords', content: 'CSS, guia de CSS, design system' }],
      ],
      themeConfig: {
        outline: {
          label: 'Nesta Página',
        },
        editLink: {
          text: 'Edite essa página no GitHub',
        },
        lastUpdated: {
          text: 'Última atualização',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 2, 3],
    },
    editLink: {
      pattern: 'https://github.com/Hai-San/orcss/edit/main/docs/:path',
    },
    lastUpdated: {
      text: 'Última atualização',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    selectText: 'Idiomas',
    nav: [
      { text: 'Guia', link: '/guide/', activeMatch: '^/guide/' },
      { text: 'Configurações', link: '/settings/', activeMatch: '^/settings/' },
      { text: 'Ajuda', link: '/help/', activeMatch: '^/help/' },
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/settings/': getSettingsSidebar(),
      '/help/': getHelpSidebar(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Hai-San/orcss' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Samuel Martinenghi',
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página',
    },
  },
});

function getGuideSidebar() {
  return [
    {
      text: 'Sobre',
      collapsible: false,
      items: [{ text: 'Introdução', link: '/guide/' }],
    },
    {
      text: 'Categorização',
      items: [
        { text: 'Introdução', link: '/guide/categorization/' },
        { text: 'Páginas', link: '/guide/categorization/pages' },
        { text: 'Componentes', link: '/guide/categorization/components' },
        { text: 'Blocos', link: '/guide/categorization/blocks' },
        { text: 'Unidades', link: '/guide/categorization/units' },
        { text: 'Exemplo completo', link: '/guide/categorization/example' },
      ],
    },
    {
      text: 'Escrita',
      items: [
        { text: 'Introdução', link: '/guide/writing/' },
        { text: 'Nomenclatura', link: '/guide/writing/nomenclature' },
        { text: 'Aninhamento', link: '/guide/writing/nesting' },
        { text: 'Classes de customização', link: '/guide/writing/customization-classes' },
        { text: 'Classes de estado', link: '/guide/writing/status-classes' },
        { text: 'Estilos específicos', link: '/guide/writing/specific-styles' },
        { text: 'Classes javascript', link: '/guide/writing/javascript-classes' },
        { text: 'Tokens', link: '/guide/writing/tokens' },
        { text: 'Dicas', link: '/guide/writing/tips' },
      ],
    },
    {
      text: 'Estruturação',
      items: [
        { text: 'Introdução', link: '/guide/structuring/' },
        { text: 'Pastas', link: '/guide/structuring/folders' },
        { text: 'Tokens', link: '/guide/structuring/tokens' },
        { text: 'Tools', link: '/guide/structuring/tools' },
        { text: 'Snippets', link: '/guide/structuring/snippets' },
        { text: 'Utils', link: '/guide/structuring/utils' },
        { text: 'Components', link: '/guide/structuring/components' },
        { text: 'Pages', link: '/guide/structuring/pages' },
      ],
    },
  ];
}

function getSettingsSidebar() {
  return [
    {
      text: 'Configurações',
      items: [
        { text: 'Introdução', link: '/settings/' },
        { text: 'VSCode', link: '/settings/vscode' },
        { text: 'Stylelint', link: '/settings/stylelint' },
        { text: 'Stylelint Vue.js', link: '/settings/stylelint-vue' },
      ],
    },
  ];
}
function getHelpSidebar() {
  return [
    {
      text: 'Ajuda',
      items: [{ text: 'Início', link: '/help/' }],
    },
  ];
}

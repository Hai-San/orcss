import { headConfig } from '../../config-head.js';

export const description =
  'ORCSS é um guia de boas práticas para escrever CSS simples, organizado e escalável, ideal para projetos que utilizam Design System.';

export const configLocalePtBr = {
  label: 'Português',
  lang: 'pt-br',
  description,
  head: [
    ...headConfig,
    [
      'meta',
      {
        name: 'og:description',
        content: description,
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'CSS, guia de CSS, boas práticas de CSS, CSS escalável, design system, organização de CSS, metodologia CSS, estilo de código, frontend, UI design',
      },
    ],
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
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página',
    },
  },
};

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

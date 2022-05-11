module.exports = {
    base: '/',
    lang: 'pt-BR',
    title: 'ORCSS',
    description: 'ORCSS é um guia de CSS que ensina boas práticas para ter um CSS simples, organizado, escalável e preparado para o design system.',	
    lastUpdated: true,
    head: [
        [ 'meta', { name: 'keywords', content: 'CSS, guia de CSS, design system' } ],
        [ 'meta', { name: 'author', content: 'Samuel Martinenghi' } ],
        [ 'meta', { name: 'google-site-verification', content: 'ad1BJACkwbIZrTfLAF9lUw4rZ8quyp1ddioCEbE_3Xg' } ],
        [ 'link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' } ],
        [ 'link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' } ],
        [ 'link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' } ],
        [ 'meta', { name: 'msapplication-TileColor', content: '#f8f8f2' } ],
        [ 'meta', { name: 'theme-color', content: '#282936' } ]		
    ],
    themeConfig: {
        repo: 'Hai-San/orcss',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edite essa página no GitHub',
        lastUpdated: 'Última atualização',
        nav: [
            { text: 'Guia', link: '/guide/', activeMatch: '^/guide/' },
            { text: 'Configurações', link: '/settings/', activeMatch: '^/settings/' },
            { text: 'Ajuda', link: '/help/', activeMatch: '^/help/' }
        ],
        sidebar: {
            '/guide/': getGuideSidebar(),
            '/settings/': getSettingsSidebar(),
            '/help/': getHelpSidebar()
        }
    }
};

function getGuideSidebar() {
    return [
        {
            text: 'Sobre',
            link: '/guide/'
        },
        {
            text: 'Categorização',
            link: '/guide/categorization/',
            children: [
                { text: 'Páginas', link: '/guide/categorization/pages' },
                { text: 'Componentes', link: '/guide/categorization/components' },
                { text: 'Blocos', link: '/guide/categorization/blocks' },
                { text: 'Unidades', link: '/guide/categorization/units' },
                { text: 'Exemplo completo', link: '/guide/categorization/example' }
            ]
        },
        {
            text: 'Escrita',
            link: '/guide/writing/',
            children: [                
                { text: 'Nomenclatura', link: '/guide/writing/nomenclature' },
                { text: 'Aninhamento', link: '/guide/writing/nesting' },
                { text: 'Classes de customização', link: '/guide/writing/customization-classes' },
                { text: 'Condições', link: '/guide/writing/status' },
                { text: 'Estilos específicos', link: '/guide/writing/specific-styles' },
                { text: 'Classes javascript', link: '/guide/writing/javascript-classes' },
                { text: 'Tokens', link: '/guide/writing/tokens' },
                { text: 'Dicas', link: '/guide/writing/tips' }
            ]
        },
        {
            text: 'Estruturação',
            link: '/guide/structuring/',
            children: [
                { text: 'Pastas', link: '/guide/structuring/folders' },
                { text: 'Tokens', link: '/guide/structuring/tokens' },
                { text: 'Tools', link: '/guide/structuring/tools' },
                { text: 'Snippets', link: '/guide/structuring/snippets' },
                { text: 'Utils', link: '/guide/structuring/utils' },
                { text: 'Components', link: '/guide/structuring/components' },
                { text: 'Pages', link: '/guide/structuring/pages' }
            ]
        }
    ];
}

function getSettingsSidebar() {
    return [
        {
            text: 'Configurações',
            link: '/settings/',
            children: [
                { text: 'VSCode', link: '/settings/vscode' },
                { text: 'Stylelint', link: '/settings/stylelint' },
                { text: 'Stylelint Vue.js', link: '/settings/stylelint-vue' }
            ]
        }
    ];
}
function getHelpSidebar() {
    return [
        {
            text: 'Ajuda',
            link: '/help/'
        }
    ];
}
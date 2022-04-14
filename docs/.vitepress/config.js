module.exports = {
    base: '/',
    lang: 'pt-BR',
    title: 'ORCSS - O guia de CSS',
    description: 'ORCSS é um guia para deixar o CSS simples e escalável',	
    lastUpdated: true,
	
    themeConfig: {
        repo: 'Hai-San/orcss',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edite essa página no GitHub',
        lastUpdated: 'Última atualização',
        nav: [
            { text: 'Guia', link: '/guide/', activeMatch: '^/guide/' }
        ],
        sidebar: {
            '/guide/': getGuideSidebar()
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
            text: 'Iniciando',
            children: [
                {
                    text: 'Configurações',
                    link: '/guide/settings/',
                    children: [
                        { text: 'VSCode', link: '/guide/settings/vscode' },
                        { text: 'Stylelint', link: '/guide/settings/stylelint' },
                        { text: 'Stylelint Vue.js', link: '/guide/settings/stylelint-vue' }
                    ]
                }
            ]
        },
        {
            text: 'Categorização',
            link: '/guide/categorization/'
        },
        {
            text: 'Escrita',
            link: '/guide/writing/'
        },
        {
            text: 'Estruturação',
            children: [
                { text: 'Introdução', link: '/guide/structuring/' },
                { text: 'Tokens', link: '/guide/structuring/tokens' },
                { text: 'Tools', link: '/guide/structuring/tools' },
                { text: 'Utils', link: '/guide/structuring/utils' },
                { text: 'Components', link: '/guide/structuring/components' },
                { text: 'Pages', link: '/guide/structuring/pages' }
            ]
        }
    ];
}
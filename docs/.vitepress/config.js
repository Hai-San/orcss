module.exports = {
    base: '/',
    lang: 'pt-BR',
    title: 'ORCSS',
    description: 'Um guia CSS focado na simplicidade e escalabilidade',	
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
                { text: 'Dicas', link: '/guide/writing/tips' },
                { text: 'Nomenclatura', link: '/guide/writing/nomenclature' },
                { text: 'Aninhamento', link: '/guide/writing/nesting' },
                { text: 'Classes de customização', link: '/guide/writing/customization-classes' },
                { text: 'Condições', link: '/guide/writing/status' },
                { text: 'Estilos específicos', link: '/guide/writing/specific-styles' },
                { text: 'Classes javascript', link: '/guide/writing/javascript-classes' },
                { text: 'Tokens', link: '/guide/writing/tokens' }
            ]
        },
        {
            text: 'Estruturação',
            link: '/guide/structuring/',
            children: [
                { text: 'Pastas', link: '/guide/structuring/folders' },
                { text: 'Tokens', link: '/guide/structuring/tokens' },
                { text: 'Tools', link: '/guide/structuring/tools' },
                { text: 'Utils', link: '/guide/structuring/utils' },
                { text: 'Components', link: '/guide/structuring/components' },
                { text: 'Pages', link: '/guide/structuring/pages' }
            ]
        },
        {
            text: 'Configurações',
            link: '/guide/settings/',
            children: [
                { text: 'VSCode', link: '/guide/settings/vscode' },
                { text: 'Stylelint', link: '/guide/settings/stylelint' },
                { text: 'Stylelint Vue.js', link: '/guide/settings/stylelint-vue' }
            ]
        }
    ];
}
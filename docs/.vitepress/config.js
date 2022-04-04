module.exports = {
    base: '/',
    lang: 'pt-BR',
    title: 'ORCSS - O guia de CSS',
    description: 'ORCSS é um guia para deixar o CSS simples e escalável',
    themeConfig: {
        nav: [
            { text: 'Guia', link: '/guide/', activeMatch: '^/guide/' },
            { text: 'Exemplos', link: '/examples/', activeMatch: '^/examples/' }
        ],
        sidebar: {
            '/guide/': getGuideSidebar()
        }
    }
};

function getGuideSidebar() {
    return [
        {
            text: 'Introdução',
            children: [
                { text: 'Sobre o ORCSS', link: '/guide/' },
                { text: 'Iniciando', link: '/guide/starting' }
            ]
        },
        {
            text: 'Categorização',
            children: [
                { text: 'Descrição', link: '/guide/frontmatter' }
            ]
        },
        {
            text: 'Estruturação',
            children: [
                { text: 'Descrição', link: '/guide/frontmatter' }
            ]
        },
        {
            text: 'Escrita',
            children: [
                { text: 'Descrição', link: '/guide/frontmatter' }
            ]
        }
    ];
}
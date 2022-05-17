
const globalHead = [
    [ 'meta', { name: 'author', content: 'Samuel Martinenghi' } ],
    [ 'link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' } ],
    [ 'link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' } ],
    [ 'link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' } ],
    [ 'meta', { name: 'msapplication-TileColor', content: '#f8f8f2' } ],
    [ 'meta', { name: 'theme-color', content: '#282936' } ],
    [ 'meta', { property: 'og:image', content: '/assets/og_image.jpg' } ],
    [ 'script', {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-HJJJME2HLG',
        crossorigin: 'anonymous',
        async: true
    } ],
    [ 'script', {}, `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
	
		gtag('config', 'G-HJJJME2HLG');
	` ],
    [ 'script', {}, `
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-NSSDFJC');
	` ]
];

const descriptionPt = 'ORCSS é um guia de CSS que mostra boas práticas para ter um CSS simples, organizado e escalável. Também mostra como preparar o CSS para funcionar com um Design System.';

module.exports = {
    base: '/',
    lastUpdated: true,
    locales: {
        '/': {
            lang: 'pt-BR',
            title: 'ORCSS',
            description: descriptionPt,
            head: [
                ...globalHead,
                [ 'meta', { property: 'og:description', content: descriptionPt } ],
                [ 'meta', { name: 'keywords', content: 'CSS, guia de CSS, design system' } ]
            ]
        }
        // '/en/': {
        //     lang: 'en-US',
        //     title: 'ORCSS',	
        //     description: 'ORCSS is a CSS guide that shows best practices for having simple, organized and scalable CSS. It also shows how to prepare CSS to work with a Design System.',
        //     head: [
        //         ...globalHead,
        //         [ 'meta', { name: 'keywords', content: 'CSS, CSS guide, design system' } ]
        //     ]
        // }
    },
    themeConfig: {
        repo: 'Hai-San/orcss',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        locales: {
            '/': {
                label: 'Português',
                editLinkText: 'Edite essa página no GitHub',
                lastUpdated: 'Última atualização',
                selectText: 'Idiomas',
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
            // '/en/': {
            //     label: 'English',
            //     editLinkText: 'Edit this page on GitHub',
            //     lastUpdated: 'Last Updated',
            //     nav: [
            //         { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
            //         { text: 'Config', link: '/settings/', activeMatch: '^/settings/' },
            //         { text: 'Help', link: '/help/', activeMatch: '^/help/' }
            //     ],
            //     sidebar: {
            //         '/guide/': getGuideSidebar(),
            //         '/settings/': getSettingsSidebar(),
            //         '/help/': getHelpSidebar()
            //     }
            // }
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
                { text: 'Classes de estado', link: '/guide/writing/status-classes' },
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
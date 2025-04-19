export const headConfig = [
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

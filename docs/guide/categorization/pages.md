# Páginas
Não podemos negar que todos os projetos na WEB e até mesmo softwares desktop são formados por grupos de páginas. As páginas normalmente são unicas e não vai existir outra página com o mesmo nome e estrutura. Isso é uma boa oportunidade para utilizar os nomes de página como classes CSS e assim criar nomes únicos e exclusivos para cada página, assim evitando conflitos de nomes e estilos. Para isso, as páginas possuem um elemento principal que engloba todo HTML.

Esse elemento é formado pelas seguintes características:
- Possui uma classe única formada pelo prefixo `page` seguido pelo nome da página: `pageHome` `pageBlog` `pagePostBlog`.
- A classe da página deve existir mesmo que não seja aplicado nenhum estilho diretamente a ela, pois ela servirá como parâmetro para elementos filhos.
- Elementos que não fazem parte de um componente herdam o nome da página.

```html
<body class="pageHome">
    <main class="pageHome_main">
		<h1 class="pageHome_title">Page title</h1>
    </main>

	<aside class="pageHome_aside">
		<h2 class="pageHome_aside_title"></h2>
		<p class="pageHome_aside_description"></p>
	</aside>
</body>
```
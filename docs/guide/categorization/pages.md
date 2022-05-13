# Páginas
Para começar, não podemos negar que todos os projetos na WEB e até mesmo softwares desktop são formados por grupos de páginas. As páginas são únicas e não vão existir páginas com o mesmo nome e estrutura. Isso é uma boa oportunidade para criar nomes de classe únicos que sejam baseados nos nomes das páginas, dessa forma é possível evitar conflitos de nomes e estilos.

## Características
* As páginas possuem um elemento principal que engloba todo HTML da página.
* Possuem uma classe única formada pelo prefixo `page` seguido pelo nome da página: `pageHome` `pageBlog` `pagePostBlog`.
* A classe da página deve existir mesmo que não seja aplicado nenhum estilho diretamente a ela, pois ela servirá como parâmetro para elementos filhos.
* Elementos que não fazem parte de um componente devem herdar o nome da página.

## Exemplo
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
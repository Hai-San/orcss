# Categorização
Antes de saber como escrever o nome das classes e seus prefixos, é importante aprender como categorizar os elementos no HTML. 
Essa categorização torna muito mais simples visualizar como vamos estruturar o CSS e nomear as classes.

Essa categorização é formada pelos seguintes itens:

## Páginas
Elementos de página são formados apenas por um elemento principal que engloba todo HTML de uma página.

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

## Componentes
Componentes são blocos de código HTML que podem ser reutilizados em várias partes do projeto.

Características:
- Deve ter uma classe principal com um nome exclusivo que não herda o nome de nenhum outro elemento.
- Todos os elementos dentro de um componente herdam seu nome.
- Possuem um CSS exclusivo.

```html
<section class="featuredPosts">
	<div class="featuredPosts_container">
		<div class="featuredPosts_header">
			<h1 class="featuredPosts_title">featured posts</h1>
			<p class="featuredPosts_description">featured posts description</p>
		</div>

		<ul class="featuredPosts_list">
		</ul>
	</div>
</section>
```

## Blocos
- São utilizados para agrupar quaisquer outros elementos dentro de um componente ou página.
- Sempre herdam o nome de outro elemento (página, componente ou bloco pai).    

	Se dividem em duas subcategorias:
    
    ### Blocos hereditários    
    - Um bloco sempre será hereditário quando **pelo menos 1** elemento filho herdar o nome do bloco.
    - Um elemento pode herdar o nome de um bloco para evitar elementos de nomes duplicados.
    - Um elemento também pode herdar o nome de um bloco apenas para deixar mais claro onde o elemento se localiza dentro do HTML.
    ```html
	<body class="pageHome">
		<main class="pageHome_main"> <!-- Bloco hereditário -->
			<h1 class="pageHome_main_title">Page title</h1>
		</main>
	</body>
	```
    
    ### Blocos de estruturação    
    - Esse blocos servem unicamente para organizar elementos.
    - Um bloco sempre será de estruturação quando **nenhum** elemento filho herdar o nome do bloco.
    ```html
	<body class="pageHome">
		<main class="pageHome_main"> <!-- Bloco de estruturação-->
			<h1 class="pageHome_title">Page title</h1>
		</main>
	</body>
	```

## Unidades
- São elementos que **NÃO** possuem outros elementos dentro.
- Sempre herda o nome de outro elemento (página, componente ou bloco pai).
- Pode virar um bloco a partir do momento que houverem outros elementos dentro.
- Normalmente vai conter algum tipo de media ou texto.

```html
<img class="featuredPosts_card_image" src="/image" alt="Card Image">
<h2 class="featuredPosts_card_title">Relate post card title</h2>
<p class="featuredPosts_card_description">featured post card description</p>
```

## Exemplo completo

```html
<!-- página -->
<body class="pageHome">

	<!-- componente -->
	<header class="header">
		<img class="header_logo" src="" alt=""> <!-- unidade -->

		<!-- componente -->
		<nav class="nav">
			<!-- bloco de estruturação -->
			<ul class="nav_list">
				<!-- bloco de estruturação -->
				<li class="nav_item">
					<a class="nav_link" href="">Menu link option</a> <!-- unidade -->
				</li>
				<!-- bloco de estruturação -->
				<li class="nav_item">
					<a class="nav_link" href="">Menu link option 2</a> <!-- unidade -->
				</li>
				<!-- bloco de estruturação -->
				<li class="nav_item">
					<a class="nav_link" href="">Menu link option 3</a> <!-- unidade -->
				</li>
			</ul>
		</nav>
	</header>

	<!-- bloco de estruturação -->
	<main class="pageHome_main">

		<h1 class="pageHome_title">Page title</h1> <!-- unidade -->

		<!-- componente -->
		<section class="featuredPosts">

			<!-- bloco de estruturação -->
			<div class="featuredPosts_container">

				<!-- bloco de estruturação -->
				<div class="featuredPosts_header">
					<h1 class="featuredPosts_title">featured posts</h1> <!-- unidade -->
					<p class="featuredPosts_description">featured posts description</p> <!-- unidade -->
				</div>

				<!-- bloco de estruturação -->
				<ul class="featuredPosts_list">

					<!-- bloco hereditário -->
					<li class="featuredPosts_card">

						<!-- bloco de estruturação -->
						<div class="featuredPosts_card_imageContainer">
							<img class="featuredPosts_card_image" src="/image" alt="Card Image"> <!-- unidade -->

							<!-- bloco hereditário -->
							<ul class="featuredPosts_card_tags">
								<li class="featuredPosts_card_tags_item">Category A</li> <!-- unidade -->
								<li class="featuredPosts_card_tags_item">Category B</li> <!-- unidade -->
							</ul>
						</div>

						<!-- bloco hereditário -->
						<div class="featuredPosts_card_data">
							<h2 class="featuredPosts_card_title">Relate post card title</h2> <!-- unidade -->
							<p class="featuredPosts_card_description">featured post card description</p> <!-- unidade -->
							<a class="featuredPosts_card_link" href="/item-link">Read More</a> <!-- unidade -->
						</div>
					</li>
				</ul>
			</div>
		</section>
	</main>

	<!-- bloco hereditário -->
	<aside class="pageHome_aside">
		<h2 class="pageHome_aside_title"></h2> <!-- unidade -->
		<p class="pageHome_aside_description"></p> <!-- unidade -->
	</aside>
</body>
```
# Estilos específicos
Estilos específicos acontecem quando um componente precisa de estilos que são unicamente feitos dentro de uma página ou outro componente.

Evite quando puder, sempre dê preferência para [classes modificadoras](/docs/guide/writing/modifiers.md).

## Características
- Crie um nome de classe customizado formado pelo nome do elemento principal mais o nome do componente filho.
  - Páginas: `pageHome` + `featuredPosts` = `pageHome_featuredPosts`.
  - Componentes: `featuredPosts` + `blogCard` = `featuredPosts_blogCard`.
- É obrigatório o aninhamento das classes do componente dentro da classe customizada para ter um grau de especificidade maior. Assim não teremos conflitos com os estilos originais.

## Tipos de estilo
Existem duas formas de aplicar estilos específicos, uma delas é por [container](#container) e a outra é [direta](#direct). Vamos ver como cada uma delas funciona.

### Container {#container}
Os estilos específicos de container são casos onde não é possível modificar a estrutura HTML do componente. Nesses casos você deve criar um elemento container e nomear ele com a classe customizada. Em seguida insira o componente dentro do elemento container e faça todas as alterações a partir da classe do container.

Componente dentro de uma página
```html
<body class="pageHome"> <!-- Page -->
	<aside class="pageHome_aside">
		<div class="pageHome_featuredPosts"> <!-- Container -->
			<section class="featuredPosts"> <!-- Component -->
				<h2 class="featuredPosts_title">featuredPosts title</h2>
			</section>
		</div>
	</aside>
</body>
```
```scss
// pageHome.scss
.pageHome_aside {
}

.pageHome_featuredPosts { // Container
	margin-top: 12px;

	.featuredPosts { // Component class
		background-color: red;
	}

	.featuredPosts_title { // Component class
		font-weight: 600;
	}
}	
```

Componente dentro de outro componente
```html
<section class="featuredPosts"> <!-- Component -->
	<h2 class="featuredPosts_title">featuredPosts title</h2>
	<ul class="featuredPosts_list">
		<div class="featuredPosts_blogCard"> <!-- container -->
			<li class="blogCard"> <!-- child component -->
				<h2 class="blogCard_title">Title</h2>
				<div class="blogCard_header">
					<h3 class="blogCard_header_title">
						Title
					</h3>
				</div>
			</li>
		</div>
	</ul>
</section>
```
```scss
// featuredPosts.scss
.featuredPosts_list {
}

.featuredPosts_blogCard { // Container
	margin-top: 12px;

	.blogCard { // Component class
		background-color: red;
	}

	.blogCard_header_title { // Component class
		font-weight: 600;
	}
}	
```
### Diretos {#direct}
Para estilos específicos diretos não é necessário criar o elemento container para casos onde é possível mexer na estrutura do componente. Nesses casos você pode inserir a classe customizada direto no elemento principal do componente. As regras permanecem as mesmas.

```html
<section class="featuredPosts"> <!-- Component -->
	<h2 class="featuredPosts_title">featuredPosts title</h2>
	<ul class="featuredPosts_list">
		<li class="blogCard featuredPosts_blogCard"> <!-- child component + custom class -->
			<h2 class="blogCard_title">Title</h2>
			<div class="blogCard_header">
				<h3 class="blogCard_header_title">
					Title
				</h3>
			</div>
		</li>
	</ul>
</section>
```
```scss
// featuredPosts.scss
.featuredPosts_list {
}

.featuredPosts_blogCard { // Component custom class
	margin-top: 12px;

	&.blogCard { // Component class
		background-color: red;
	}

	.blogCard_header_title { // Component class
		font-weight: 600;
	}
}	
```

### Frameworks
Nas estruturas atuais é possível importar os componentes e inserir dentro da página, dessa forma não temos o HTML do componente diretamente dentro do HTML da página, assim não podemos atribuir um nome de classe diretamente ao componente e criar um container é uma forma mais simples. 

Caso você queira inserir de forma direta, você pode criar uma propriedade `const customClass = ''` dentro do componente, essa propriedade seria inserida dentro do atributo `class` do componente. Em seguida, dentro da página onde o componente foi inserido, passamos o nome da classe como valor da propriedade criada `customClass="pageHome_featuredPosts"`. A forma como isso pode ser feito varia de acordo com o framework utilizado, mas a lógica é a mesma.
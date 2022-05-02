# Blocos
- São utilizados para agrupar quaisquer outros elementos dentro de um componente ou página.
- Sempre herdam o nome de outro elemento (página, componente ou bloco pai).    

Se dividem em duas subcategorias:

## Blocos hereditários    
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

## Blocos de estruturação    
- Esse blocos servem unicamente para organizar elementos.
- Um bloco sempre será de estruturação quando **nenhum** elemento filho herdar o nome do bloco.
  
```html
<body class="pageHome">
	<main class="pageHome_main"> <!-- Bloco de estruturação-->
		<h1 class="pageHome_title">Page title</h1>
	</main>
</body>
```
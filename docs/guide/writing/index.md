# Escrita
Regras de como as classes devem ser nomeadas e organizadas dentro do CSS.

## Dicas gerais
* Evite nomes atômicos e difíceis de entender
* Não utilize IDs ou tags para aplicar estilo, SEMPRE utilize classes. Isso diminui a probabilidade de conflitos de especificidade.
* Sempre crie variáveis (tokens) para valores de atributos que são utilizados em todo o projeto (cores, espaçamentos, bordas, fontes etc...)

---
## Nomenclatura

* Use `camelCase` para nomes com mais de uma palavra
	```css
	.card {
	}

	.blogCard {
	}

	.myBlogCard {		
	}
	```

* Elementos filhos devem herdar o nome do componente. Utilize underline `_` para separar os nomes.
  	```html
	<li class="blogCard">
		<div class="blogCard_header">
			<h3 class="blogCard_title">
				Title
			</h3>
		</div>
		<p class="blogCard_tagName"></p>
	</li>
	```
	```css
	.blogCard_header {
	}

	.blogCard_title {
	}

	.blogCard_tagName {
	}
	```
* Podemos utilizar encadeamento de herança para evitar elementos com nome de classe duplicado.
	```html
	<li class="blogCard">
		<h2 class="blogCard_title">Title</h2>
		<div class="blogCard_header">
			<h3 class="blogCard_header_title">
				Title
			</h3>
		</div>
	</li>
	```
	```css
	.blogCard_title {		
	}

	.blogCard_header_title {
	}
	```

	:::tip
	O encadeamento de herança pode ser utilizado mesmo não existindo nomes duplicados dentro de um componente, porém dessa forma você estará criando nomes longos sem necessidade.
	:::

---
## Aninhamento
Utilizando o SASS é possível fazer aninhamento de classes. Essa funcionalidade é muito boa para deixar o CSS mais organizado e simples de entender. 

:::danger Atenção
Apesar do aninhamento ser muito bom, cuidado para não tornar isso um grande problema, pois fazer aninhamentos muito longos ou sem necessidade, acaba deixando o CSS com uma especificidade muito alta e consequentemente difícil de manter.
:::

* Não faça aninhamento de classes filhas
```html
<li class="blogCard">
	<h2 class="blogCard_title">Title</h2>
	<div class="blogCard_header">
		<h3 class="blogCard_header_title">
			Title
		</h3>
	</div>
</li>
```

:heavy_check_mark: Correto - O sistema de herança é feito justamente para evitar aninhamentos, criar nomes de classes únicos e evitar especificidade.
```scss
.blogCard {
}

.blogCard_title {
}

.blogCard_header {		
}

.blogCard_header_title {
}
```

:x: Errado
- Gera muito mais CSS e com maior especificidade
- Grandes aninhamentos ficam difíceis de ler
- Classes modificadoras, filhos e seletores ficam todos juntos
  
```scss
.blogCard {
	.blogCard_title {
	}

	.blogCard_header {
		.blogCard_header_title {
		}
	}
}

// CSS gerado
.blogCard {
}

.blogCard .blogCard_title {
}

.blogCard .blogCard_header {		
}

.blogCard .blogCard_header .blogCard_header_title {
}
```

:x: Errado
- Péssimo para leitura
  
```scss
.blogCard {
	&_title {
	}

	&_header {
		&_title {
		}
	}
}
```



# Aninhamento
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

:heavy_check_mark: Correto 
- Baixa especificidade
- Mais clareza para leitura
- Completo aproveitamento sobre sistema de herança de nomes que é feito justamente para evitar os problemas citados acima
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
- Gera mais CSS
- Maior especificidade
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
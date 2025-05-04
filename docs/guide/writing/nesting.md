# Aninhamento
O Aninhamento é muito bom para deixar o CSS mais organizado e simples de entender.

:::danger Atenção
Apesar do aninhamento ser muito bom, cuidado para não tornar isso um grande problema, pois fazer aninhamentos muito longos ou sem necessidade, acaba deixando o CSS com uma especificidade muito alta e consequentemente difícil de manter.
:::

## Quando utilizar?
Normalmente o aninhamento funciona bem para pseudo-classes, pseudo-elementos e classes que não herdam o nome do elemento pai. O objetivo é que o aninhamento seja utilizado para casos realmente necessários e seja evitado sempre que possível.

## Exemplos
Como podemos utilizar o aninhamento de forma correta.

Principais benefícios:
* Baixa especificidade
* Mais clareza para leitura
* Evita repetição de código

::: code-group
```html [BaseCard.vue]
<!-- Nome de classe baseado no nome do arquivo -->
<div class="baseCard"> 
  <span class="tagName"></span>
  <div class="header">
    <h3 class="title">
      Header Title
    </h3>
  </div>
  <div class="content">
		<p class="text">
			Text
		</p>
  </div>
  <div class="footer">
    <!-- Já temos a classe .title, então herdamos o nome do elemento pai -->
    <h4 class="footerTitle"> 
      Footer Title
    </h4>
    <!-- Já temos a classe .content, então herdamos o nome do elemento pai -->
    <div class="footerContent"> 
				<p class="footerText">
					Text
					<a class="footerTextLink">
						Link
						<i class="footerTextLinkIcon">Icon</i>
					</a>
				</p>
    </div>
		<a class="footerLink">Link</a>
  </div>
</div>
```
```scss [CSS]
.baseCard {
	.tagName {
	}

	.header {
		.title {
		}
	}

	.content {
	}

	.footer {
	}

	.footerTitle {
	}

	.footerContent {
	}
}
```
:::

### Elementos filhos
* Completo aproveitamento sobre sistema de herança de nomes
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

### Tags
* Tags sempre devem ser aninhadas
* Sempre dê preferência para classes que evitem o aninhamento
```scss
.blogCard_description {
	p {
		...
	}
}
```

### Pseudo-classes
* Sempre devem ser aninhados em uma classe
```scss
.blogCard {
	&:focus,
	&:hover {

	}
}
```

### Pseudo-elementos
* Sempre devem ser aninhados em uma classe
```scss
.blogCard_header_title {
	&::after {
		content: "→";
	}
}
```
### Outros exemplos
* [Classes de condição](status-classes.md)
* [Classes modificadoras](customization-classes.md)
* [Estilos específicos](specific-styles.md)

## Não faça isso!

Os exemplos abaixo podem causar os seguintes problemas:
* Gerar mais CSS.
* Maior especificidade de forma desnecessária.
* Mais dificuldade para manter o código.
* Grandes aninhamentos que ficam difíceis de ler.
* Classes modificadoras, classes filhas e seletores ficam todos misturados.
  
### Reaproveitamento de nomes
* Péssimo para leitura
* Torna inútil a herança de nomes no HTML que é feita para evitar aninhamento e facilitar a leitura
  
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

### Elementos filhos
Não aninhe classes de elementos filhos. O css não precisa seguir a mesma estrutura do HTML em questão de aninhamento    
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

### Super aninhamento
    
```scss
.blogCard {
	.blogCard_description {
		p {
			span {

			}
		}
	}
}

// Forma correta
.blogCard {
}

.blogCard_description {
	p {		
	}
	span {
	}
}
```



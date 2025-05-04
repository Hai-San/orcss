# Nomenclatura

O CSS vai muito além de um amontoado de propriedades para deixar um layout bonitinho. Para ter um código de qualidade, é importante saber como nomear, categorizar e organizar as classes dentro do CSS. Como reflexo disso, o projeto será mais simples de manter e terá uma escalabilidade muito mais consistente.

Vamos iniciar com as regras que devemos utilizar para criar os nomes das classes CSS.

## Nomes de classe

* Nomes de classe podem ser formados por uma ou mais palavras.
* Use `camelCase` para destacar múltiplas palavras em um mesmo nome.

```scss
.card {
}

.cardHeader {
}

.cardHeaderTitle {
}
```

## Como nomear

* Sempre tenha um elemento pai principal que sirva como base para o restante das classes do arquivo.  
  * O nome do elemento pai principal deve, idealmente, ser igual ao nome do arquivo.
* Evite duplicação de nomes de classes.  
	* Se houver a necessidade de criar um nome de classe que já exista no mesmo arquivo, acrescente o nome do elemento pai para diferenciar, criando assim nomes compostos.
		* Exemplo: Se a classe `.title` já existir no arquivo, crie a próxima classe de forma composta, como `.footerTitle`, `.listTitle`, etc., para garantir que os nomes sejam únicos e facilmente identificáveis.
		* Nesses casos, no CSS, não há necessidade de aninhar as classes, pois o nome já indicará a relação com o elemento pai.
	* **Importante**: Caso não haja conflito de nomes, não é necessário criar nomes compostos — um nome simples como `.header`, `.title`, etc., é suficiente.
* Evite usar um mesmo nome de classe para reutilizar estilos em múltiplos elementos.  
  * No início isso parece bom, mas em grande escala fica difícil de manter, pois se torna imprevisível.
* Evite criar aninhamentos muito grandes.  
  * Isso gerará muita especificidade e, depois, será difícil de manter.


#### Exemplo
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
    Content
  </div>
  <div class="footer">
    <!-- Já temos a classe .title, então herdamos o nome do elemento pai -->
    <h4 class="footerTitle"> 
      Footer Title
    </h4>
    <!-- Já temos a classe .content, então herdamos o nome do elemento pai -->
    <div class="footerContent"> 
    </div>
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

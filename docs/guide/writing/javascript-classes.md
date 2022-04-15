# Interação com Javascript
Muitas vezes alguns elementos são utilizados dentro do javascript e precisamos de alguma referência para trabalhar com o elemento.

## Seleção única
Como já dito antes, não devemos utilizar IDs para aplicar estilos CSS, porém eles são essenciais para criar identificadores únicos em elementos e são ótimo para trabalhar dentro do javascript quando precisamos selecionar um único elemento. Então, sempre utilize o atributo `id=""` para selecionar elementos únicos no seu projeto utilizando javascript.

```html
<button id="pageHome_submitButton" class="button -secondary -big">
	Submit
</button>
```

## Seleção múltipla
Para trabalhar com seleções múltiplas, nós devemos criar classes com o prefixo `js-` seguido do nome da classe: `js-blogCard` `js-card`

* Esse tipo de classe não envolve alteração de estilos do elemento pelo javascript. São classes utilizadas para manipulação da DOM (loops, inserts, remove etc...)
* Classes com o prefixo `js-` são utilizadas apenas no javascript, não aplique estilos utilizando esse tipo de classe.
  * Isso facilita a manutenção, pois se o nome da classe precisar ser alterado você vai saber exatamente onde o código vai ser afetado.
  
```html
<li class="blogCard js-blogCard">
</li>
```
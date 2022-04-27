# Tokens
Os tokens são variáveis que vem do design system e servem para padronizar informações referente ao design do projeto. Essas informações normalmente são cores, espaçamentos, tamanhos, fontes e bordas. Um conjunto de tokens pode ser utilizado para crianção de componentes e páginas inteiras.

Dentro do CSS os tokens são vistos como variáveis e ajudam muito na organização e padronização do projeto. Também tornam a sincronização entre equipes de design e desenvolvedores muito mais simples.

## Nomenclatura
Para que os tokens mantenham um mesmo padrão nos nomes, é indicado que seja criado uma estrutura de nomenclatura para os tokens. Muitas pessoas se perdem aqui e criam nomes super longos pensando apenas na parte de design, mas esquecem que cada um desses tokens vai ser escrito centenas de vezes no código, então eles precisam ser simples.

A forma que eu considero ideal é criar o nome pensando principalmente no tipo de propriedade que ele representa (cor, fonte, espaçamento, borda etc...), normalmente essa é a primeira coisa que vem ca cabeça quando alguém esta procurando um token especifico.

Um ponto importante que temos que levar em conta é que nem todos os tokens possuem as mesmas especificações. Então alguns tokens acabam ficando um pouco diferentes, menores ou maiores do que outros e isso é normal. O que se deve fazer nesses casos é tentar deixar eles "logicamente" semelhantes, e para isso devemos primeiro criar uma estrutura de nome que contemple todas as variações.

### Estrutura completa
Essa estrutura representa todas as especificações que um token pode ter, porém quase nunca todas estarão presente em um mesmo token. Agora eu vou mostrar um estrutura que eu considero interessante.

`componente -> tipo -> propriedade -> categoria -> variação -> escala -> unidade -> condição` 

* Componente -> Qualquer nome que represente o componente que está sendo construído. 
  * Ex: `button` `input` `link` `card` `title` `accordion`
* Tipo -> É tipo de valor que o token representa. 
  * Ex: `color` `font` `spacing` `border` `shadow`
* Propriedade -> Representa a propriedade que o token vai estilizar. 
  * Ex: `background` `text` `size` `color` `placeholder` `radius`
* Categoria -> Utilizado para criar diferentes categorias de um mesmo tipo de token. 
  * Ex: `primary` `secondary` `feedback` `neutral` `cta`
* Variação -> É um complemento da categoria e é utilizado para criar diferentes variações de uma mesma categoria do token. 
  * Ex: `low` `high` `success` `danger` `info` `warning`
* Escala -> Representa diferentes escalas de um mesmo token. 
  * Ex: `base` `dark` `medium` `light` `nano` `xxxs` `xl`
* Unidade -> Normalmente utilizado para espaçamentos e fontes, pois podemos utilizar diferentes unidades para estes tipos. Normalmente na parte de design tudo é trabalhado em pixels, então esse parâmetro não é utilizado por ser óbvio. Mas no desenvolvimento podemos converter um mesmo token para diferentes tipos de unidades, então é muito bom utilizar para não se perder nos nomes.
  * Ex: `px` `rem` `percent` `vh` `vw`
* Condição -> Indica a condição na qual o token vai ser utilizado. 
  * Ex: `hover` `focus` `interaction` `disabled`
  
Agora que já vimos a estrutura completa, vamos ver como essa estrutura é utilizada em diferentes categorias de tokens.

## Categorias
Os tokens podem ser divididos nas categorias `core` `layout` e `componentes` e cada uma delas vai ser explicada em seguida.

### Core
Tokens que armazenam os valores brutos.

A estrutura normalmente utiliza os seguintes parâmetros:
- `tipo -> categoria -> variação -> escala -> unidade` 

```scss
// tipo -> categoria -> escala
--color-primary-base: #5523c9; 
--color-primary-dark: #4012ac;
--color-primary-medium: #5f2ada;
--color-primary-light: #7d4af3;

// tipo -> categoria -> escala
--color-low-base: #000000;

--color-high-base: #FFFFFF;

// tipo -> categoria -> variação -> escala
--color-low-transparent-base: rgba(0,0,0, 0.5);

// tipo -> propriedade -> escala -> unidade
--font-size-xs-px: 16px;

// tipo -> propriedade -> escala
--border-radius-sm: 4px;

--border-width-sm: 1px;

// tipo -> escala -> unidade
--spacing-xs-px: 16px;
--spacing-sm-px: 20px;
```

---

:::info Layout e componentes
Ambas as categorias **layout** e **componentes** são tokens que possuem como valor os tokens **core**, elas são necessárias para facilitar a manutenção do código. O principal objetivo é reduzir a quantidade de modificações feitas no código CSS, focando as alterações apenas nos valores utilizados pelos tokens. Também são ótimos para projetos que possuem temas variados.
:::

### Layout
Tokens globais que podem ser utilizados em vários pontos do projeto.

A estrutura normalmente utiliza os seguintes parâmetros:
- `tipo -> propriedade -> categoria -> variação -> condição` 

```scss
--color-text: var(--color-primary-base);
--color-background: var(--color-neutral-high-base);

--color-text-foreground: var(--color-neutral-high-base);
--color-background-foreground: var(--color-neutral-low-base);

--color-text-hover: var(--color-neutral-high-base);
--color-background-hover: var(--color-neutral-low-base);

--color-background-transparent-base: var(--color-low-transparent-base);
```

### Componentes
Tokens que são criados exclusivamente para cada componente.
```scss
--button-color: var(--color-neutral-high-base);
--button-color-hover: var(--color-primary-base);

--button-background: var(--color-primary-base);
--button-background-hover: var(--color-neutral-high-base);

--button-border-size: var(--border-width-sm);
--button-border-color: var(--color-neutral-high-base);
--button-border-color-hover: var(--color-primary-base);

--button-font-size: var(--font-size-px-xs);

--button-padding: var(--spacing-px-xs) var(--spacing-px-sm);
```

### Dicas
* Não crie tokens com nomes relacionados ao valor do token, pois se em algum momento o valor do token precisar ser alterado o nome do token também terá que mudar e isso acaba demandando muito mais trabalho.

:x: Errado

```scss
:root {
	--color-primary-purple: purple;
}

.darkTheme {
	--color-primary-purple: blue;
}
```

:heavy_check_mark: Correto

```scss
:root {
	--color-primary-main: purple;
}

:root {
	--color-primary-base: purple;
}

:root {
	--color-primary-pure: purple;
}

:root {
	--color-primary-default: purple;
}

.darkTheme {
	--color-primary-main: red;
	--color-primary-base: blue;
	--color-primary-pure: yellow;
	--color-primary-default: green;
}
```

* Comece o nome do token sempre referenciando ao TIPO de valor que ele armazena. Isso facilita o processo de desenvolvimento, pois cria maior afinidade entre propriedade e valor. Isso pode parecer meio desnecessário, porém quando você inicia em uma nova empresa ou até mesmo um novo projeto, esse estilo de nomenclatura diminui a curva de aprendizado, pois será mais fácil lembrar o nome das variáveis pelo fato da primeira palavra estar ligada ao nome da propriedade CSS.
  
:x: Errado

```scss
:root {
	--primary-color-main: purple;
}

.pageHome_title {
	color: var(--primary-color-main);
}
```

:heavy_check_mark: Correto

```scss
:root {
	--color-primary-main: purple;
}

.pageHome_title {
	color: var(--color-primary-main);
	background-color: var(--color-primary-main);
	border-color: var(--color-primary-main);
}
```
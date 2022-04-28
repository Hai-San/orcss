# Tokens
Os tokens são variáveis que vem do design system e servem para padronizar informações referente ao design do projeto. Essas informações normalmente são cores, espaçamentos, tamanhos, fontes e bordas. Um conjunto de tokens pode ser utilizado para crianção de componentes e páginas inteiras.

Dentro do CSS os tokens são vistos como variáveis e ajudam muito na organização e padronização do projeto. Também tornam a sincronização entre equipes de design e desenvolvedores muito mais simples.

## Nomenclatura
Para que os tokens mantenham um mesmo padrão nos nomes, é indicado que seja criado uma estrutura de nomenclatura para os tokens. Muitas pessoas se perdem aqui e criam nomes super longos pensando apenas na parte de design, mas esquecem que cada um desses tokens vai ser escrito centenas de vezes no código, então eles precisam ser simples.

A forma que eu considero ideal é criar o nome pensando principalmente no tipo de propriedade que ele representa (cor, fonte, espaçamento, borda etc...), normalmente essa é a primeira coisa que vem ca cabeça quando alguém esta procurando um token especifico.

Um ponto importante que temos que levar em conta é que os tokens não possuem as mesmas especificações. Então alguns tokens acabam ficando um pouco diferentes, menores ou maiores do que outros e isso é normal. O que se deve fazer nesses casos é tentar deixar eles "logicamente" semelhantes, e para isso devemos primeiro criar uma estrutura de nome que contemple todas as variações.

### Estrutura completa
Essa estrutura representa todas as especificações que um token pode ter, porém quase nunca todas estarão presente em um mesmo token. Agora eu vou mostrar um estrutura que eu considero interessante.

`componente -> tipo -> propriedade -> categoria -> variação -> escala -> unidade -> condição` 

* Componente -> Qualquer nome que represente o componente que está sendo construído. 
  * Ex: `button` `input` `link` `card` `title` `accordion`
* Tipo -> É tipo de valor que o token representa e sempre vai ser utilizado.
  * Ex: `color` `font` `spacing` `border`
* Propriedade -> Representa a propriedade que o token vai estilizar. 
  * Ex: `background` `text` `size` `color` `placeholder` `radius`
* Categoria -> Utilizado para criar diferentes categorias de um mesmo tipo de token. 
  * Ex: `primary` `secondary` `feedback`  `low` `high` `cta`
* Variação -> É um complemento da categoria e é utilizado para criar diferentes variações de uma mesma categoria do token. 
  * Ex: `success` `danger` `info` `warning`
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
* `tipo -> categoria -> variação -> escala -> unidade`

```scss
// tipo -> categoria -> escala
$color-primary-base: #5523c9; 
$color-primary-dark: #4012ac;
$color-primary-medium: #5f2ada;
$color-primary-light: #7d4af3;

// tipo -> categoria -> escala
$color-low-base: #000000;

$color-high-base: #FFFFFF;

// tipo -> categoria -> variação -> escala
$color-low-transparent-base: rgba(0,0,0, 0.5);

// tipo -> propriedade -> escala -> unidade
$font-size-xs-px: 16px;
$font-size-xs-rem: 1rem;

// tipo -> propriedade -> escala
$border-radius-sm: 4px;

$border-width-sm: 1px;

// tipo -> escala -> unidade
$spacing-xs-px: 16px;
$spacing-sm-px: 20px;
```

---

:::info Layout e componentes
Ambas as categorias **layout** e **componentes** são tokens que possuem como valor os tokens **core**, elas são necessárias para facilitar a manutenção do código. O principal objetivo é reduzir a quantidade de modificações feitas no código CSS, focando as alterações apenas nos valores utilizados pelos tokens. Também são ótimos para projetos que possuem temas variados.
:::

### Layout
Tokens globais que podem ser utilizados em vários pontos do projeto.
- A nomenclatura desses tokens não tem ligação com o nome do token `core` que esta sendo utilizado como valor.
- A estrutura normalmente utiliza os seguintes parâmetros:
  - `tipo -> propriedade -> categoria -> variação -> condição` 

```scss
$color-text: $color-primary-base;
$color-background: $color-high-base;

$color-text-foreground: $color-high-base;
$color-background-foreground: $color-low-base;

$color-text-hover: $color-high-base;
$color-background-hover: $color-low-base;

$color-background-transparent-base: $color-low-transparent-base;
```

### Componentes
Tokens que são criados exclusivamente para cada componente.
```scss
$button-color: $color-high-base;
$button-color-hover: $color-primary-base;

$button-background: $color-primary-base;
$button-background-hover: $color-high-base;

$button-border-size: $border-width-sm;
$button-border-color: $color-high-base;
$button-border-color-hover: $color-primary-base;

$button-font-size: $font-size-xs-rem;

$button-padding: $spacing-px-xs $spacing-px-sm;
```

## Nomeando cores
- Cores são formadas por `tipo -> categoria -> variação -> escala`.
- As categorias mais comuns de cor são
  - `primary` - Principal cor da marca
  - `secondary` - Cor secundária da marca
  - `tertiary` - Terceira cor da marca, porém raramente utilizada.
  - `low` - Cores neutras escuras
  - `high` - Cores neutras claras
  - `feedback` - Cores para mensagens de feedback. Neste caso podemos usar as variações como categoria e não utilizar a palavra `feedback`.
    - Cores de `feedback` normalmente são utilizadas diretamente no layout, sem a necessidade de um token de `layout`, pois já são feitas exclusivamente para mensagens de feedback.
  - `cta` - Cores exclusivas para links e botões, não muito utilizadas. Normalmente as cores `primary` e `secondary` exercem essa função.
- As variações mais comuns são:
  - `transparent` - Versão com opacidade de uma categoria de cor.
  - Essas são as variações de `feedback`. Mas também podem ser utilizadas como categoria.
    - `success` - Normalmente tons de verde
    - `info` - Normalmente tons de azul
    - `warning` - Normalmente tons de amarelo
    - `danger` - Normalmente tons de vermelho
- As escalas mais comuns de cores são:
  - `base` - Utilizado para a principal cor da categoria. Pode ter outros nomes como `main` `pure` `default` e `core`
  - `darkest` - Escala mais escura
  - `dark` - Escala escura
  - `medium` - Escala mediana, normalmente mais escura do que a cor `base` e mais clara do que o `dark`
  - `light` - Escala clara
  - `lightest` - Escala mais clara
- Exemplos
```scss
$color-primary-base: #4b1eb6; 
$color-primary-dark: #36138a;
$color-primary-darkest: #270b68;
$color-primary-medium: #4317aa;
$color-primary-light: #5b29cf;
$color-primary-lightest: #7644ec;

$color-low-base: #000000;
$color-low-transparent-base: rgba(0,0,0, 0.5);

$color-high-base: #FFFFFF;

$color-cta-base: #d438b3;

$color-feedback-success-pure: #3eac30;
$color-feedback-success-dark: #238017;
$color-feedback-success-light: #66ce58;
// ou
$color-success-pure: #3eac30;
$color-success-dark: #238017;
$color-success-light: #66ce58;	
```
- ### Cores de layout
  - Os tokens de cor de layout `tipo -> propriedade -> categoria -> variação -> escala` porém o mais comum é `tipo -> propriedade -> categoria`
  - Para tokens de cor de layout são utilizadas propriedades
    - `text` - Cor utilizada nos textos do layout
    - `background` - Cor de fundo utilizada em contraste com o texto
    - `text` e `background` sempre trabalham em conjunto, um depende do outro. Sempre existe contraste entre essas duas categorias.
  - As variações mais comuns são:
    - `foreground` - Variação de contraste utilizada por cima da categoria base
    - `reverse` - Variação inversa da categoria base
    - `film` - Versão transparente da categoria base e normalmente utilizada como fundo modais
  - Exemplos
	```scss
	$color-text: $color-low-base;
	$color-background: $color-primary-lightest;

	$color-text-foreground: $color-primary-lightest;
	$color-background-foreground: $color-primary-base;

	$color-text-reverse: $color-high-base;
	$color-background-reverse: $color-primary-darkest;
	```
  
## Não faça isso!
* Não crie tokens com nomes relacionados ao valor do token, pois se em algum momento o valor do token precisar ser alterado o nome do token também terá que mudar e isso acaba demandando muito mais trabalho.

:x: Errado

```scss
$color-primary-purple: purple;
$color-primary-red: red;
$color-primary-green: green;
$color-primary-blue: blue;

// Em outro tema
$color-primary-purple: red;
$color-primary-red: blue;
$color-primary-green: yellow;
$color-primary-blue: green;
```

:heavy_check_mark: Correto

```scss
$color-primary-main: purple;
$color-primary-base: red;
$color-primary-pure: green;
$color-primary-default: blue;

// Em outro tema
$color-primary-main: red;
$color-primary-base: blue;
$color-primary-pure: yellow;
$color-primary-default: green;
```

* NÃO crie tokens com nomes relacionados ao tema ou marca do projeto. Isso cria múltiplas variações de um mesmo token de forma desnecessária e torna mais difícil a manutenção do projeto, pois serão muito mais tokens para manter e organizar.

* NÃO crie muitas variações de tokens de cores, tamanhos, fontes e etc... Como no caso anterior, isso também dificulta a manutenção e prejudica a consistência do projeto. Isso também prejudica muito na hora de criar um novo tema ou utilizar os tokens em outra marca, pois se foram criados 100 tokens no core, será necessário alterar o valor desses 100 tokens para cada novo tema e/ou marca que ser criado.


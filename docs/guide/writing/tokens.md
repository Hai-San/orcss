# Tokens
Os tokens são variáveis que vem do design system e servem para padronizar informações referente ao design do projeto. Essas informações normalmente são cores, espaçamentos, tamanhos, fontes e bordas. Um conjunto de tokens pode ser utilizado para crianção de componentes e páginas inteiras.

Dentro do CSS os tokens são vistos como variáveis e ajudam muito na organização e padronização do projeto. Também tornam a sincronização entre equipes de design e desenvolvedores muito mais simples.

#### Podemos classificar os tokens em três categorias:
* **Core**: Tokens que armazenam os valores brutos.
* **Layout**: São tokens que possuem como valor os tokens **core**, elas são necessárias para facilitar a manutenção do código. O principal objetivo é reduzir a quantidade de modificações feitas no código CSS, focando as alterações apenas nos valores utilizados pelos tokens. Também são ótimos para projetos que possuem temas variados.
* **Components**: São exatamente como os tokens de layout, porém são exclusivos para componentes.

Cada uma das categorias tem suas particularidades e isso será explicado com o decorrer da documentação.

## Nomenclatura
Para que os tokens mantenham um mesmo padrão nos nomes, é indicado que seja criado uma estrutura de nomenclatura para os tokens. Muitas pessoas se perdem aqui e criam nomes super longos pensando apenas na parte de design, mas esquecem que cada um desses tokens vai ser escrito centenas de vezes no código, então eles precisam ser simples.

A forma que eu considero ideal é criar o nome pensando principalmente no tipo de propriedade que ele representa (cor, fonte, espaçamento, borda etc...), normalmente essa é a primeira coisa que vem ca cabeça quando alguém esta procurando um token especifico.

Um ponto importante que temos que levar em conta é que os tokens não possuem as mesmas especificações. Então alguns tokens acabam ficando um pouco diferentes, menores ou maiores do que outros e isso é normal. O que se deve fazer nesses casos é tentar deixar eles "logicamente" semelhantes, e para isso devemos primeiro criar uma estrutura de nome que contemple todas as variações.

### Estrutura completa
Essa estrutura representa todas as especificações que um token pode ter, porém quase nunca todas estarão presente em um mesmo token. Agora eu vou mostrar um estrutura que eu considero interessante.

`component -> type -> property -> category -> variation -> scale -> unit -> condition`

`componente -> tipo -> propriedade -> categoria -> variação -> escala -> unidade -> condição` 

* `component` - Qualquer nome que represente o componente que está sendo construído. Obviamente utilizado apenas para tokens da categoria **components**.
  * Ex: `button` `input` `link` `card` `title` `accordion`
* `type` - É tipo de valor que o token representa e sempre vai ser utilizado.
  * Os mais comuns são: `color` `font` `spacing` `border`
* `property` - Representa a propriedade que o token vai estilizar. 
  * Os mais comuns são: `background` `text` `width` `size` `weight` `radius`
* `category` - Utilizado para criar diferentes categorias de um mesmo tipo de token. 
  * Cores
    * `primary` - Principal cor da marca
    * `secondary` - Cor secundária da marca
    * `tertiary` - Terceira cor da marca, porém raramente utilizada.
    * `low` - Cores neutras escuras
    * `high` - Cores neutras claras
    * `feedback` - Cores para mensagens de feedback. Neste caso podemos usar as variações como categoria e não utilizar a palavra `feedback`.
      * Cores de `feedback` normalmente são utilizadas diretamente no layout, sem a necessidade de um token de `layout`, pois já são feitas exclusivamente para mensagens de feedback.
    * `cta` - Cores exclusivas para links e botões, não muito utilizadas. Normalmente as cores `primary` e `secondary` exercem essa função.
* `variation` - É um complemento da categoria e é utilizado para criar diferentes variações de uma mesma categoria do token. 
  * Cores
    * `transparent` - Versão com opacidade de uma categoria de cor.
    * Essas são as variações de `feedback`. Mas também podem ser utilizadas como categoria de cor
      * `success` - Normalmente tons de verde
      * `info` - Normalmente tons de azul
      * `warning` - Normalmente tons de amarelo
      * `danger` - Normalmente tons de vermelho
* `scale` - Representa diferentes escalas de um mesmo token. 
  * Cores
	* `base` - Utilizado para a principal cor da categoria. Pode ter outros nomes como `main` `pure` `default` e `core`
	* `darkest` - Escala mais escura
	* `dark` - Escala escura
	* `medium` - Escala mediana, normalmente mais escura do que a cor `base` e mais clara do que o `dark`
	* `light` - Escala clara
	* `lightest` - Escala mais clara
  * Espaçamentos, font-size, border-width
    * Nessa ordem - `nano` `xxxs` `xxs` `xs` `sm` `md` `lg` `xl` `xxl` `xxxl` `ul`
  * border-radius
    * Nessa ordem - `base` `small` `medium` `large`
  * font-weight
    * Segue o padrão das fontes - `thin` `light` `regular` `medium` `semiBold` `bold` `black`
* `unit` - Normalmente utilizado para espaçamentos e fontes. Normalmente na parte de design tudo é trabalhado em pixels, então esse parâmetro não é utilizado por ser óbvio. Mas no desenvolvimento podemos converter um mesmo token para diferentes unidades, então é muito bom utilizar para não se perder nos nomes.
  * As mais comuns são: `px` `rem` `percent` `vh` `vw`
* `condition` - Indica a condição na qual o token vai ser utilizado. 
  * Os mais comuns são: `hover` `focus` `interaction` `disabled`

:::info Informações úteis
* `color` pode ser tanto um `type` quando uma `property`
* Tokens relacionados ao `border-color` são tokens de `layout`, pois utilizam os tokens de cor do `core` como valor.
:::

Agora que já vimos a estrutura completa, vamos ver como essa estrutura é utilizada em diferentes categorias de tokens.

### Estrutura Core
* A estrutura normalmente utiliza os seguintes parâmetros:
  * `type -> category -> variation -> scale -> unit`

```scss
// type -> category -> scale
$color-primary-base: #4b1eb6; 
$color-primary-dark: #36138a;
$color-primary-darkest: #270b68;
$color-primary-medium: #4317aa;
$color-primary-light: #5b29cf;
$color-primary-lightest: #7644ec;

$color-low-base: #000000;
$color-high-base: #FFFFFF;

$color-success-pure: #3eac30;
$color-success-dark: #238017;
$color-success-light: #66ce58;	

$color-cta-base: #d438b3;

// type -> category -> variation -> scale
$color-low-transparent-base: rgba(0,0,0, 0.5);

// type -> property -> scale -> unit
$font-size-xs-px: 16px;
$font-size-xs-rem: 1rem;

// type -> property -> scale
$border-radius-base: 4px;

$border-width-sm: 1px;

// type -> scale -> unit
$spacing-xs-px: 16px;
$spacing-sm-px: 20px;
```

### Estrutura Layout
* Normalmente utiliza os seguintes parâmetros:
  * Mais comum: `type -> property -> category` 
  * Ocasionalmente: `variation` `scale` `condition`
* A nomenclatura desses tokens não deve ter ligação com o nome do token `core` que esta sendo utilizado como valor, pois ele pode mudar.
* `property` mais comuns para tokens de layout são:
  * `text` - Cor utilizada nos textos do layout
  * `background` - Cor de fundo utilizada em contraste com o texto
* `text` e `background` sempre trabalham em conjunto, um depende do outro. Sempre existe contraste entre essas duas propriedades.
* As variações mais comuns são:
  * `foreground` - Variação de contraste utilizada por cima da categoria base
  * `reverse` - Variação inversa da categoria base
  * `film` - Versão transparente da categoria base e normalmente utilizada como fundo modais

```scss
// type -> property -> category
$color-text: $color-low-base;
$color-background: $color-primary-lightest;

$color-text-foreground: $color-primary-lightest;
$color-background-foreground: $color-primary-base;

$color-text-reverse: $color-high-base;
$color-background-reverse: $color-primary-darkest;

// type -> property -> variation -> scale
$color-background-transparent-base: $color-low-transparent-base;

// type -> property -> condition
$color-background-hover: $color-primary-light;

// type -> property -> scale
$border-color-base: $color-primary-medium;
```

### Estrutura Components
* Sempre iniciam com o nome do componente
* Normalmente possui a seguinte estrutura:
  * `component -> type -> property -> condition`
  * `component -> property -> condition`

```scss
// component -> property
$button-color: $color-high-base;
$button-background: $color-primary-base;
$button-padding: $spacing-px-xs $spacing-px-sm;

// component -> property -> condition
$button-color-hover: $color-primary-base;
$button-background-hover: $color-high-base;

// componente -> type -> property
$button-border-size: $border-width-sm;
$button-border-color: $color-high-base;
$button-font-size: $font-size-xs-rem;

// componente -> type -> property -> condition
$button-border-color-hover: $color-primary-base;
```

## Exemplo completo
  
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


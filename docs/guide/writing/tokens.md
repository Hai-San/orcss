# Tokens
Os tokens de design fazem parte do design system e servem para padronizar informações referente ao design do projeto. Essas informações normalmente são cores, espaçamentos, tamanhos, fontes e bordas. Um conjunto de tokens pode ser utilizado para crianção de componentes e páginas inteiras. Esses tokens são criados pelos designers, porém isso deve ser feito em conjunto com o time de desenvolvedores pelo fato de que esses mesmos tokens são utilizados na forma de variáveis dentro do CSS e ajudam na organização e padronização do projeto. Também tornam a sincronização entre equipes de design e desenvolvedores muito mais simples.

#### Podemos classificar os tokens em três categorias:
* **Core**: Tokens que armazenam os valores brutos e normalmente não são utilizados diretamente no layout do projeto.
* **Layout**: São tokens que possuem como valor os tokens **core**, elas são necessárias para facilitar a manutenção do código. O principal objetivo é reduzir a quantidade de modificações feitas no código CSS, focando as alterações apenas nos valores utilizados pelos tokens. Também são ótimos para projetos que possuem temas variados.
  * Alguns tokens `core` podem ser utilizados diretamente no layout sem a necessidade de um token de `layout`, pois seria algo redundante.
* **Components**: São exatamente como os tokens de layout, porém são exclusivos para componentes.

Cada uma das categorias tem suas particularidades e isso será explicado com o decorrer da documentação.

## Nomenclatura
Para que os tokens tenham um mesmo padrão nos nomes é indicado que seja criada uma estrutura de nomenclatura para os tokens. Muitas pessoas se perdem aqui e criam nomes super longos pensando apenas na parte de design, mas esquecem que cada um desses tokens vai ser escrito centenas de vezes no código, então eles precisam ser simples.

A forma que eu considero ideal é criar o nome pensando principalmente no tipo de propriedade que ele representa (cor, fonte, espaçamento, borda etc...), normalmente essa é a primeira coisa que vem ca cabeça quando alguém esta procurando um token especifico.

Um ponto importante que temos que levar em conta é que os tokens não possuem as mesmas especificações. Então alguns tokens acabam ficando um pouco diferentes, menores ou maiores do que outros e isso é normal. O que se deve fazer nesses casos é tentar deixar eles "logicamente" semelhantes, e para isso devemos primeiro criar uma estrutura que contemple todas as variações de nomenclatura.

### Estrutura completa
Essa estrutura representa todas as especificações que um token pode ter, porém quase nunca todas estarão presente em um mesmo token.

`component -> type -> property -> category -> variation -> scale -> unit -> condition`

`componente -> tipo -> propriedade -> categoria -> variação -> escala -> unidade -> condição` 

* `component` - Qualquer nome que represente o componente que está sendo construído. Obviamente utilizado apenas para tokens da categoria **components**.
  * Ex: `button` `input` `link` `card` `title` `accordion`
* `type` - É tipo de valor que o token representa e sempre vai ser utilizado.
  * Mais comuns: 
    * `color` - Todas as cores do projeto
    * `font` - `size`, `weight` e `family` das fontes
    * `line` - Utilizado para altura de linhas de textos, pode ficar junto com as fontes
    * `spacing` - Todos os tamanhos de espaçamentos utilizados para `margin` e `padding`
    * `border` -  `width`, `color` e `radius` das bordas
    * `screen` - Utilizado para determinar todos os tamanhos de tela que o projeto deve atender 
    * `container` - Utilizado para determinar os tamanhos de container do layout 
    * `speed` - Utilizado para determinar a velocidade das animações de interação (hover, focus)
* `property` - Representa a propriedade que o token vai estilizar. 
  * Mais comuns: `width` `size` `weight` `radius` `color` `background` `text`
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
	* `medium` - Escala mediana. Pode ser mais escura ou mais clara do que a `base`, porém mais escura do que o `light` e mais clara do que o `dark`.
	* `light` - Escala clara
	* `lightest` - Escala mais clara
  * Espaçamentos, font-size
    * Nessa ordem - `nano` `xxxs` `xxs` `xs` `sm` `md` `lg` `xl` `xxl` `xxxl` `ul`
  * border-radius, border-width
    * Nessa ordem - `base` `small` `medium` `large`
    * Radius também tem o `rounded` para bordas arredondadas
  * font-weight
    * Segue o padrão das fontes - `thin` `light` `regular` `medium` `semiBold` `bold` `black`
* `unit` - Normalmente utilizado para espaçamentos e fontes. Normalmente na parte de design tudo é trabalhado em pixels, então esse parâmetro não é utilizado por ser óbvio. Mas no desenvolvimento podemos converter um mesmo token para diferentes unidades, então é muito bom utilizar para não se perder nos nomes.
  * Para fontes: 
    * `rem`
  * Para espaçamentos
    * `px` `percent` `vh` `vw`
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
  * `foreground` - Variação de contraste utilizada por cima do token base
  * `reverse` - Variação inversa do token

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
* Tudo que é utilizado em mais de um lugar no projeto normalmente se torna um componente e os mais comuns são:
  * `button`
  * `link`
  * `input`
  * `textarea`
  * `select` - Inputs com dropdown
  * `choose` - Inputs de radio e checkbox
  * `form`
  * `header`
  * `footer`
  * `title`
  * `icon`

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

* NÃO crie muitas variações de tokens de cores, tamanhos, fontes e etc... Como no caso anterior, isso também dificulta a manutenção e prejudica a consistência do projeto. Isso também dificulta ao criar um novo tema ou utilizar os tokens em outra marca, pois se foram criados 100 tokens no core, será necessário alterar o valor desses 100 tokens para cada novo tema e/ou marca que for criada.

## Exemplos
Vou deixar aqui um exemplo completo com vários tokens que podem existir em um projeto

### Cores
Os valores são apenas ilustrar os exemplos.
```scss
$color-primary-base: #4b1eb6; 
$color-primary-dark: #36138a;
$color-primary-darkest: #270b68;
$color-primary-medium: #4317aa;
$color-primary-light: #5b29cf;
$color-primary-lightest: #7644ec;

$color-low-pure: #242424;
$color-low-dark: #1b1b1b;
$color-low-darkest: #000000;
$color-low-medium: #303030;
$color-low-light: #4b4b4b;
$color-low-lightest: #666666;

$color-high-pure: #c0c0c0;
$color-high-dark: #a0a0a0;
$color-high-darkest: #8d8d8d;
$color-high-medium: #d1d1d1;
$color-high-light: #eeeeee;
$color-high-lightest: #ffffff;

// São tokens `core` que podem ser utilizados como tokens de `layout`
$color-success-pure: #2fac1e;
$color-success-dark: #1b6412;
$color-success-medium: #1e8a10;
$color-success-light: #56cf46;

$color-info-pure: #434cc7;
$color-info-dark: #262c81;
$color-info-medium: #3139aa;
$color-info-light: #7880ee;

$color-warning-pure: #dbc12c;
$color-warning-dark: #96810d;
$color-warning-medium: #bba213;
$color-warning-light: #ecda71;

$color-danger-pure: #c52929;
$color-danger-dark: #7e0a0a;
$color-danger-medium: #b31313;
$color-danger-light: #f35d5d;
```

### Espaçamentos
* Espaçamentos escalam de forma diferente na medida que os valores  ficam maiores
  * Em espaçamentos menores qualquer diferença de valor é perceptível no layout `4` para `8` é o dobro do valor
  * Em espaçamentos maiores a diferença precisa ser maior para que haja percepção da diferença de tamanhos no layout `24` para `32`
```scss
// No lado de design esses valores estarão em pixels 4px, 8px...
$spacing-nano: 4;
$spacing-xxxs: 8;
$spacing-xxs: 12;
$spacing-xs: 16;
$spacing-sm: 20;
$spacing-md: 24;
$spacing-lg: 32;
$spacing-xl: 40;
$spacing-xxl: 52;
$spacing-xxxl: 64;
$spacing-ul: 88;

// Tokens de layout, utilizados apenas no desenvolvimento

// Valores em px 
$spacing-nano-px: #{$spacing-nano}px;

// Valores convertidos para vh (Altura da viewport)
$spacing-nano-vh: convertPxToVh($spacing-nano);
```

### Fontes
Fontes menores que 12px não são acessíveis, mas 12 ainda é muito pequeno, tente começar em 14px.
```scss
// No lado de design esses valores estarão em pixels 14px, 16px...
$font-xxs: 14;
$font-xs: 16;
$font-sm: 18;
$font-md: 24;
$font-lg: 28;
$font-xl: 36;
$font-xxl: 44;
$font-xxxl: 52;
$font-ul: 64;

// São tokens `core` que podem ser utilizados diretamente no layout, pois seus valores nunca vão mudar
$font-weight-thin: 100;
$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semiBold: 600;
$font-weight-bold: 700;
$font-weight-black: 900;

$font-family-titles: 'Libre Baskerville', serif;
$font-family-texts: 'Roboto', sans-serif;

// No design esses valores normalmente ficam em porcentagem 1.4 = 140%
$line-height-thin: 1;
$line-height-regular: 1.4;
$line-height-medium: 1.6;

// Tokens de layout, utilizados apenas no desenvolvimento
// Valores em rem 
$font-xxs-rem: convertPxToRem($font-xxs);
```

### Bordas
* São tokens `core` que podem ser utilizados como tokens de `layout`
```scss
$border-width-base: 2px;
$border-width-small: 1px;
$border-width-medium: 3px;
$border-width-large: 4px;

$border-radius-base: 4px;
$border-radius-small: 2px;
$border-radius-medium: 6px;
$border-radius-large: 10px;
$border-radius-rounded: 50%;

$border-color-pure: $color-low-pure;
$border-color-dark: $color-low-light;
$border-color-darkest: $color-low-darkest;
$border-color-medium: $color-high-darkest;
$border-color-light: $color-high-pure;
$border-color-lightest: $color-high-light;
```

### Tamanhos de tela
```scss
// No lado de design esses valores estarão em pixels 1600px, 1366px...
// Desktop
$screen-desktop-xl: 1600;
$screen-desktop-lg: 1366;
$screen-desktop-md: 1280;
$screen-desktop-sm: 1080;

// Tablet
$screen-tablet: 962;

// Mobile
$screen-mobile-xl: 768;
$screen-mobile-lg: 640;
$screen-mobile-md: 480;
$screen-mobile-sm: 375;
$screen-mobile-xs: 320;

// Tokens de layout, utilizados apenas no desenvolvimento
// Valores em rem 
$screen-desktop-xl-rem: convertPxToRem($screen-desktop-xl);
```

### Containers
* Dependem do tamanho de tela que o designer utilizou para criação do layout. 
* São tokens `core` que podem ser utilizados como tokens de `layout`
```scss
$container-base: 1406px; 
$container-small: 1320px; 
```

### Velocidade de interação
* São tokens `core` que podem ser utilizados como tokens de `layout`
```scss
$speed-base: 250ms;
$speed-slow: 350ms;
$speed-fast: 180ms;
```

### Tokens de layout
```scss
$color-text: $color-low-base;
$color-background: $color-primary-lightest;

$color-text-foreground: $color-primary-lightest;
$color-background-foreground: $color-primary-base;

$color-text-reverse: $color-high-base;
$color-background-reverse: $color-primary-darkest;

$color-background-transparent-base: $color-low-transparent-base;

$color-background-hover: $color-primary-light;

$border-color-base: $color-primary-medium;
```
### Tokens de component
```scss
// Button
$button-color: $color-primary-base;
$button-color-hover: $color-primary-base;
$button-color-focus: $color-primary-base;
$button-color-disabled: $color-low-medium;

$button-background: $color-primary-darkest;
$button-background-hover: $color-primary-medium;
$button-background-focus: $color-primary-medium;
$button-background-disabled: $color-high-dark;

$button-border-color: $color-primary-darkest;
$button-border-color-hover: $color-primary-medium;
$button-border-color-focus: $color-primary-base;
$button-border-color-disabled: $color-high-dark;

$button-padding: $spacing-xs-vh $spacing-md-vh;
$button-font-size: $font-xs-rem;

// Link
$link-color: $color-primary-base;
$link-color-hover: $color-primary-darkest;

// Input
$input-color: $color-primary-base;
$input-color-hover: $color-primary-base;
$input-color-focus: $color-primary-base;
$input-color-disabled: $color-low-medium;

$input-placeholder-color: $color-primary-base;
$input-placeholder-color-hover: $color-primary-base;
$input-placeholder-color-focus: $color-primary-base;
$input-placeholder-color-disabled: $color-low-medium;

$input-background: $color-primary-darkest;
$input-background-hover: $color-primary-medium;
$input-background-focus: $color-primary-medium;
$input-background-disabled: $color-high-dark;

$input-border-color: $color-primary-darkest;
$input-border-color-hover: $color-primary-medium;
$input-border-color-focus: $color-primary-base;
$input-border-color-disabled: $color-high-dark;

$input-padding: $spacing-xs-vh $spacing-md-vh;
$input-font-size: $font-xs-rem;
```
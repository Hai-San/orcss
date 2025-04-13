# Tokens
Pasta utilizada para organização dos design tokens e categoriza-los da forma mais prática possível.

#### A estrutura da pasta de tokens é pensada para suportar os seguintes casos:
* Os tokens podem vir de plataformas externas como style dictionary
* Os tokens podem ser utilizados por mais de uma marca ou projeto com estilos exclusivos
* Um mesmo projeto pode ter vários temas

#### 📂 Brands
* Pasta utilizada para separação dos tokens entre diferentes marcas do negócio.
* Dentro dela sempre teremos a pasta `default` que será responsável por armazenar os valores padrões dos tokens da marca principal.
* Além da pasta `default` você pode criar pastas para outras marcas seguindo a mesma estrutura da default e nomeando-as como você preferir.
* Essa pasta só vai existir caso o negócio possua mais de uma marca.

#### 📂 Brands → Default
* Pasta de tokens exclusivos da marca principal
* Você pode nomear esta pasta com o nome da sua marca principal.

Arquivos:
* 📄 `borders.scss` Tokens de borda
  * width
  * radius
  * color
* 📄 `fonts.scss` Tokens de fonte
  * size
  * weight
  * family
  * line-height
* 📄 `spacings.scss` Tokens de espaçamento
* 📄 `layout.scss` Tokens de layout
  * Tamanhos de tela
  * Tamanhos de container
  * Velocidades de interação
* 📄 `others.scss` 
  * Qualquer outros tipo de token. 
  * Você também pode criar outros arquivos para um tipo de token especifico.
       
#### 📁 Brands → Default → Components
* Tokens de componentes que são influenciados pela mudança de marca. 
* Caso nenhum token de componente seja modificado de acordo com a marca, esta pasta não será necessária.

#### 📂 Brands → Default → Themes {#themes}
* Essa pasta armazena todas as variações de temas que a marca possui. 
* Não estamos falando dos temas light e dark e sim de temas relacionado à eventos. 
* Cada um desses temas de evento pode ter as variações light e dark.
* Isso pode ser utilizado para marcas que costumam adaptar suas cores de acordo com algum evento especifico (natal, black friday, etc...).
* Segue a mesma estrutura da pasta `brands`, aqui terá uma pasta `default` que é utilizada como tema padrão 
* Deve ser criado uma nova pasta para cada tema que a marca vai utilizar.
* Caso o projeto tenha apenas os temas light e dark o nome da pasta muda de `themes` para `colors`

#### 📂 Themes → Default
Os temas trabalham apenas com tokens de cores e elas são divididas entre os seguintes arquivos.

* 📄 `main.scss` : Tokens de cores que não são alteradas independente do tema estar em modo light ou dark.
* 📄 `dark.scss` : Tokens de cores com os valores do modo dark
* 📄 `light.scss` : Tokens de cores com os valores do modo light

#### 📂 Components {#components}
* Tokens exclusivos para componentes. 
* Esses tokens são baseados nos tokens core e não possuem valores atribuídos diretamente para eles. 
* Em alguns casos esses tokens de componente podem ser separados por marca, pois o novo valor do token principal pode não ser o ideal para o componente, e neste caso o token do componente vai passar a utilizar outro token principal como seu valor.

#### 📂 Snippets {#snippets}
* Tokens exclusivos para snippets. 
* Esses tokens são baseados nos tokens core e não possuem valores atribuídos diretamente para eles. 
* Em alguns casos esses tokens de snippets podem ser separados por marca, pois o novo valor do token principal pode não ser o ideal para o snippet, e neste caso o token do snippet vai passar a utilizar outro token principal como seu valor.
* Percebeu que funciona da mesma forma que os componentes? [Explicação](snippets.md) 

#### 📂 Global {#global}
* Esta pasta vai existir apenas se a pasta de marcas existir
* Tokens utilizados globalmente independente da marca
* Aqui podemos repetir a mesma estrutura da pasta de marcas.
* Alguns arquivos podem até ser removidos da pasta de marcas e mantidos apenas aqui

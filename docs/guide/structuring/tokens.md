# 📂 Tokens

Pasta utilizada para organização dos design tokens e categoriza-los da forma mais prática possível.

#### A estrutura da pasta de tokens é pensada para suportar os seguintes casos:

- Os tokens podem vir de plataformas externas como style dictionary
- Os tokens podem ser utilizados por mais de uma marca ou projeto com estilos exclusivos
- Um mesmo projeto pode ter vários temas

* ## 📂 Brands
    Pasta utilizada para separação dos tokens entre diferentes marcas do negócio. Dentro dela sempre teremos a pasta `default` que será responsável por armazenar os valores padrões dos tokens da marca principal. Além da pasta `default` você pode criar pastas para outras marcas seguindo a mesma estrutura da default e nomeando-as como você preferir.

    * ### 📂 Default
        Pasta padrão utilizada para a marca principal. Se você preferir, pode nomear esta pasta com o nome da sua marca principal.

        - 📄 `border.scss` : Tokens relacionados as bordas (width, height, radius). Podemos ter as cores, porém apenas referenciado à algum token dentro da pasta de temas.
        - 📄 `fonts.scss` : Tokens relacionados as fontes (size, weight, family, line-height)
        - 📄 `spacing.scss` : Tokens relacionados a qualquer tipo de espaçamento (margin, padding, gap)

        * #### 📂 Components

            Aqui ficam os tokens de componentes que são influenciados pela mudança de marca. Caso nenhum token de componente seja modificado de acordo com a marca, esta pasta não será necessária.

        * #### 📂 Themes

            Essa pasta armazena todas as variações de temas que a marca possui. Isso pode ser utilizado para marcas que costumam adaptar suas cores de acordo com algum evento especifico (natal, black friday, etc...).

            Seguindo a mesma lógica da pasta `brands`, aqui teremos uma pasta `default` que é utilizada como tema principal da marca. E podemos criar uma nova pasta para cada tema que a marca pode utilizar.

            * #### 📂 Default

                Os temas trabalham apenas com a parte de cores e elas são divididas entre os seguintes arquivos.

                - 📄 `colors.scss` : Tokens de cores que não são alteradas independente do tema estar em modo light ou dark.
                - 📄 `colors_dark.scss` : Tokens de cores com os valores do modo dark
                - 📄 `colors_light.scss` : Tokens de cores com os valores do modo light

* ## 📂 Components
    Existem tokens que são exclusivos de componentes. Esses tokens são baseados nos tokens principais e não possuem valores atribuídos diretamente para eles. Em alguns casos esses tokens de componente podem ser separados por marca, pois o novo valor do token principal pode não ser o ideal para o componente, e neste caso o token do componente vai passar a utilizar outro token principal como seu valor.

* ## 📂 Global
    Tokens utilizados globalmente independente do tema que esteja ativo. Tamanhos de telas são um dos casos que podem ser adicionados nesta pasta.
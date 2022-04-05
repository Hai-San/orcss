# Categorização

Antes de mostrar como estruturar as classes no CSS é importante aprender como categorizar os elementos no HTML. 
Essa categorização torna muito mais simples visualizar como vamos estruturar o CSS e nomear as classes.

**OBS:** Quando falamos sobre **elementos** estamos nos referindo aos elementos do HTML (tags) que são divididos em algumas categorias:

## Página

- A tag `Body` sempre vai ser utilizada como o container principal de uma página
- Cada página do site tem uma classe única inserida no `body` ou no elemento container da página
- Blocos ou unidades que não fazem parte de nenhum componente, herdam o nome da página.
- Sempre é seguindo da palavra `**page`** (pageHome, pageBlog)

## Componentes

- Todos os elementos de um componente herdam seu nome
- Nunca herdam o nome de outro elemento
    
    Se dividem em duas subcategorias:
    
    ### Componentes globais
    
    - Componentes globais são partes de layout que são utilizados em várias páginas.
    - Sempre tem um arquivo CSS exclusivo para esse componente
    
    ### Componentes de página
    
    - Componentes de página, como já diz o nome, é uma parte de layout exclusiva de uma página.
    - O CSS deste componente sempre fica junto com o CSS da página.
    - Sempre são seguidos do prefixo `p-`. O prefixo não é obrigatório, porém facilita muito para identificar o tipo de componente.
    

## Blocos

- São utilizados para agrupar quaisquer outros elementos  dentro de um componente ou página
- Sempre herdam o nome de outro elemento (página, componente ou bloco pai)
    
    Se dividem em três subcategorias:
    
    ### Blocos hereditários
    
    - Um bloco sempre será hereditário quando **pelo menos 1** elemento filho herdar o seu nome.
    
    ### Blocos de estruturação
    
    - Um bloco sempre será de estruturação quando **nenhum** elemento filho herdar o seu nome.

## Unidades

- É a parte de um componente que **NÃO** possui outros elementos dentro
- Sempre herdam o nome de outro elemento (página, componente ou bloco pai)
- Pode virar um bloco a partir do momento que tiver outros elementos dentro
- Normalmente vai conter algum tipo de media ou texto

Exemplo de uma estrutura HTML com todas as categorias

```html
<!-- página -->

<body class="pageHome">

    <!-- componente -->
    <header class="header"></header>

    <!-- bloco de estruturação -->
    <main class="pageHome_main">

        <!-- componente -->
        <section class="featuredPosts">

            <!-- bloco de estruturação -->
            <div class="featuredPosts_container">

                <!-- bloco hereditário -->
                <div class="featuredPosts_header">
                    <h1 class="featuredPosts_header_title">featured posts</h1> <!-- unidade -->
                    <p class="featuredPosts_header_description">featured posts description</p> <!-- unidade -->
                </div>

                <!-- bloco de estruturação -->
                <ul class="featuredPosts_list">

                    <!-- bloco hereditário -->
                    <li class="featuredPosts_card">

                        <!-- bloco de estruturação -->
                        <div class="featuredPosts_card_imageContainer">
                            <img class="featuredPosts_card_image" src="/image" alt="Card Image"> <!-- unidade -->

                            <!-- bloco hereditário -->
                            <ul class="featuredPosts_card_tags">
                                <li class="featuredPosts_card_tags_item">Category A</li> <!-- unidade -->
                                <li class="featuredPosts_card_tags_item">Category B</li> <!-- unidade -->
                            </ul>
                        </div>

                        <!-- bloco hereditário -->
                        <div class="featuredPosts_card_data">
                            <h2 class="featuredPosts_card_title">Relate post card title</h2> <!-- unidade -->
                            <p class="featuredPosts_card_description">featured post card description</p> <!-- unidade -->
                            <a class="featuredPosts_card_link" href="/item-link">Read More</a> <!-- unidade -->
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- componente de página -->
        <section class="p-featuredPosts">

            <!-- bloco de estruturação -->
            <div class="p-featuredPosts_container">

                <!-- bloco hereditário -->
                <div class="p-featuredPosts_header">
                    <h1 class="p-featuredPosts_header_title">featured posts</h1> <!-- unidade -->
                    <p class="p-featuredPosts_header_description">featured posts description</p> <!-- unidade -->
                </div>

                <!-- bloco de estruturação -->
                <ul class="p-featuredPosts_list">

                    <!-- bloco hereditário -->
                    <li class="p-featuredPosts_card">

                        <!-- bloco de estruturação -->
                        <div class="p-featuredPosts_card_imageContainer">
                            <img class="p-featuredPosts_card_image" src="/image" alt="Card Image"> <!-- unidade -->

                            <!-- bloco hereditário -->
                            <ul class="p-featuredPosts_card_tags">
                                <li class="p-featuredPosts_card_tags_item">Category A</li> <!-- unidade -->
                                <li class="p-featuredPosts_card_tags_item">Category B</li> <!-- unidade -->
                            </ul>
                        </div>

                        <!-- bloco hereditário -->
                        <div class="p-featuredPosts_card_data">
                            <h2 class="p-featuredPosts_card_title">Relate post card title</h2> <!-- unidade -->
                            <p class="p-featuredPosts_card_description">featured post card description</p> <!-- unidade -->
                            <a class="p-featuredPosts_card_link" href="/item-link">Read More</a> <!-- unidade -->
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>

    <!-- componente -->
    <footer class="footer"></footer>

</body>
```
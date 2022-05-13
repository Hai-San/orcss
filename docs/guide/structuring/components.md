# Components
Aqui ficam os estilos de cada componente do projeto

:::info Observação
Essa pasta não vai existir dentro de um estrutura de frameworks modernos. Nesses casos os estilos ficam no mesmo arquivo do HTML, automaticamente aplicando as regras dos componentes.
:::

## Especificações
* Cada componente deve ter seu próprio arquivo
* Componentes são formados por uma estrutura HTML que é diretamente ligada a um CSS exclusivo, ou seja, o CSS deve ser utilizado unicamente para um componente.
* As classes de componentes não devem ser estendidas por outras classes dentro do CSS. As únicas classes com permissão para extensão são as classes da pasta [Snippets](snippets.md)
* Podemos criar pastas para agrupar diferentes estilos de um mesmo componente\
	📂styles\
	┣ 📂components\
	┃ ┣ 📂button\
	┃ ┃ ┣ 📜main.scss - Mixins e funções utilizadas para gerar o CSS padrão de todos os botões\
	┃ ┃ ┣ 📜primary.scss - Utiliza os mixins e funções para ter um estilo exclusivo\
	┃ ┃ ┗ 📜secondary.scss

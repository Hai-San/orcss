# Dicas

## Faça
Lista de coisas legais
* Sempre utilize as unidades de medida que tem relação com a propriedade
  * Para fontes utilize `rem`
  * Para controle de responsividade utilize `rem` 
    * Seu layout fica mais acessível, pois ele vai acionar a responsividade caso o tamanho de fonte do navegador seja alterado.
    * Funciona melhor com o zoom.
  * `vh` `vw` Para espaçamentos e tamanhos de elemento de layout, isso torna o layout muito mais fluido e responsivo
    * Em alguns casos você pode utilizar `px` `%`
* Use e abuse do `flexbox`
* `grid` é mais complexo e verboso, utilize apenas quando necessário em conjunto com o `flexbox`
* A area útil do layout `viewport` não é do tamanho do monitor
  * 1920 x 1080px = 1903 x 937px
* Peça para o designer sempre fazer o layout em full HD, pois é o tamanho desktop mais utilizado (1903 x 937)
* Mobile first não é necessário na parte de layout.
  * O objetivo do mobile first nunca foi relacionado ao layout e sim ao desempenho das aplicações em dispositivos móveis que eram muito fracos na época.
  * Sim você precisa criar um layout para mobile, mas faça ele baseado no layout desktop. É muito mais fácil reduzir um layout do que aumentar. Funciona da mesma forma que uma imagem, se você tenta aumentar a resolução de uma imagem pequena ela fica com a qualidade ruim, já no caso de uma imagem grande você só precisa fazer um crop ou reduzir a resolução.

## Evite
Lista de tudo o que você NÃO deve fazer ou pelo menos evite o máximo que puder.

* Nomes atômicos
  * NÃO USE DE JEITO NENHUM.
  * Foque em nomes claros, que representem claramente o que o elemento significa.
  
* Aninhamento em excesso
  * Evite sempre que puder
  * Aninhamento é legal, mas tem gente que curte fazer aquele funil sem fim e não tem a menor ideia do caos que isso vai gerar no futuro.
  * Quando digo `excesso`, me refiro à um aninhamento maior do que 2 níveis. Apenas em alguns casos específicos será maior que isso e terá um motivo claro.

* Não utilize a unidade `rem` para espaçamentos e tamanho de elementos
  * `rem` é baseado no tamanho da fonte do elemento raiz, normalmente o `<html>`. Nesses casos se o usuário aumentar o tamanho da fonte no navegador, todos os espaçamento vão aumentar na mesma proporção e o layout vai ficar desnecessariamente maior. 
  * Se você quiser que seu layout aumente baseado no tamanho da fonte então faça isso.
  
* Shorthands `background`, `margin`, `padding`, `border`, `flex` etc... Eles podem se tornar um pouco confusos na manutenção do código e também conflitam com propriedades mais específicas
  * Evite se não for manter o mesmo padrão dentro da classe ao trabalhar com a responsividade. Começou utilizando `background`, continue utilizando `background`. Lembre, Isso dentro da mesma classe, não no projeto inteiro.
  * De preferência para propriedades mais específicas `background-color` `margin-top` `padding-left` `border-color` `flex-grow` etc...
  
* Não utilize `#id` ou `tag` para aplicar estilo, SEMPRE utilize classes. 
  * Isso diminui a probabilidade de conflitos de especificidade e facilita a manutenção.
  * Sim, eu sei que `#id` ou `tag` são necessários as vezes. MAS EVITE O MÁXIMO QUE PUDER!!
# Evite
Antes de começar a explicar todas as regras, já vou deixar aqui uma lista de tudo o que você NÃO deve fazer ou pelo menos evite o máximo que puder.

* Nomes atômicos
  * NÃO USE DE JEITO NENHUM.
  * Foque em nomes claros, que representem claramente o que o elemento significa.
  
* Aninhamento em excesso
  * Evite sempre que puder
  * Aninhamento é legal, mas tem gente que curte fazer aquele funil sem fim e não tem a menor ideia do caos que isso vai gerar no futuro.
  * Quando digo `excesso`, me refiro à um aninhamento maior do que 2 níveis. Apenas em alguns casos específicos será maior que isso e terá um motivo claro.
  
* Shorthands `background`, `margin`, `padding`, `border`, `flex` etc... Eles podem se tornar um pouco confusos na manutenção do código e também conflitam com propriedades mais específicas
  * Evite se não for manter o mesmo padrão dentro da classe ao trabalhar com a responsividade. Começou utilizando `background`, continue utilizando `background`. Lembre, Isso dentro da mesma classe, não no projeto inteiro.
  * De preferência para propriedades mais específicas `background-color` `margin-top` `padding-left` `border-color` `flex-grow` etc...
  
* Não utilize `#id` ou `tag` para aplicar estilo, SEMPRE utilize classes. 
  * Isso diminui a probabilidade de conflitos de especificidade e facilita a manutenção.
  * Sim, eu sei que `#id` ou `tag` são necessários as vezes. MAS EVITE O MÁXIMO QUE PUDER!!
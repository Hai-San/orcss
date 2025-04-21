# Sobre
<abbr title="Regras de organização para CSS">ORCSS</abbr> é um guia que apresenta boas práticas para melhorar a organização do CSS.

## Problema
Quando se trata de CSS, muitos desenvolvedores têm dificuldade em organizar uma estrutura simples e escalável. Como consequência, acabam recorrendo a soluções alternativas para "facilitar" o desenvolvimento de layouts. As mais comuns são:

1. **UI frameworks**: Muito úteis para empresas que não possuem designers e precisam de um layout pronto e funcional.
   * **Ex:** Bootstrap, Material Design, Vuetify, Chakra UI.
2. **Bibliotecas utilitárias**: Estilização baseada em classes atômicas, pensada principalmente para agilizar o desenvolvimento.
   * **Ex:** Tailwind.
3. **Bibliotecas de CSS-IN-JS**: Criadas não para melhorar o CSS, mas para se adaptar a frameworks baseados apenas em JavaScript.
   * **Ex:** styled-components, Emotion.

### Problemas Comuns
- Essas soluções nunca oferecem tudo o que o projeto realmente precisa. Com o tempo, o código vira um "Frankenstein" cheio de customizações, fazendo os desenvolvedores perderem muito tempo criando adaptações.
- Além disso, essas ferramentas possuem uma curva de aprendizado considerável e, muitas vezes, o esforço para aprendê-las não compensa as vantagens que oferecem.
- O mercado ainda exige que profissionais conheçam várias abordagens diferentes para resolver problemas que poderiam ser tratados com um CSS bem estruturado, tornando o processo cansativo e desmotivador.

O maior problema é que, a todo momento, surgem novas "soluções inovadoras" que rapidamente se tornam requisitos em vagas de emprego. Isso obriga os desenvolvedores a aprender "mil formas" de escrever um simples CSS para acompanhar um mercado ansioso e acelerado. No entanto, essa situação não é culpa exclusiva das empresas — muitos desenvolvedores não gostam (ou não entendem) de CSS e acabam buscando formas de contornar a linguagem. Por isso, muitas dessas soluções acabam fazendo sucesso, não por serem boas, mas por afastarem os profissionais do contato direto com o CSS.

## Objetivo
Este guia tem como objetivo mostrar como utilizar CSS de forma simples, rápida e escalável. A única exigência é conhecer CSS e o básico de SASS.

#### Principais vantagens
- Flexível
- Organizado
- Escalável
- Simples
- Fácil de manter
- Fácil de aprender
- Liberdade para o time de design

#### Desvantagens
- O processo de desenvolvimento é mais lento no início, pois toda a estrutura precisa ser criada do zero.
  * No longo prazo, isso é recompensado com uma estrutura muito mais consistente e ágil.

## Comparação de Soluções

<table>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>UI Frameworks</th>
      <th>Bibliotecas Utilitárias</th>
      <th>CSS-IN-JS</th>
      <th>ORCSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Permite total liberdade criativa para designers e desenvolvedores</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Possui curva de aprendizado baixa e baseada apenas em CSS e SASS</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Garante CSS limpo, organizado e fácil de manter</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Ideal para projetos de longo prazo e escaláveis</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Independente de bibliotecas ou frameworks externos</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Facilita a manutenção e evolução da interface</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Dispensa conhecimentos específicos além de CSS/SASS</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
  </tbody>
</table>

:::tip Pode ir com calma
No começo, pode parecer muita informação, mas é **muita informação simples**. Aplique as regras aos poucos e logo os resultados vão aparecer.
:::

> **"O básico bem feito é capaz de criar qualquer tipo de layout".**

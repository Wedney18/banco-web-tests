# banco-web-tests

Projeto de testes automatizados com Cypress e JavaScript, desenvolvido para demonstrar aos alunos da Mentoria 2.0 como estruturar e automatizar cenários de aplicações web, utilizando boas práticas, Custom Commands e geração de relatórios.

## Objetivo

Demonstrar, de forma prática, como implementar testes end-to-end com Cypress, organizando o código para facilitar manutenção e reuso, além de gerar relatórios detalhados dos resultados.

## Componentes do Projeto

- **Cypress**: Framework principal para automação dos testes.
- **Custom Commands**: Comandos personalizados para simplificar e reutilizar ações comuns nos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios em HTML dos testes executados.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Testes automatizados.
  - `cypress/support/commands/`: Implementação dos Custom Commands.
  - `cypress/fixtures/`: Dados de apoio para os testes.
  - `cypress/reports/`: Relatórios gerados.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- API do banco rodando: [banco-api](https://github.com/juliodelimas/banco-api)
- Aplicação Web rodando: [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação

```sh
git clone https://github.com/Wedney18/banco-web-tests.git
cd banco-web-tests
npm install
```

## Execução dos Testes

- Para rodar os testes em modo headless:
  ```sh
  npm test
  ```
- Para abrir o Cypress em modo interativo:
  ```sh
  npm run cy:open
  ```
- Os relatórios em HTML serão gerados em `cypress/reports/html/`.

## Documentação dos Testes

### Login

- **Login com dados válidos**: Usuário deve acessar o sistema e visualizar a tela de transferência.
- **Login com dados inválidos**: Usuário deve receber mensagem de erro no toast.

### Custom Commands

Os comandos personalizados estão em `cypress/support/commands/`:

- `fazerLoginComCredenciaisValidas`: Realiza login com dados válidos.
- `fazerLoginComCredenciaisInvalidas`: Tenta login com dados inválidos.
- `verificarMensagemNoToast`: Valida mensagens exibidas em toast.
- Outros comandos para facilitar ações comuns e fluxos de teste.

## Relatórios

Após a execução dos testes, os relatórios em HTML são gerados automaticamente, facilitando a análise dos resultados.

## Referências

- [Documentação Cypress](https://docs.cypress.io/)
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter)
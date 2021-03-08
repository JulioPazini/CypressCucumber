# Promotoria Digital

Projeto de automação de testes do **Promotoria Digital**.
Esses testes são desenvolvidos em JS com [CyPress](https://www.cypress.io/) e [Cucumber](https://cucumber.io/)

## Pré-Requisitos

- node >= 10.15.x - [instalação Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [instalação Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

## Arquitetura do Projeto

- Test: Pasta Raiz do projeto
  - Data: Nesta pasta são criados os arquivo JSON e arquivos de consulta a banco de dados
  - E2E
    - Constants: onde vão ficar as constantes de mensagens de sistemas, etc..
    - Elements: onde vão ficar os elementos de cada página
    - Feature: onde vão ficar as funcionalidades do sistema
    - Pages: onde vão ficar todos os objetos de cada página
    - Steps: onde vão ficar os passo-a-passo dos testes

### Dependencias

```bash
yarn upgrade && yarn
```

```bash
npm install
```

### Rodar os testes

Chrome

```bash
yarn test:chrome
```

## Reports

Ler dados JS para criação do relatório:

```bash
yarn test:allure
```

Gerar relatório no diretório `./test-report/allure-report`:

```bash
yarn allure:generate
```

Iniciar um servidor na própria máquina e abrir o relatório no navegador:

```bash
yarn allure:open
```

## Eslint and Prettier

Run check lint:

```bash
yarn code:check
```

Run format lint:

```bash
yarn code:format
```

# Projeto Cypress - Testes E2E SauceDemo

Este projeto demonstra **testes end-to-end (E2E)** utilizando [Cypress] no site [SauceDemo](https://www.saucedemo.com/), um site de teste de e-commerce.

O objetivo é criar cenários automatizados para login, carrinho e checkout, com relatórios detalhados de execução**.

---

## 📌 Cenários Implementados

1. **Login com sucesso**  
   - Testa usuário e senha válidos (`standard_user / secret_sauce`).  
   - Verifica se a página de produtos é exibida.

2. **Login inválido**  
   - Testa usuário ou senha incorretos.  
   - Verifica se a mensagem de erro é exibida.

3. **Adicionar produtos no carrinho**  
   - Adiciona dois produtos diferentes ao carrinho.  
   - Verifica se o contador do carrinho está correto.

4. **Finalizar compra (Checkout)**  
   - Preenche informações de cliente (nome, sobrenome e CEP).  
   - Finaliza pedido.  
   - Confirma mensagem de sucesso.

---

## 🛠 Tecnologias e Ferramentas

- **Linguagem:** JavaScript  
- **Framework de Teste:** Cypress  
- **Relatórios:** Mochawesome (HTML interativo)  
- **Controle de versão:** Git / GitHub  

---

## 📁 Estrutura do Projeto

cypress-saucedemo/
│── cypress/
│ ├── e2e/
│ │ ├── login.cy.js
│ │ ├── cart.cy.js
│ │ ├── checkout.cy.js
│ ├── support/
│ │ ├── commands.js
│ │ └── e2e.js
│── cypress.config.js
│── package.json
│── .gitignore
│── README.md
│── cypress/reports/ (relatórios gerados)

 🚀 Como Rodar o Projeto
git clone https://github.com/seu-usuario/cypress-saucedemo.git

npm install

npx cypress run

## Gerar Relatório
npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
npx marge cypress/reports/report.json -f report -o cypress/reports


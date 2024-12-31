# ProjetoCyDB - Testes Automatizados com Cypress

Este repositório contém um conjunto de testes E2E automatizados para o site [SauceDemo](https://www.saucedemo.com/v1/). O objetivo é validar funcionalidades como login, compra de produtos, ordenação e checkout.

## 🛠️ Ferramentas Utilizadas
- [Cypress](https://www.cypress.io/): Framework de testes.
- JavaScript: Linguagem para escrita dos testes.
- Git/GitHub: Controle de versão e colaboração.


### 🚀 Funcionalidades Testadas
- **Login:**
  - Login com sucesso.
  - Login com erro (sem username, sem password, credenciais incorretas).
- **Carrinho de Compras:**
  - Adicionar itens.
  - Remover itens.
  - Validação do total no carrinho.
- **Checkout:**
  - Fluxo de compra completo com validação de informações.
  - Ordenação de produtos por preço e nome.

### 📦 Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/OtavioRdR/ProjetoCyDB.git

2. Instale as dependências:
   ```
   npm install

3. Execute os testes:
   ```
   npx cypress open

🖼️ Capturas de Tela

👤 Autor
Seu Nome

GitHub
LinkedIn

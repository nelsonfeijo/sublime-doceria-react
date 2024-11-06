# Projeto de Carrinho de Compras

Este é um projeto de carrinho de compras desenvolvido com React no frontend e um backend em JSON Server para simulação de uma API RESTful. O objetivo é permitir a adição, remoção e listagem de produtos no carrinho, mantendo a persistência dos dados no backend.

## Funcionalidades

- **Adicionar itens ao carrinho**: Adiciona um produto ao carrinho, registrando-o no backend.
- **Remover um único item**: Remove uma unidade do item selecionado.
- **Remover todos os itens de um tipo**: Remove todos os itens com o mesmo título.
- **Visualizar carrinho agrupado**: Agrupa os itens por título e exibe a quantidade de cada produto.
- **Cálculo de total**: Calcula e exibe o total dos itens no carrinho.
- **Finalizar pedido**: Envia a lista de itens do carrinho para um número de WhatsApp, simulando um checkout.

## Tecnologias Utilizadas

- **Frontend**: React, CSS Modules
- **Backend**: JSON Server
- **Bibliotecas Auxiliares**: Axios para requisições HTTP, PropTypes para validação de tipos

## Estrutura de Pastas

```plaintext
📦seu-projeto
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Cart.jsx         # Componente de carrinho de compras
 ┃ ┃ ┗ 📜ProductList.jsx  # Lista de produtos (exemplo)
 ┃ ┣ 📂context
 ┃ ┃ ┗ 📜CartContext.jsx  # Contexto para o estado do carrinho
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useCart.jsx      # Hook personalizado para usar o contexto do carrinho
 ┃ ┗ 📜App.js             # Componente principal da aplicação
 ┣ 📜db.json              # Arquivo de dados JSON para o JSON Server
 ┣ 📜README.md            # Documentação do projeto
 ┣ 📜package.json         # Dependências e scripts do projeto
 

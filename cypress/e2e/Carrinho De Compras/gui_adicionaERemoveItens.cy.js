/// <reference types = "cypress"/>

describe('Teste E2E - Adicionando e Removendo Itens', () => {
    it('Fluxo de compra com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')

        ///pegando 1 produto
        cy.get(':nth-child(1) > .inventory_item_label')
  
        //Adicionando produtos ao carrinho 
        cy.contains('Sauce Labs Backpack').click()
        cy.get('.btn_primary').click()
        cy.get('.fa-layers-counter').click()
        cy.get('.cart_quantity').should('contain','1')
        cy.get('.item_pricebar > .btn_secondary').click()
        cy.get('.btn_action').click()
        //checando se o valor e igual a zero para garantir que nao sobrou nada no carrinho
        cy.get('[data-test="firstName"]').type('Teste')
        cy.get('[data-test="lastName"]').type('Teste')
        cy.get('[data-test="postalCode"]').type('123456')
        cy.get('.btn_primary').click()
        cy.get('.summary_info > :nth-child(3)').should('contain' , 'Shipping Information:')
        cy.get('.summary_subtotal_label').should('contain', 'Item total: $0')
    });
});
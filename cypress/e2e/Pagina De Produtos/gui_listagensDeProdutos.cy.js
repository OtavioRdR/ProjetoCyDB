/// <reference types = "cypress"/>

describe('Teste E2E - Realizando a compra com sucesso', () => {
    it('Fluxo de Listagem de Produtos', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')

        
        //Ordenando Produtos por preco de MENOR para MAIOR valor:
        cy.get('.product_sort_container').select('Price (low to high)')
        //Validando Ordem dos Produtos por preco
        cy.get(':nth-child(1) > .pricebar > .inventory_item_price').should('contain' , '$7.99')
        cy.get(':nth-child(2) > .pricebar > .inventory_item_price').should('contain' , '$9.99')
        cy.get(':nth-child(3) > .pricebar > .inventory_item_price').should('contain' , '$15.99')

        //Ordenando Produtos por preco de MAIOR para MENOR valor:
        cy.get('.product_sort_container').select('Price (high to low)')
        //Validando Ordem dos Produtos por preco
        cy.get(':nth-child(1) > .pricebar > .inventory_item_price').should('contain' , '$49.99')
        cy.get(':nth-child(2) > .pricebar > .inventory_item_price').should('contain' , '$29.99')
        cy.get(':nth-child(3) > .pricebar > .inventory_item_price').should('contain' , '$15.99')
        
        
        //Novamente ordenando mas agora de A => Z:
        cy.get('.product_sort_container').select('Name (A to Z)')
        //validando Ordem dos produtos
        cy.get(':nth-child(1) > .inventory_item_label').should('contain' , 'Sauce Labs Backpack')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain' , 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain' , 'Sauce Labs Bolt T-Shirt')

        //Novamente ordenando mas agora de Z => A:
        cy.get('.product_sort_container').select('Name (Z to A)')
        //validando Ordem dos produtos
        cy.get(':nth-child(1) > .inventory_item_label').should('contain' , 'Test.allTheThings() T-Shirt (Red)')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain' , 'Sauce Labs Onesie')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain' , 'Sauce Labs Fleece Jacket')

    

    });
});
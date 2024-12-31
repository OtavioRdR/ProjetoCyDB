/// <reference types = "cypress"/>

describe('Teste E2E - Fazendo Checkout FInal', () => {
    it('Fluxo de compra com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')

        cy.get('.product_sort_container')
        //Validando Ordem 
        cy.get(':nth-child(1) > .inventory_item_label').should('contain' , 'Sauce Labs Backpack')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain' , 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain' , 'Sauce Labs Bolt T-Shirt')
        
        //Adicionando produtos ao carrinho
        cy.contains('Sauce Labs Backpack').click()
        cy.get('.btn_primary').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()
        cy.get('.product_sort_container').select('Price (low to high)')

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()
        cy.get('.product_sort_container').select('Price (low to high)')

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()
        cy.get('.product_sort_container').select('Price (low to high)')

        //checkout
        cy.get('.fa-layers-counter').click()
        cy.get(':nth-child(3) > .cart_quantity').should('contain', '1')
        cy.get('.btn_action').click()

        cy.get('[data-test="firstName"]').type('Otavio')
        cy.get('[data-test="lastName"]').type('Rosa')
        cy.get('[data-test="postalCode"]').type('123456')
        cy.get('.btn_primary').click()
        cy.get('.summary_info > :nth-child(3)').should('contain' , 'Shipping Information:')
        cy.get('.btn_action').click()
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')

    });
});
/// <reference types = "cypress"/>

describe('Testes Funcional de Login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
    });

    it('Exibir erro no Login sem Username', () => {
        cy.visit("https://www.saucedemo.com/v1/");
        cy.get('[data-test="password"]').type("secret_sauce"); 
        cy.get('#login-button').click();
        cy.get('[data-test="error"]') 
          .should('be.visible').and('contain', 'Username is required');
    });
    
    it('Exibir erro no Login sem Password', () => {
        cy.visit("https://www.saucedemo.com/v1/");
        cy.get('[data-test="username"]').type("standard_user"); 
        cy.get('#login-button').click();
        cy.get('[data-test="error"]') 
          .should('be.visible').and('contain', 'Password is required');
    });

    it('Validando Login Incorreto', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user1")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Validando Senha Incorreta', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce2")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});
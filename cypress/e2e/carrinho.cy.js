describe('Carrinho de compras', () => {

    beforeEach(()=>{
        cy.visit('https://www.amazon.com.br/')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })

    it('Adicionar produto no carrinho', () => {
        cy.wait(12000)
        cy.get('.nav-fill > .nav-search-field').should('be.visible');
        cy.get('.nav-search-field').type('fone de ouvido PHILIPS sem fio TWS');
        cy.get('#nav-search-submit-button').click()
        cy.scrollTo(0,300)

        cy.get('[data-asin="B09XXRC59V"]').click()
        cy.wait(500)
        cy.get('#breadcrumb-back-link').should('be.visible');

        cy.get('#add-to-cart-button').click()
        cy.contains('Adicionar ao carrinho').should('be.visible');
    })

    it('Remover produto do carrinho', () => {
        cy.wait(1000)
        cy.get('#twotabsearchtextbox').type('fone de ouvido PHILIPS sem fio TWS');
        cy.get('#nav-search-submit-button').click()
        cy.scrollTo(0,300)

        cy.get('[data-asin="B09XXRC59V"]').click()
        cy.wait(500)
        cy.get('#breadcrumb-back-link').should('be.visible');

        cy.get('#add-to-cart-button').click()
        cy.contains('Adicionar ao carrinho').should('be.visible');

        //Remover o produto do carrinho
        cy.contains('Ir para o carrinho').click()
        cy.get('[value="Excluir"]').click()

        cy.contains('Seu carrinho de compras da Amazon está vazio.').should('be.visible')


    })
})
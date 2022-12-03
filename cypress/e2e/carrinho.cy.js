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
        cy.wait(1000)
        cy.get('#twotabsearchtextbox').type('fone de ouvido PHILIPS sem fio TWS');
        cy.get('#nav-search-submit-button').click()
        cy.scrollTo(0,300)

        cy.get('[data-asin="B09XXRC59V"]').click()
        cy.wait(500)
        cy.get('#breadcrumb-back-link').should('be.visible');

        cy.get('#add-to-cart-button').click()
        cy.contains('Adicionar ao carrinho').should('be.visible');
    })


})
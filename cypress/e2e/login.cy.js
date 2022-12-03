describe('Login', () => {

    beforeEach(()=>{
        cy.visit('https://www.amazon.com.br/')

    })

    it('Fazer login', () =>{
        cy.get('[data-nav-role="signin"]').contains('Faça seu login').click({force:true})
    })

})
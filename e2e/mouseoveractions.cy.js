describe('template',()=>{
    it('passes',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('include','rahulshettyacademy.com')
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true})
    })
})
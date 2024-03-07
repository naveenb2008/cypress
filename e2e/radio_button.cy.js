///<reference types='Cypress'/>
describe('radiobutton',()=>{
    it('to handle radio button',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('include','rahulshettyacademy.com')
        cy.get("[value='radio3']").check().should('be.checked')
    })

    
})
///<reference types ='Cypress'/>
describe("Login page test" ,()=>{
it("negative username test",()=>{

    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get("input[type='text']").type('incorrectUser')
    cy.get("input[type='password']").type('Password123')
    cy.get("button[id='submit']").should('be.visible').click()
    
})
})
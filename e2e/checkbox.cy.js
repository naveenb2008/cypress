///<reference types ='Cypress'/>
describe('chexkbox functions',()=>{
    it('handling the check box',()=>{
        cy.visit('/')
cy.get('#checkBoxOption1').click().should('be.checked')
cy.wait(3000)
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.wait(3000)
cy.get("label input[type='checkbox']").check(['Option2','Option3']).should('to.be.checked')
       
    })
})
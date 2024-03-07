describe('Order a mobile phone',()=>
{
    it('book the mobile phone in prototype website',()=>{
        cy.visit('www.google.com')
        cy.get("[class='gLFyf']").type('proto commerce{enter}') 
        cy.wait(5000)
        cy.get('h3').contains('ProtoCommerce').click()
        cy.wait(2000)
    //  cy.url().should('include','https://rahulshettyacademy.com/angularpractice/')
    cy.wait(3000)
     cy.get("[class^='form-control ng-touched ']").type('naveen')
    cy.get("[name='email']").type('naveen@gmail.com')
     cy.get("[placeholder='Password']").type('skfgaksasmfsd')
cy.get('select').select('Male').should('have.form-control','Male')
cy.get("#inlineRadio2").click()
cy.get("input[name='bday']").type('20081997')
cy.get("input[value='Submit']").click()
cy.get('a').contains('shop').click()


    })
})
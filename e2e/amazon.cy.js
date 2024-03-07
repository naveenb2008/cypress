///<reference types ='Cypress'/>
describe('to ordewr a laptop',()=>{
    it('book a laptop',()=>{
       cy.visit('https://www.amazon.in/').as('amazon')
       cy.get(/*'#twotabsearchtextbox'*/'#twotabsearchtextbox').type('mobile')
       cy.wait(4000)
       cy.visit('@amazon')
     


       
    })
})

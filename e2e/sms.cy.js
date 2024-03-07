///<reference types ='Cypress'/>
describe('continious message',()=>{
    it('200 msg for a person',()=>{
        cy.visit('https://mytoolstown.com/smsbomber#bestsmsbomber')
        cy.get("input[id='mobno']").type('7010292827')
        cy.get("input[id='count']").type('199')
        cy.get("button[id='startsms']").click()
        cy.wait(4000)

    })
    // it('sms bomb in another website',()=>{
    //     cy.visit('https://greatonlinetools.com/smsbomber/#smsbomber').url().should('include','greatonlinetools.com')
    //     cy.get("#mobile").type('7010292827')
    //     cy.get('#count').type(50)
    //     cy.get('#start').should('be.visible').click()
    // })
})
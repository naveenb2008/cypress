///<reference types ='Cypress'/>
describe('to handle the dynamic dropdrown',()=>{
    it('to select a country india',()=>{
        cy.visit('/').url().should('include','AutomationPractice')
        cy.get('input#autocomplete').type('in').each(($countries)=>{
            cy.wait(5000)
            if($countries.text().includes('singapore')){
                cy.wrap($countries).click()
            }
        })
    })
    it('to handle a tab',()=>{
        cy.visit('/').url().should('include',)
        cy.get('fieldset #opentab').invoke('removeAttr','blank').click()

    })
})

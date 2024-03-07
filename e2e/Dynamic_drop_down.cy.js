///<reference types='Cypress'/>
describe('dynamic drop down function',()=>{
    it('handling the drop down',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   //   cy.get("fieldset #autocomplete").type("in")
   // cy.get('.ui-menu-item').each(($countriescontainsin)=>{
   //    if($countriescontainsin.text().includes('India')){
   //       cy.wrap($countriescountainsin).click( {force: true})
   //    }
      cy.get("#openwindow")/*.invoke('removeAttr','onclick')*/.click()
 //  }
   //)
          
     })
})

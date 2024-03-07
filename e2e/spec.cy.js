///<reference types ='Cypress'/>
describe("Login page test" ,()=>{
 /* it("negative username test",()=>{
  
      cy.visit('https://practicetestautomation.com/practice-test-login/')
  
      cy.get("input[type='text']").type('incorrectUser')
      cy.get("input[type='password']").type('Password123')
      cy.get("button[id='submit']").should('be.visible').click()
      cy.screenshot() */


      it(" negative password case",()=>
      {

cy.visit("https://practicetestautomation.com/practice-test-login/")
cy.get("input[type='text']").type("student")
cy.get("input[type='password']").type("incorrectPassword")
cy.get("button[id='submit']").click()
cy.screenshot
cy.should('include','Your password is invalid!')

      })
      
  })

 
import loginData from "../protocommerce/userlogindata";
describe('to oder a phone in protocommerce',()=>{
  let userdatas;
    beforeEach(()=>{
       cy.visit('/')
       cy.fixture('logindata').then((data)=>{
        userdatas= data

       }) 
    })
    it.skip('login page',()=>{
       const detail =new loginData()
       detail.urlassertion(userdatas.baseurl)
        detail.usernamedata(userdatas.username)
         detail.useremaildata(userdatas.email)
        detail.userpassworddata(userdatas.userpassword)


        cy.get("#exampleFormControlSelect1").contains('Male').click({force: true} )
        cy.get("input[name='bday']").type(userdatas.dob)
        cy.get("[type='submit']").should('be.visible').click()
       cy.get("[class='alert alert-success alert-dismissible']")//.should('have.text','Success! The Form has been submitted successfully!.')
        cy.on('window:alert',(txt)=>{
            expect(text).to.equal('Success! The Form has been submitted successfully!.');
        })
it.only('shop page',()=>{
  cy.visit('/shop').click()

  userdatas.apple.foreach((mobile)=>{
    cy.login(mobile)
  })
    



})

    })
})
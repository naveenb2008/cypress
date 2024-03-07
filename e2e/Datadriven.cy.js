///<reference types ='Cypress'/>
import Login from "../protocommerce/logindata";
describe('Datadriven test',()=>{
 let logindata;
    before(()=>{
   //cy.visit('/')
    cy.fixture('login').then((userdata)=>{
        logindata=userdata
    })
    

 })

it('photo commerce',()=>{
    // cy.visit(logindata.baseurl).url().should('include',logindata.baseurl)
    // cy.get("input[minlength='2']").type(logindata.username)
    // cy.get("[name='email']").type(logindata.email)
    // cy.get("[placeholder='Password']").type(logindata.userpassword)

const login =new Login
cy.visit(logindata.baseurl)
//login.urlAssertion(logindata.baseurl)
login.userNameEnter(logindata.username)
login.useremailEnter(logindata.email)
login.userpassenter(logindata.userpassword)



    })
    it.skip('shop',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop').url().should('include',logindata.baseurl)
    
    })
})
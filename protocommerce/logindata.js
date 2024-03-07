class Login{
//    urlAssertion(urlIn){
   //     return cy.url().should('include',urlIn)
   // }
    userNameEnter(userNamein){
        return cy.get("input[minlength='2']").type(userNamein)
    }
    useremailEnter(useremailin){
        return cy.get("[name='email']").type(useremailin)
    }
userpassenter(userpassin){
    return cy.get("[placeholder='Password']").type(userpassin)
}
    }
export default Login;
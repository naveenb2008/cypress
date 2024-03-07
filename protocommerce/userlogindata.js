class loginData {
     urlassertion(urlin) {
      return cy.url().should('include',urlin)
    }
  
     usernamedata(usernamein) {
      return cy.get("input[minlength]").type(usernamein)
    }
  
     useremaildata(useremailin) {
      return cy.get("[name='email']").type(useremailin)
    }
     userpassworddata(userpasswordin) {
        return cy.get("[placeholder='Password']").type(userpasswordin)
      }
  
         userdob(userbirthday) {
     return cy.get("input[name='bday']").type(userbirthday)
      }
  // Add more methods as needed
  
//   "#exampleFormControlSelect1"
//   "input[name='bday']"
//   "[type='submit']"
//   "[class='alert alert-success alert-dismissible']"
    }
  export default loginData;
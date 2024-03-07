describe('project',()=>{
    it('to order th phone',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.url().should('include','rahulshettyacademy.com')

        cy.wait(5000)
        cy.get("input[minlength='2']").type('naveen')
        cy.get("[name='email']").type('naveen@gmail.com')
        cy.get("[placeholder='Password']").type('19970645')
        cy.get('select').select('Male') //.should('have.form-control','Male')
        cy.get("#inlineRadio2").click()
        cy.get("input[name='bday']").type('1997-08-20')
        cy.get("input[value='Submit']").click()
         cy.get('a').contains('Shop').click()
        cy.get('.btn.btn-info').click({ multiple: true })
         //cy.get('.card-footer').eq(2).click()
         //cy.get('.card-footer').eq(1).click()
         cy.get('.nav-link.btn.btn-primary').contains("Checkout").click()
        /cy.get('.btn.btn-danger').contains('Remove').click()
         cy.get('.btn.btn-danger').contains('Remove').click()
         cy.wait(3000)
        // var nokia_edge_price=cy.get('table tr:nth-child(1) td:nth-child(4) strong')//.contains('65000')
         //var black_berry_price= cy.get('table tr:nth-child(2) td:nth-child(4) strong')//.contains('50000')
         //var two_mobile_price=nokia_edge_price+black_berry_price
        
        // cy.log('two_mobile_price')
         cy.get('h3 strong').should('have.text','₹. 115000')
         cy.get('button').contains('Checkout ').click()
         cy.wait(5000)
         cy.get('input#country').type('in')
         cy.wait(6000)
         cy.get('ul a').contains('India').click()
        // cy.wait(6000)
         cy.get("[for='checkbox2']").click()
         cy.get("input[value='Purchase']").click() //.should('be.clicked')
         cy.should("be.visible","Success! Thank you! Your order will be delivered in next few weeks :-).")
         //cy.wait(5000)
        //  cy.get('#country').type('in')
        //  cy.get('ul li a').each(($countries)=>{
        //     if($countries.text().includes('India')){
        //      cy.wrap($countries).click({force:true})
        //     }

            
           

        })
    
      
    })
//})
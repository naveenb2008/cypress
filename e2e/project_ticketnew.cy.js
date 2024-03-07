///<reference types='cypress'/>
describe('Book a Ticket in TicketNew',()=>
{
    it('Book a BLueStar movie Ticket',()=>
    {
        cy.visit("https://ticketnew.com/movies/chennai") 
        cy.get('.searchIcon').click()
    cy.get("input[type='search']").type("Blue")
    cy.get("a[class='H5SearchMoviesList_listItem__t_YNk']").click()
    cy.get('span').contains('SCREEN2').click()
    cy.wait(3000)
     cy.get(':nth-child(3) > .FixedSeating_rightRow__PWBFJ > ul > :nth-child(2) > .FixedSeating_seatL__dETyY > :nth-child(4) > .available').click()
    cy.get('button').contains('Continue').click()
    cy.wait(10000)
   cy.screenshot()
    // cy.get("input[id='email_mobile_login']").type('8220038803')
     //cy.get(span).contains('17').click()
    //cy.screenshot(s)
//cy.get('span').contains('14').check()
//cy.screenshot()


})
})

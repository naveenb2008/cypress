const cypress = require("cypress")

describe('Alert',()=>{
    it('passes',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('alertbtn').click()
        cy.on('window:alert',
    })
})
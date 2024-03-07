describe('template spec',()=>{
    it('passes',()=>{
       
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.title().then((titletxt)=>{
            const title=titletxt
            cy.log(title)
        })
        cy.get('table tr td:nth-child(2)')
        if($cells.text().include('Rest Api')){
            cy.wrap($cells).then((celltext)=>{
                const tabledata =celltext
                cy.log(tabledata)
            })
    }
    })
    })
    
       
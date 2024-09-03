Cypress.Commands.add("autorisation", () =>{
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.rprof > p').click()
    cy.get(':nth-child(5) > .imail').type("nino.khositashvili.1@iliauni.edu.ge")
    cy.get('.ipass').type("5f095286")
    cy.get('.avtorization > .input-shablon > .form-button').click()
})

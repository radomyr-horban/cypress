// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'verifyListItemsWithTitlesArray',
  (listSelector, titlesArray) => {
    listSelector
      .should('have.length', titlesArray.length)
      .each((option, index) => {
        cy.wrap(option).should('contain.text', titlesArray[index])
      })
  }
)

Cypress.Commands.add('verifyListItemsHrefs', (listSelector, hrefObject) => {
  listSelector
    .should('have.length', Object.keys(hrefObject).length)
    .each((li) => {
      const title = li.text().trim()
      const expectedHref = hrefObject[title]
      cy.wrap(li).should('have.attr', 'href', expectedHref)
    })
})

Cypress.Commands.add('verifyListItemsTitles', (listSelector, titlesObject) => {
  listSelector
    .should('have.length', Object.keys(titlesObject).length)
    .each((li) => {
      const title = li.text().trim()
      cy.wrap(title).should('be.oneOf', Object.keys(titlesObject))
    })
})

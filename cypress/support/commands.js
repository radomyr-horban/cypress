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

Cypress.Commands.add('clickRecaptcha', () => {
  cy.window().then((win) => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById('recaptcha-token')
      .click()
  })
})

Cypress.Commands.add('verifyListItemsWithTitles', (listSelector, titles) => {
  listSelector.should('have.length', titles.length).each((li, index) => {
    cy.wrap(li).should('contain.text', titles[index])
  })
})
Cypress.Commands.add('verifyListItemsWithHref', (listSelector, hrefs) => {
  listSelector.should('have.length', hrefs.length).each((li, index) => {
    cy.wrap(li).should('contain.text', hrefs[index])
  })
})

Cypress.Commands.add(
  'verifyListItemsWithHrefAttributes',
  (listSelector, hrefObject) => {
    listSelector
      .should('have.length', Object.keys(hrefObject).length)
      .each((li) => {
        const title = li.text().trim()
        const expectedHref = hrefObject[title]
        cy.wrap(li).should('have.attr', 'href', expectedHref)
      })
  }
)

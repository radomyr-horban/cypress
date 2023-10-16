export function acceptCookiesHelper() {
  cy.get('div[id="onetrust-close-btn-container"]')
    .should('be.visible')
    .then((element) => {
      cy.wrap(element).click()
    })
}

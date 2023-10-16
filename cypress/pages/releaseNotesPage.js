class releaseNotesPage {
  elements = {
    heading: () => cy.get('main h1'),
    filterDropdown: () => cy.get('button[id="product-filter"]'),
    filterDropdownList: () => cy.get('div[role="listbox"]'),
    filterDropdownListOptions: () => cy.get('div[role="option"] span'),

    featureRequestLink: () => cy.get('main a').contains('Feature Request'),
    followUsOnTwitterLink: () =>
      cy.get('main a').contains('Follow us on Twitter'),
    filterDropdownList: () => cy.get('div[role="listbox"]'),

    //! pagination
    paginationNav: () => cy.get('nav[aria-label="pagination"]'),
    nextPageLink: () => cy.get('svg[aria-describedby="go-to-next-page"]'),
    previousPageLink: () =>
      cy.get('svg[aria-describedby="go-to-previous-page"]'),

    nextPageLinkTitle: () => cy.get('title[id="go-to-next-page"]'),
    previousPageLinkTitle: () => cy.get('title[id="go-to-previous-page"]'),

    //! current page number
    currentPageNumber: () =>
      cy.get('nav[aria-label="pagination"] > p > span').first(),
  }

  clickOnFilterDropdown() {
    this.elements.filterDropdown().should('be.visible')
    this.elements.filterDropdown().click()
  }
  selectProductOption(value) {
    cy.get('div[role="option"] span').contains(`${value}`).click()
  }

  //! pagination
  clickOnNextPageLink() {
    this.elements.nextPageLinkTitle().should('have.text', 'Go to next page')
    this.elements.nextPageLink().click()
  }
  clickOnPreviousPageLink() {
    this.elements
      .previousPageLinkTitle()
      .should('have.text', 'Go to previous page')
    this.elements.previousPageLink().click()
  }
}

module.exports = new releaseNotesPage()

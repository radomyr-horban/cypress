class supportCenterPage {
  elements = {
    heading: () => cy.get('header h1'),
    searchInput: () => cy.get('form input'),
    searchClearBtn: () => cy.get('a[data-testid="search-clear-button"] > svg'),
    searchResultsText: () => cy.get('.section__content'),
    searchResultCards: () => cy.get('a[class*="group/search-card"]'),
  }

  clickOnSearchInput() {
    this.elements
      .searchInput()
      .should('be.visible')
      .and('be.empty')
      .and('have.attr', 'placeholder', 'Search for articles...')
    this.elements.searchInput().click()
  }
  clickOnSearchClearBtn() {
    this.elements.searchClearBtn().should('be.visible')
    this.elements.searchClearBtn().click()
  }

  setSearchInput(value) {
    this.elements.searchInput().type(value)
  }
}

module.exports = new supportCenterPage()

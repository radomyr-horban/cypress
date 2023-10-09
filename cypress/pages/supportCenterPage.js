class supportCenterPage {
  elements = {
    heading: () => cy.get('header h1'),
    searchInput: () => cy.get('input[placeholder="Search for articles..."]'),
    searchClearBtn: () => cy.get('[data-testid="search-clear-button"]'),
    searchResultsText: () => cy.get('.section__content'),
    searchResultCards: () => cy.get('a[class*="group/search-card"]'),
  }

  clickOnSearchInput() {
    this.elements.searchInput().click()
  }
  clickOnSearchClearBtn() {
    this.elements.searchClearBtn().click()
  }

  setSearchInput(value) {
    this.elements.searchInput().type(value)
  }
}

module.exports = new supportCenterPage()

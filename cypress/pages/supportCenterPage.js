class supportCenterPage {
  elements = {
    heading: () => cy.get('header h1'),
    // searchInput: () => cy.get('input[placeholder="Search for articles..."]'),
    searchInput: () => cy.get('form input'),
    searchClearBtn: () => cy.get('a[data-testid="search-clear-button"] > svg'),
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

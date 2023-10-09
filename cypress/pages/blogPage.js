class blogPage {
  elements = {
    heading: () => cy.get('main h1'),
    subHeading: () => cy.get('header h2 > span'),
    filterDropdown: () => cy.get('#blog-filter'),
    // filterDropdownList: () => cy.get('#blog-filter+div'),
    filterDropdownList: () => cy.get('div[role="listbox"]'),
    filterDropdownListOptions: () => cy.get('div[role="option"] a'),
  }

  clickOnFilterDropdown() {
    this.elements.filterDropdown().click()
  }
}

module.exports = new blogPage()

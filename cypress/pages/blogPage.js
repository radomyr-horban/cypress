class blogPage {
  elements = {
    heading: () => cy.get('main h1'),
    subHeading: () => cy.get('header h2 > span'),
    filterDropdown: () => cy.get('#blog-filter'),
    filterDropdownList: () => cy.get('div[role="listbox"]'),
    filterDropdownListOptions: () => cy.get('div[role="option"] a'),

    paginationNav: () => cy.get('nav[aria-label="pagination"]'),
    nextPageLink: () => cy.get('svg[aria-describedby="go-to-next-page"]'),
    nextPageLinkTitle: () => cy.get('title[id="go-to-next-page"]'),
  }

  clickOnFilterDropdown() {
    this.elements.filterDropdown().click()
  }
  clickOnNextPageBtn() {
    this.elements.nextPageLink().click()
  }
}

module.exports = new blogPage()

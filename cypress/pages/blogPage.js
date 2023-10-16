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

    //! article
    readArticleLink: () => cy.get('main ul > li a').first(),
    articleCategory: () => cy.get('main ul > li strong').first(),
    articleTitle: () => cy.get('main ul > li h3').first(),
  }

  clickOnFilterDropdown() {
    this.elements.filterDropdown().should('be.visible')
    this.elements.filterDropdown().click()
  }
  clickOnNextPageBtn() {
    this.elements.nextPageLinkTitle().should('have.text', 'Go to next page')
    this.elements.nextPageLink().click()
  }
  //! article
  clickOnReadArticleLink() {
    this.elements.readArticleLink().should('be.visible')
    this.elements.readArticleLink().click()
  }
}

module.exports = new blogPage()

class solutionsPage {
  elements = {
    heading: () => cy.get('main h1'),
    heroOverviewText: () =>
      cy.get('section[contenttype="heroOverview"] > div > div > p'),
    seeIndustriesLink: () => cy.get('a[title="See industries"]'),
    seeUseCasesLink: () => cy.get('a[title="See use cases"]'),

    useCasesSectionStrongText: () => cy.get('section[id="use-cases"] strong'),
    useCasesSectionHeading: () => cy.get('section[id="use-cases"] h2'),

    filterDropdownBtn: () => cy.get('button[id="department-filter"]'),
    filterDropdownList: () => cy.get('div[role="listbox"]'),
    filterDropdownListOptions: () => cy.get('div[role="option"] a'),
  }

  clickOnSeeUseCasesLink() {
    this.elements.seeUseCasesLink().should('be.visible')
    this.elements.seeUseCasesLink().click()
  }
  clickOnFilterDropdownBtn() {
    this.elements
      .filterDropdownBtn()
      .should('be.visible')
      .and('have.text', 'Filter by department')
    this.elements.filterDropdownBtn().click()
  }
}

module.exports = new solutionsPage()

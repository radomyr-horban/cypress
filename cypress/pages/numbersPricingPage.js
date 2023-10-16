class numbersPricingPage {
  elements = {
    heading: () => cy.get('main h1'),
    heroOverviewText: () =>
      cy.get('section[contenttype="heroOverview"] > div > div > p'),

    payAsYouGoBoxLink: () => cy.get('a[title="Pay as you go - see plan"]'),

    volumeBasedPricingBoxLink: () =>
      cy.get('a[title="See plan for Volume based pricing"]'),

    countryFilterDropdownBtn: () => cy.get('button[id="country-filter"]'),
    currencyFilterDropdownBtn: () => cy.get('button[id="currency-filter"]'),

    countryFilterDropdownList: () => cy.get('button[id="country-filter"]+div'),
    currencyFilterDropdownList: () =>
      cy.get('button[id="currency-filter"]+div'),

    numberPricingTableCaption: () =>
      cy.get('table[id="Number-pricing"] > caption'),

    numberPricingTableData: () => cy.get('table[id="Number-pricing"] td'),

    countryFilterDropdownList: () =>
      cy.get('button[id="country-filter"] + div'),
    currencyFilterDropdownList: () =>
      cy.get('button[id="currency-filter"] + div'),
  }

  clickOnPayAsYouGoBoxLink() {
    this.elements.payAsYouGoBoxLink().should('be.visible')
    this.elements.payAsYouGoBoxLink().click()
  }

  clickOnCountryFilterDropdownBtn() {
    this.elements
      .countryFilterDropdownBtn()
      .should('be.visible')
      .and('have.text', 'United States')
    this.elements.countryFilterDropdownBtn().click()
  }

  clickOnCurrencyFilterDropdownBtn() {
    this.elements
      .currencyFilterDropdownBtn()
      .should('be.visible')
      .and('have.text', 'USD')
    this.elements.currencyFilterDropdownBtn().click()
  }

  selectCountryOption(value) {
    cy.get('button[id="country-filter"]+div div[role="option"] a')
      .contains(`${value}`)
      .click()
  }
  selectCurrencyOption(value) {
    cy.get('button[id="currency-filter"]+div div[role="option"]')
      .contains(`${value}`)
      .click()
  }
}

module.exports = new numbersPricingPage()

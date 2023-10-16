// / <reference types="cypress" />
import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import numbersPricingPage from '../../pages/numbersPricingPage'

describe('Numbers Pricing page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('9. should allow a user to use filters', () => {
    homePage.clickOnPricingLink()
    homePage.clickOnGlobalNumbersLink()

    cy.url().should('include', '/pricing/numbers')
    numbersPricingPage.elements.heading().should('have.text', 'Numbers pricing')
    numbersPricingPage.elements
      .heroOverviewText()
      .should(
        'have.text',
        'Get flexible pricing for Local, National and Toll-free Numbers, with the option to pay as you go or volume-based pricing.'
      )

    numbersPricingPage.elements.volumeBasedPricingBoxLink().should('be.visible')

    numbersPricingPage.elements.numberPricingTableCaption().should('be.visible')
    numbersPricingPage.elements.numberPricingTableData().should('contain', '$')

    numbersPricingPage.clickOnPayAsYouGoBoxLink()
    cy.url().should('include', '#pay-as-you-go')

    numbersPricingPage.clickOnCountryFilterDropdownBtn()
    numbersPricingPage.elements.countryFilterDropdownList().should('be.visible')

    numbersPricingPage.selectCountryOption('Canada')
    cy.url().should('include', '/ca')
    numbersPricingPage.elements.heading().should('contain', 'Canada')
    numbersPricingPage.elements
      .countryFilterDropdownBtn()
      .should('have.text', 'Canada')

    numbersPricingPage.clickOnCurrencyFilterDropdownBtn()
    numbersPricingPage.elements
      .currencyFilterDropdownList()
      .should('be.visible')

    numbersPricingPage.selectCurrencyOption('EUR')
    numbersPricingPage.elements.numberPricingTableData().should('contain', '€')
    numbersPricingPage.elements
      .currencyFilterDropdownBtn()
      .should('have.text', 'EUR')
  })
})

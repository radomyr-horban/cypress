// / <reference types="cypress" />
import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import solutionsPage from '../../pages/solutionsPage'
import solutionsPageFixture from '../../fixtures/solutionsPage.fixture.json'

it('8. should allow a user to filter departments on the "Solutions" page', () => {
  cy.visit('/')
  acceptCookiesHelper()

  //! navigation
  homePage.elements.navigation.solutionsLink().should('be.visible')
  homePage.clickOnSolutionsLink()

  //! solutions page
  cy.url().should('include', '/solutions')
  solutionsPage.elements
    .heading()
    .should('have.text', 'Solutions for scaling your business')
  solutionsPage.elements
    .heroOverviewText()
    .should(
      'have.text',
      'Learn how Telnyx products apply to your industry or use case.'
    )
  solutionsPage.elements.seeIndustriesLink().should('be.visible')
  solutionsPage.elements.seeUseCasesLink().should('be.visible')

  solutionsPage.clickOnSeeUseCasesLink()
  cy.url().should('include', '#use-cases')

  solutionsPage.elements
    .useCasesSectionStrongText()
    .contains(`use cases`, {
      matchCase: false,
    })
    .should('be.visible')

  solutionsPage.elements
    .useCasesSectionHeading()
    .should('be.visible')
    .and('have.text', 'Maintain control with custom, feature-rich tooling.')

  solutionsPage.elements
    .filterDropdownBtn()
    .should('be.visible')
    .and('have.text', 'Filter by department')

  solutionsPage.clickOnFilterDropdownBtn()
  solutionsPage.elements.filterDropdownList().should('be.visible')

  //!each
  solutionsPage.elements.filterDropdownListOptions().each((option) => {
    let currentOptionName = option.text().trim()
    let currentOptionHref = option.attr('href')

    cy.wrap(currentOptionHref).should(
      'contain',
      solutionsPageFixture[`${currentOptionName}`]
    )
  })
})

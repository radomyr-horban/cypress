// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import solutionsPage from '../../pages/solutionsPage'

describe('Solutions page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('8. should allow a user to filter departments', () => {
    homePage.clickOnSolutionsLink()

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

    solutionsPage.clickOnFilterDropdownBtn()
    solutionsPage.elements.filterDropdownList().should('be.visible')

    solutionsPage.elements.filterDropdownListOptions().each((option) => {
      let currentOptionName = option.text().trim()
      let currentOptionHref = option.attr('href')

      cy.fixture('solutionsPage.fixture').then((data) => {
        cy.wrap(currentOptionHref).should(
          'contain',
          data[`${currentOptionName}`]
        )
      })
    })
  })
})

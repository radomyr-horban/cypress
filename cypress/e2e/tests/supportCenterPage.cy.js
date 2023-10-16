// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import supportCenterPage from '../../pages/supportCenterPage'

describe('Support Center page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
    cy.fixture('supportCenterPage.fixture').as('supportCenterData')
  })

  it('4. should allow a user to search the website', function () {
    homePage.clickOnResourcesLink()
    homePage.clickOnSupportCenterLink()

    cy.url().should('include', 'support')
    supportCenterPage.elements.heading().should('be.visible')

    supportCenterPage.clickOnSearchInput()
    supportCenterPage.elements.searchInput().should('be.focused')

    supportCenterPage.setSearchInput(`${this.supportCenterData.searchWord}`)
    supportCenterPage.elements
      .searchInput()
      .should('have.value', `${this.supportCenterData.searchWord}`)

    supportCenterPage.elements.searchInput().type('{enter}')
    cy.url().should('include', `${this.supportCenterData.searchWord}`)

    supportCenterPage.elements
      .searchResultsText()
      .should('contain', `${this.supportCenterData.searchWord}`)

    supportCenterPage.elements
      .searchInput()
      .should('have.value', `${this.supportCenterData.searchWord}`)

    supportCenterPage.elements
      .searchResultCards()
      .first()
      .contains(`${this.supportCenterData.searchWord}`, {
        matchCase: false,
      })

    supportCenterPage.clickOnSearchClearBtn()

    cy.url().should('not.contain', `${this.supportCenterData.searchWord}`)
    supportCenterPage.elements.searchInput().should('be.empty')
  })
})

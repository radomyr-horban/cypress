// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import supportCenterPage from '../../pages/supportCenterPage'
import supportCenterPageFixture from '../../fixtures/supportCenterPage.fixture.json'

xit('4. should allow a user to search the website', () => {
  cy.visit('/')
  acceptCookiesHelper()

  //! navigation
  homePage.elements.navigation.resourcesLink().should('be.visible')
  homePage.clickOnResourcesLink()
  homePage.elements.subNavigation.supportCenterLink().should('be.visible')
  homePage.clickOnSupportCenterLink()

  //! support page
  cy.url().should('include', 'support')
  supportCenterPage.elements.heading().should('be.visible')
  supportCenterPage.elements.searchInput().should('be.visible')

  supportCenterPage.elements
    .searchInput()
    .should('be.empty')
    .and('have.attr', 'placeholder', 'Search for articles...')
    .and('be.visible')

  supportCenterPage.clickOnSearchInput()
  supportCenterPage.elements.searchInput().should('be.focused')

  supportCenterPage.setSearchInput(`${supportCenterPageFixture.searchWord}`)
  supportCenterPage.elements
    .searchInput()
    .should('have.value', `${supportCenterPageFixture.searchWord}`)

  //! enter
  supportCenterPage.elements.searchInput().type('{enter}')
  cy.url().should('include', `${supportCenterPageFixture.searchWord}`)

  supportCenterPage.elements
    .searchResultsText()
    .should('contain', `${supportCenterPageFixture.searchWord}`)

  supportCenterPage.elements
    .searchInput()
    .should('have.value', `${supportCenterPageFixture.searchWord}`)

  supportCenterPage.elements
    .searchResultCards()
    .first()
    .contains(`${supportCenterPageFixture.searchWord}`, {
      matchCase: false,
    })

  //! clear search
  supportCenterPage.elements.searchClearBtn().scrollIntoView()
  supportCenterPage.clickOnSearchClearBtn()

  cy.url().should('not.contain', `${supportCenterPageFixture.searchWord}`)
  supportCenterPage.elements.searchInput().should('be.empty')
})

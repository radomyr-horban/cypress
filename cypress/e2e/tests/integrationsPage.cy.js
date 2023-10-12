import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import integrationsPage from '../../pages/integrationsPage'
import integrationsPageFixture from '../../fixtures/integrationsPage.fixture.json'

xit('10. should allow a user to use filters on the "Integrations" page', () => {
  cy.visit('/')
  acceptCookiesHelper()

  //! navigation
  homePage.elements.navigation.whyTelnyxLink().should('be.visible')
  homePage.clickOnWhyTelnyxLink()
  homePage.elements.subNavigation.integrationsLink().should('be.visible')
  homePage.clickOnIntegrationsLink()

  // //! pricing-numbers page
  cy.url().should('include', '/marketplace')
  integrationsPage.elements
    .heading()
    .should('be.visible')
    .and('have.text', 'Welcome to the Telnyx Integration Marketplace')
  integrationsPage.elements
    .heroOverviewText()
    .should('be.visible')
    .and('have.text', 'Add Telnyx products to your favorite software')

  //!categories
  integrationsPage.elements
    .integrationsSectionTitle()
    .should('be.visible')
    .and('have.text', 'Integrations')
  integrationsPage.elements
    .categoriesSectionTitle()
    .should('be.visible')
    .and('have.text', 'Categories')

  //! titles
  cy.verifyListItemsTitles(
    integrationsPage.elements.integrationsSectionListItems(),
    integrationsPageFixture.objectIntegrations
  )
  cy.verifyListItemsTitles(
    integrationsPage.elements.categoriesSectionListItems(),
    integrationsPageFixture.objectCategories
  )

  //! hrefs
  cy.verifyListItemsHrefs(
    integrationsPage.elements.integrationsSectionListItems(),
    integrationsPageFixture.objectIntegrations
  )
  cy.verifyListItemsHrefs(
    integrationsPage.elements.categoriesSectionListItems(),
    integrationsPageFixture.objectCategories
  )
})

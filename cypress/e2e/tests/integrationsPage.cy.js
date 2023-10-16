import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import integrationsPage from '../../pages/integrationsPage'

describe('Integrations page', function () {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()

    cy.fixture('integrationsPage.fixture.json').as('integrationData')
  })

  it('10. should allow a user to use filters', function () {
    homePage.clickOnWhyTelnyxLink()
    homePage.clickOnIntegrationsLink()

    cy.url().should('include', '/marketplace')
    integrationsPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Welcome to the Telnyx Integration Marketplace')
    integrationsPage.elements
      .heroOverviewText()
      .should('be.visible')
      .and('have.text', 'Add Telnyx products to your favorite software')

    integrationsPage.elements
      .integrationsSectionTitle()
      .should('be.visible')
      .and('have.text', 'Integrations')
    integrationsPage.elements
      .categoriesSectionTitle()
      .should('be.visible')
      .and('have.text', 'Categories')

    cy.verifyListItemsTitles(
      integrationsPage.elements.integrationsSectionListItems(),
      this.integrationData.Integrations
    )
    cy.verifyListItemsTitles(
      integrationsPage.elements.categoriesSectionListItems(),
      this.integrationData.Categories
    )

    cy.verifyListItemsHrefs(
      integrationsPage.elements.integrationsSectionListItems(),
      this.integrationData.Integrations
    )
    cy.verifyListItemsHrefs(
      integrationsPage.elements.categoriesSectionListItems(),
      this.integrationData.Categories
    )
  })
})

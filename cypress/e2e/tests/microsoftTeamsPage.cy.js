// / <reference types="cypress" />
import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { createDefaultUser } from '../../helpers/createDefaultUser.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import microsoftTeamsPage from '../../pages/microsoftTeamsPage'
import thankYouPage from '../../pages/thankYouPage'

describe('Microsoft Teams page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('1. should allow a user to submit a form', () => {
    homePage.clickOnProductsLinkLink()
    homePage.clickOnMicrosoftTeamsLink()

    cy.url().should('include', '/products/enterprise-integrations-ms-teams')
    microsoftTeamsPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Microsoft Teams')
    microsoftTeamsPage.elements.heroOverviewText().should('be.visible')
    microsoftTeamsPage.elements.talkToExpertBtn().should('be.visible')
    microsoftTeamsPage.elements.getStartedLink().should('be.visible')

    microsoftTeamsPage.elements.formSectionHeading().should('be.visible')
    microsoftTeamsPage.elements.formSectionDescription().should('be.visible')
    microsoftTeamsPage.elements.formBox().should('be.visible')

    const userData = generateUserData()
    createDefaultUser(userData)

    cy.url().should('include', '/thank-you?formId')

    thankYouPage.elements.heading().should('be.visible')
    thankYouPage.elements.heroOverviewText().should('be.visible')
  })
})
